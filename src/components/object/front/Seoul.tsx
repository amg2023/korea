import { ThreeEvent, useLoader } from "@react-three/fiber";
import { S3_URL } from "data/constant";
import useModalActions from "store/modal/query";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "seoul.gltf";
export default function Seoul() {
  const { onSetType } = useModalActions();

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSetType("seoul");
  };
  return (
    <SelectGltf
      url={url}
      nameTag={"WHERE"}
      scale={[0.01, 0.01, 0.02]}
      rotation={[0, Math.PI / 2, 0]}
      position={[38, 10, -8]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
