import { ThreeEvent, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL, WHATSAPP_URL } from "../../../data/constant";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "whatsapp.gltf";
export default function Whatsapp() {
  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    window.location.href = WHATSAPP_URL;
  };
  return (
    <SelectGltf
      url={url}
      nameTag={"WHATSAPP"}
      position={[-40, 15, -38]}
      scale={[0.02, 0.01, 0.01]}
      rotation={[0, Math.PI, 0]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
