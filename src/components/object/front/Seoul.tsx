import { ThreeEvent, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import useModalActions from "../../../store/modal/query";
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
      scale={[0.03, 0.015, 0.015]}
      rotation={[0, 0, 0]}
      position={[35, 10, 40]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
