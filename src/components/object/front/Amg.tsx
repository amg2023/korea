import { ThreeEvent, useLoader } from "@react-three/fiber";
import { MAIN_PAGE, S3_URL } from "data/constant";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSizeEffect } from "utils/useSizeEffect";
import SelectGltfDraco from "../base/SelectGltfDraco";

const url = S3_URL + "amg.glb";
export default function Amg() {
  const { width } = useSizeEffect();

  const onClick = () => {
    window.location.href = MAIN_PAGE;
  };

  return (
    <SelectGltfDraco
      url={url}
      nameTag={"AMG"}
      scale={[0.03, 0.03, 0.03]}
      rotation={[0, 0, 0]}
      position={[width > 600 ? 30 : 20, 25, 80]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
