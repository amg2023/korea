import { useCursor } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { Ref, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { NameTag } from "../../Three/NameTag";
import { ISelectGltf } from "../type";
import GltfObject from "./GltfObject";

export default function SelectGltf({
  url,
  nameTag,
  position,
  rotation,
  scale,
  onClick,
}: ISelectGltf) {
  const { nodes, materials } = useLoader(GLTFLoader, url);
  const { t } = useTranslation();
  const ref = useRef<Group>();
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };
  useCursor(hover);
  return (
    <Select enabled={hover}>
      <group
        position={position ?? [0, 0, 0]}
        onClick={onClick}
        onPointerEnter={onHover}
        onPointerLeave={onLeave}
        ref={ref as Ref<Group>}
      >
        <NameTag name={t(nameTag)} bottom={"9rem"} />
        <GltfObject
          nodes={nodes}
          materials={materials}
          scale={scale ?? [1, 1, 1]}
          rotation={rotation ?? [0, 0, 0]}
        />
      </group>
    </Select>
  );
}
