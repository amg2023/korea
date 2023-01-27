import { ThreeEvent, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import useModalActions from "../../../store/modal/query";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "ssirum.gltf";
export default function Ssirum() {
  const { onSetType } = useModalActions();

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSetType("ssirum");
  };
  return (
    <SelectGltf
      url={url}
      nameTag={"SSIRUM"}
      scale={[0.015, 0.013, 0.015]}
      rotation={[0, Math.PI / 2, 0]}
      position={[43, 10, 16]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
