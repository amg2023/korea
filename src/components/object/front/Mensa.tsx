import { useLoader } from "@react-three/fiber";
import { MENSA_URL, S3_URL } from "data/constant";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useSizeEffect } from "utils/useSizeEffect";
import SelectGltfDraco from "../base/SelectGltfDraco";

const url = S3_URL + "mensa.glb";
export default function Mensa() {
  const { width } = useSizeEffect();

  const onClick = () => {
    window.location.href = MENSA_URL;
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
