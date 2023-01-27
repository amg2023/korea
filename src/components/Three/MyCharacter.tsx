import { Ref, useMemo, useRef, useState } from "react";
import { PerspectiveCamera, useAnimations } from "@react-three/drei";
import { useEffect } from "react";
import { Group, Quaternion, Vector3 } from "three";
import { IGltfReturn } from "./types";
import { DRACOLoader } from "three-stdlib";
import { useFrame, useLoader } from "@react-three/fiber";
import { useCompoundBody } from "@react-three/cannon";
import { useControls } from "../common/control/useControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../data/constant";
import { NameTag } from "./NameTag";

const url = S3_URL + "torang.gltf";

export default function MyCharacter() {
  const [fov, setFov] = useState(50);
  const [frontBack, setFrontBack] = useState("");

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
    const _loader: IGltfReturn = useLoader(GLTFLoader, url, (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/");
      loader.setDRACOLoader(dracoLoader);
    });
    return _loader;
  }, [url]);
  const { actions } = useAnimations(animations!!, ref);
  const [isLimit, setIsLimit] = useState(false);

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
  const speed = 30;
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

  useFrame(({ camera }) => {
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
      if (f) setFrontBack("f");
      if (b) setFrontBack("b");
      const offset =
        Number(f) * 0 +
        Number(b) * Math.PI +
        Number(r) * Math.PI +
        Number(l) * -Math.PI;
      const _V = camera.getWorldDirection(V);
      _V.y = 0;
      _V.applyAxisAngle(f || b ? frontAxis : sideAxis, offset);
      _V.normalize().multiplyScalar(speed);
      const _x = _V.x;
      const _y = Number(r) * -2 * Math.PI + Number(l) * 2 * Math.PI;
      const _z = _V.z;
      if (f || b) {
        // 전후진
        Q.setFromAxisAngle(frontAxis, offset);
        innerRef?.current?.quaternion.rotateTowards(Q, 0.2);
        // 프론트인데 백, 백인데 프론트로 가면 진행
        if (f && frontBack === "b") {
          setIsLimit(false);
        } else if (b && frontBack === "f") {
          setIsLimit(false);
        }
        // 리미트
        const p = values.current.p;
        const x_abs = Math.abs(p[0]);
        const z_abs = Math.abs(p[2]);
        const limit = 45;
        if (x_abs > limit - 10 || z_abs > limit - 10) {
          setIsLimit(true);
          if (x_abs > limit - 10) api.velocity.set(-_x, 0, _z);
          if (z_abs > limit - 10) api.velocity.set(_x, 0, -_z);
        }
        // 한계선 넘으면 정지
        if (x_abs > limit || z_abs > limit) {
          api.velocity.set(0, 0, 0);
          api.angularVelocity.set(0, 0, 0);
        }
        if (!isLimit) {
          api.velocity.set(_x, 0, _z);
          api.angularVelocity.set(0, _y / 2, 0);
        }
      } else {
        // 회전
        setIsLimit(false);
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
    <group>
      <group ref={ref as Ref<Group>}>
        <PerspectiveCamera
          makeDefault
          position={[0, 15, -30]}
          rotation={[0.25, 3.15, 0]}
          fov={fov}
        />

        <group ref={innerRef as Ref<Group>}>
          <NameTag name={"TORANG"} bottom="15rem" />
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
    </group>
  );
}

useLoader.preload(GLTFLoader, url);
