import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { IMountainPosition, ITreePosition, IWall } from "../type";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const url = "./dragon.glb";
export default function Dragon() {
  const ref = useRef<any>();
  const { nodes, materials, animations, scene } = useGLTF(url);
  const { actions } = useAnimations(animations!!, ref);

  useEffect(() => {
    console.log(actions);
    actions["Armature_Take001"]?.play();
  }, []);

  return (
    <mesh
      scale={[1, 1, 1]}
      position={[0, -30, 200]}
      rotation={[0, 0, 0]}
      ref={ref}
    >
      <primitive object={scene} />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
