import { ThreeEvent, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FACEBOOK_URL, S3_URL } from "../../../data/constant";
import SelectGltf from "../base/SelectGltf";

const url = S3_URL + "facebook.gltf";
export default function Facebook() {
  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    window.location.href = FACEBOOK_URL;
  };
  return (
    <SelectGltf
      url={url}
      nameTag={"FACEBOOK"}
      position={[-10, 15, -38]}
      scale={[0.02, 0.01, 0.01]}
      rotation={[0, Math.PI, 0]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
