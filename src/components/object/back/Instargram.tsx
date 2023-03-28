import { ThreeEvent, useLoader } from "@react-three/fiber";
import { isBrowser } from "react-device-detect";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { INSTARGRAM_URL, S3_URL } from "../../../data/constant";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "instargram.gltf";
export default function Instargram() {
  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    window.location.href = INSTARGRAM_URL;
  };
  return (
    <SelectGltf
      url={url}
      nameTag={"INSTARGRAM"}
      position={[15, 10, isBrowser ? -58 : -73]}
      scale={[0.02, 0.01, 0.01]}
      rotation={[0, Math.PI, 0]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
