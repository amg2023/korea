import { ThreeEvent, useLoader } from "@react-three/fiber";
import { S3_URL } from "data/constant";
import useModalActions from "store/modal/query";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "screen.gltf";
export default function ScreenPicture() {
  const { onSetType } = useModalActions();

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSetType("hotel");
  };

  return (
    <SelectGltf
      url={url}
      nameTag={"HOTEL"}
      scale={[8, 8, 8]}
      rotation={[Math.PI / 2, 0, Math.PI / 2]}
      position={[-42, 8, 0]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
