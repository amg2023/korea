import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { useEffect, useState } from "react";
import { useSizeEffect } from "utils/useSizeEffect";

const url = S3_URL + "roof.gltf";
export default function Roof() {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  const { width } = useSizeEffect();
  const [Y, setY] = useState(-180);
  useEffect(() => {
    if (width > 800) setY(-180);
    else if (width > 600) setY(-190);
    else setY(-200);
  }, [width]);

  return (
    <GltfObject
      nodes={nodes}
      materials={materials}
      position={[0, Y, -0]}
      scale={[0.3, 0.3, 0.3]}
      rotation={[-Math.PI / 2, 0, 0]}
    />
  );
}
useLoader.preload(GLTFLoader, url);
