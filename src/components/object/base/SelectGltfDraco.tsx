import { useAnimations, useCursor, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { Ref, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Group } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { ISelectGltf } from "../type";
import GltfObject from "./GltfObject";
import { NameTag } from "components/Three/NameTag";

export default function SelectGltfDraco({
  url,
  nameTag,
  position,
  rotation,
  scale,
  onClick,
}: ISelectGltf) {
  const { nodes, materials, animations, scene } = useGLTF(url);
  const ref = useRef<Group>();
  const [hover, setHover] = useState(false);
  const { actions } = useAnimations(animations!!, ref);

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
        <NameTag name={nameTag} bottom={"9rem"} />
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
