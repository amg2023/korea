import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const url = "./flags.glb";
export default function Flag() {
  const ref = useRef<any>();
  const { nodes, materials, animations, scene } = useGLTF(url);
  const { actions } = useAnimations(animations!!, ref);

  useEffect(() => {
    actions["mesh_plane"]?.play();
  }, []);

  return (
    <mesh
      scale={[12, 12, 12]}
      position={[20, -2, 80]}
      rotation={[0, Math.PI / 2, 0]}
      ref={ref}
    >
      <primitive object={scene} />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
