import * as THREE from "three";
import { useRef, useMemo } from "react";
import { extend, useThree, useLoader, useFrame } from "@react-three/fiber";
import { Water } from "three-stdlib";
import { S3_URL } from "../../../data/constant";

extend({ Water });

export default function Ocean() {
  const ref = useRef();
  const gl: any = useThree((state) => state.gl);
  const waterNormals = useLoader(THREE.TextureLoader, S3_URL + "water.jpeg");
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;
  const geom = useMemo(() => new THREE.PlaneGeometry(1000, 1000), []);
  const config = useMemo(
    () => ({
      textureWidth: 1000,
      textureHeight: 1000,
      waterNormals,
      sunDirection: new THREE.Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: 1,
      fog: false,
      format: gl.encoding,
    }),
    [waterNormals]
  );
  useFrame(
    (state, delta) =>
      ((ref?.current as any).material.uniforms.time.value += delta)
  );
  return (
    <mesh position={[0, -2, 0]}>
      <water ref={ref} args={[geom, config]} rotation-x={-Math.PI / 2} />
    </mesh>
  );
}
