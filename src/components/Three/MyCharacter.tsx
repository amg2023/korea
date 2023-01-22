import { Ref, useMemo, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Event, Group, Object3D, Quaternion, Vector3 } from "three";
import { IGltfReturn } from "./types";
import { SkeletonUtils } from "three-stdlib";
import { useFrame, useGraph } from "@react-three/fiber";
import { Api } from "@react-three/cannon";
import { useControls } from "../../utils/useControls";
import Avatar from "./Avatar";
import { S3_URL } from "../common/control/constant";

export default function MyCharacter({ body }: { body: Api<Object3D<Event>> }) {
  const [ref, api] = body;
  const { move } = useControls();
  const { f, b, l, r, z } = move;
  const { materials, animations, scene }: IGltfReturn = useGLTF(
    S3_URL + "orly.gltf"
  );
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes }: IGltfReturn = useGraph(clone);
  const { actions } = useAnimations(animations, ref);
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
  const speed = 15;
  const values = useRef({
    v: [0, 0, 0],
    av: [0, 0, 0],
    p: [0.0, 0.0, 0.0],
    r: [0.0, 0.0, 0.0, ""],
  });

  useEffect(() => {
    api.velocity.subscribe((v) => (values.current.v = v));
    api.angularVelocity.subscribe((av) => (values.current.av = av));
    api.position.subscribe((p) => {
      values.current.p = p;
    });
    api.rotation.subscribe((r) => (values.current.r = r));
  }, []);

  useFrame(({ camera }) => {
    const frontAxis = new Vector3(0, 1, 0);
    const sideAxis = new Vector3(0, 0, 0);
    const V = new Vector3();
    const Q = new Quaternion();

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
      _V.applyAxisAngle(f || b ? frontAxis : sideAxis, offset);
      _V.normalize().multiplyScalar(speed);
      const _x = _V.x;
      const _y = Number(r) * -2 * Math.PI + Number(l) * 2 * Math.PI;
      const _z = _V.z;
      if (f || b) {
        // 전후진
        Q.setFromAxisAngle(frontAxis, offset);
        innerRef?.current?.quaternion.rotateTowards(Q, 0.2);
        //
        const p = values.current.p;
        const x_abs = Math.abs(p[0]);
        const z_abs = Math.abs(p[2]);
        const limit = 40;
        if (x_abs > limit - 2 || z_abs > limit - 2) {
          setIsLimit(true);
          if (x_abs > limit - 2) api.velocity.set(-_x, 0, _z);
          if (z_abs > limit - 2) api.velocity.set(_x, 0, -_z);
        }
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
        api.angularVelocity.set(0, _y, 0);
      }
    } else {
      // 누른 키가 없을 때 멈춤
      api.velocity.set(0, 0, 0);
      api.angularVelocity.set(0, 0, 0);
    }
  });

  return (
    <group ref={innerRef as Ref<Group>}>
      <Avatar
        nodes={nodes}
        x={0}
        z={0}
        innerRef={innerRef as Ref<Group>}
        materials={materials}
      />
    </group>
  );
}
