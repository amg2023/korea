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
      position={[20, 10, 43]}
      scale={[0.01, 0.007, 0.02]}
      rotation={[0, 0, 0]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
