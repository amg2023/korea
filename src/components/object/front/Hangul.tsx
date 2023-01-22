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
      scale={[0.04, 0.015, 0.015]}
      rotation={[0, 0, 0]}
      position={[-15, 10, 38]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
