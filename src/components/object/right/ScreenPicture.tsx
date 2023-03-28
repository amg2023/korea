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

  return <></>;
}
useLoader.preload(GLTFLoader, url);
