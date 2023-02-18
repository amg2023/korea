import { OrbitControls } from "@react-three/drei";
import { useLoader, Canvas } from "@react-three/fiber";
import GltfObject from "components/object/base/GltfObject";
import { S3_URL } from "data/constant";
import { seoulEs } from "data/seoul";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Markdown from "../Markdown/Markdown";
import * as S from "./style";

export default function Main() {
  return (
    <S.seoulPage>
      <h1>AMG KOREA 2022</h1>
      <Markdown content={seoulEs} />
    </S.seoulPage>
  );
}
