import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import GltfObject from "./GltfObject";
import { S3_URL } from "data/constant";
import { MutableRefObject } from "react";
import { Group } from "three";
import useRaycastActions from "store/raycast/query";
import { Hint } from "components/Three/Hint";

const url = S3_URL + "lamp.gltf";

export default function Lamp({
  _ref,
  name,
  hint,
  position,
}: {
  _ref: MutableRefObject<Group | undefined>;
  name: string;
  hint: string;
  position: [number, number, number];
}) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  const { raycast } = useRaycastActions();
  return (
    <group ref={_ref as any} position={position}>
      {raycast.selected === name && <Hint name={hint} top={"9rem"} />}
      <GltfObject
        nodes={nodes}
        materials={materials}
        scale={[1.5, 1.5, 1.5]}
        name={name}
      />
    </group>
  );
}

useLoader.preload(GLTFLoader, url);
