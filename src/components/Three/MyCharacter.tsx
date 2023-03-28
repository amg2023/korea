import { Ref, useMemo, useRef, useState } from "react";
import { PerspectiveCamera, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Group, Mesh, Quaternion, Vector3 } from "three";
import { IGltfReturn } from "./types";
import { useFrame, useLoader } from "@react-three/fiber";
import { useCompoundBody } from "@react-three/cannon";
import { useControls } from "../common/control/useControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../data/constant";
import { NameTag } from "./NameTag";
import { MutableRefObject } from "react";
import { isBrowser } from "react-device-detect";

const url = S3_URL + "torang.glb";

export default function MyCharacter({
  _ref,
}: {
  _ref: MutableRefObject<Group | undefined>;
}) {
  const [fov, setFov] = useState(50);
  const [block, setBlock] = useState(false);

  const [ref, api] = useCompoundBody(() => ({
    mass: 0,
    type: "Dynamic",
    shapes: [
      { args: [1.5], position: [0, 4, 0], type: "Sphere" },
      { args: [1.5, 1.5, 2.5], position: [0, 2.2, 0], type: "Cylinder" },
      { args: [1.5], position: [0, 1.5, 0], type: "Sphere" },
    ],
  }));
  const { move } = useControls();
  const { f, b, l, r, z } = move;
  const { materials, animations, scene, nodes }: any = useMemo(() => {
    const _loader: IGltfReturn = useGLTF(url);
    return _loader;
  }, [url]);
  const { actions } = useAnimations(animations!!, ref);

  useEffect(() => {
    if (f || b || l || r) {
      actions["walk"]?.reset().fadeIn(0.5).play();
      return () => {
        actions["walk"]?.fadeOut(0.5);
      };
    } else if (z) {
      actions["greet"]?.reset().fadeIn(0.5).play();
      return () => {
        actions["greet"]?.fadeOut(0.5);
      };
    } else {
      actions["idle"]?.reset().fadeIn(0.5).play();
      return () => {
        actions["idle"]?.fadeOut(0.5);
      };
    }
  }, [f, b, l, r, z]);

  const innerRef = useRef<Group>();
  const speed = 20;
  const values = useRef({
    v: [0, 0, 0],
    av: [0, 0, 0],
    p: [0.0, 0.0, 0.0],
    r: [0.0, 0.0, 0.0, ""],
  });

  useEffect(() => {
    api.velocity.subscribe((v) => (values.current.v = v));
    api.angularVelocity.subscribe((av) => (values.current.av = av));
    api.position.subscribe((p) => (values.current.p = p));
    api.rotation.subscribe((r) => (values.current.r = r));
  }, []);

  useFrame(({ camera, raycaster }) => {
    const frontAxis = new Vector3(0, 1, 0);
    const sideAxis = new Vector3(0, 0, 0);
    const V = new Vector3();
    const Q = new Quaternion();
    //fov 조정
    if (f && fov <= 60) {
      setFov(fov + 0.25);
    } else if (b && fov >= 40) {
      setFov(fov - 0.25);
    } else if (f === false && b === false) {
      if (fov < 50) {
        setFov(fov + 0.25);
      } else if (fov > 50) {
        setFov(fov - 0.25);
      }
    }

    if (!values.current) return;
    // 인사
    if (f || b || l || r) {
      const offset =
        Number(f) * 0 +
        Number(b) * Math.PI +
        Number(r) * Math.PI +
        Number(l) * -Math.PI;
      const _V = camera.getWorldDirection(V);
      _V.y = 0;
      // 벡터 회전
      _V.applyAxisAngle(f || b ? frontAxis : sideAxis, offset);
      // 정규화 후 곱하기
      _V.normalize().multiplyScalar(speed);
      const _x = _V.x;
      const _y = Number(r) * -2 * Math.PI + Number(l) * 2 * Math.PI;
      const _z = _V.z;

      if (f || b) {
        // 전후진
        // 전후 전환용
        Q.setFromAxisAngle(frontAxis, offset);
        innerRef?.current?.quaternion.rotateTowards(Q, 0.2);
        const __V = new Vector3(...values.current.p);
        __V.x += _x * 0.1;
        __V.y += _y * 0.1;
        __V.z += _z * 0.1;
        raycaster.set(__V, new Vector3(0, 1, 0));

        _ref.current?.traverse((child) => {
          if (child instanceof Mesh) {
            const intersects = raycaster.intersectObject(child);
            if (intersects.length === 0) {
              api.velocity.set(_x, 0, _z);
              api.angularVelocity.set(0, _y * 0.5, 0);
            } else {
              api.velocity.set(0, 0, 0);
              api.angularVelocity.set(0, 0, 0);
            }
          }
        });
      } else {
        // 회전
        api.velocity.set(0, 0, 0);
        api.angularVelocity.set(0, _y * 0.5, 0);
      }
    } else {
      // 누른 키가 없을 때 멈춤
      api.velocity.set(0, 0, 0);
      api.angularVelocity.set(0, 0, 0);
    }
  });

  return (
    <group ref={ref as Ref<Group>}>
      <PerspectiveCamera
        makeDefault
        position={[0, 15, isBrowser ? -30 : -45]}
        rotation={[0.25, 3.15, 0]}
        fov={fov}
      />

      <group ref={innerRef as Ref<Group>}>
        <NameTag
          name={block ? "(it's wall. can't go more)" : "TORANG"}
          top="0rem"
        />
        <primitive object={nodes!.walk} visible={false} />
        {Object.keys(nodes!).map((name: string, key: number) => {
          const names = name.split("_");
          if (names[0] === "mesh") {
            const material_name = "material_" + names[1];
            const node_name = "mesh_" + names[1];
            return (
              <skinnedMesh
                castShadow
                receiveShadow
                material={materials!![material_name]}
                geometry={nodes![node_name].geometry}
                skeleton={nodes![node_name].skeleton}
                key={key}
              ></skinnedMesh>
            );
          }
        })}
      </group>
    </group>
  );
}

useLoader.preload(GLTFLoader, url);
