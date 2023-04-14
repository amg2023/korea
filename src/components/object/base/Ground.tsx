import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { MutableRefObject, Ref, useEffect, useRef } from "react";
import useRaycastActions from "store/raycast/query";
import { Group, Mesh } from "three";

const url = S3_URL + "ground.gltf";
export default function Ground({
  _ref,
}: {
  _ref: MutableRefObject<Group | undefined>;
}) {
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <mesh ref={_ref as any} rotation={[-Math.PI / 2, 0, 0]}>
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[1, 1, 0.1]}
        rotation={[Math.PI / 2, 0, 0]}
        name="ground"
      />
    </mesh>
  );
}
useLoader.preload(GLTFLoader, url);
