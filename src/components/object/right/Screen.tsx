import { ThreeEvent, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import useModalActions from "../../../store/modal/query";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "screen.gltf";
export default function Screen() {
  const { onSetType } = useModalActions();

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSetType("hangul");
  };

  return (
    <SelectGltf
      url={url}
      nameTag={"HANGUL"}
      scale={[8, 8, 8]}
      rotation={[Math.PI / 2, 0, Math.PI / 2]}
      position={[-45, 8, 5]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
