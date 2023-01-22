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
      position={[-30, 10, 37]}
      scale={[0.015, 0.015, 0.015]}
      rotation={[0, 0, 0]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
