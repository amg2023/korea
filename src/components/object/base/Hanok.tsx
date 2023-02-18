import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { HOTEL_URL, S3_URL } from "data/constant";
import SelectGltfDraco from "./SelectGltfDraco";

const url = S3_URL + "hanok.glb";
export default function Hanok() {
  const onClick = () => {
    window.location.href = HOTEL_URL;
  };
  return (
    <SelectGltfDraco
      url={url}
      nameTag={"HOTEL"}
      scale={[0.01, 0.01, 0.01]}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 240]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
