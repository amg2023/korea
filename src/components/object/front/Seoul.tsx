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
      nameTag={"SEOUL"}
      scale={[0.03, 0.011, 0.02]}
      rotation={[0, Math.PI / 2, 0]}
      position={[63, 10, 16]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
