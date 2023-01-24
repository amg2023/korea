import { ThreeEvent, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import useModalActions from "../../../store/modal/query";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "tiger.gltf";

export default function Tiger() {
  const { onSetType } = useModalActions();

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSetType("tiger");
  };
  return (
    <SelectGltf
      url={url}
      nameTag={"TIGER"}
      scale={[0.01, 0.006, 0.009]}
      rotation={[0, Math.PI / 2, 0]}
      position={[38, 10, 18]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
