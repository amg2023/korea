import { useGLTF } from "@react-three/drei";
import { S3_URL } from "../../utils/constant";
import GltfObject from "./GltfObject";

export default function Ground() {
  const { nodes, materials } = useGLTF(S3_URL + "floor.gltf");
  return (
    <>
      <GltfObject nodes={nodes} materials={materials} />
    </>
  );
}
