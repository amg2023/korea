import { ThreeEvent, useLoader } from "@react-three/fiber";
import { S3_URL } from "data/constant";
import useModalActions from "store/modal/query";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSizeEffect } from "utils/useSizeEffect";
import SelectGltf from "../base/SelectGltf";
import SelectGltfDraco from "../base/SelectGltfDraco";

const url = S3_URL + "mensa.glb";
export default function Mensa() {
  const { onSetType } = useModalActions();
  const { width } = useSizeEffect();

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSetType("hangul");
  };

  return (
    <SelectGltfDraco
      url={url}
      nameTag={"MENSA"}
      scale={[0.03, 0.03, 0.03]}
      rotation={[0, 0, 0]}
      position={[width > 600 ? -30 : -20, 25, 80]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
