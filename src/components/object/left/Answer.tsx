import { ThreeEvent, useLoader } from "@react-three/fiber";
import { S3_URL } from "data/constant";
import { isBrowser } from "react-device-detect";
import useModalActions from "store/modal/query";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import SelectGltf from "../base/SelectGltf";
import useRaycastActions from "store/raycast/query";

const url = S3_URL + "answer.gltf";
export default function Answer() {
  const { onSetType } = useModalActions();
  const { raycast } = useRaycastActions();

  const onClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation();
    onSetType("step");
  };

  return (
    <SelectGltf
      url={url}
      nameTag={raycast.step === 4 ? "SUCCESS" : `STEP ${raycast.step} ANSWER`}
      scale={[10, 12, 10]}
      rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      position={[isBrowser ? -53 : -68, 10, 0]}
      onClick={onClick}
    />
  );
}
useLoader.preload(GLTFLoader, url);
