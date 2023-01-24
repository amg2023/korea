import { ThreeEvent, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import useModalActions from "../../../store/modal/query";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "hangul.gltf";
export default function Hangul() {
  const { onSetType } = useModalActions();

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSetType("hangul");
  };

  return (
    <SelectGltf
      url={url}
      nameTag={"HANGUL"}
      scale={[0.01, 0.01, 0.025]}
      rotation={[0, Math.PI / 2, 0]}
      position={[38, 10, -20]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
