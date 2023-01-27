import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { S3_URL } from "../../../data/constant";
import { timeTableEs } from "../../../data/timetable";
import Markdown from "../../common/Markdown/Markdown";
import GltfObject from "../../object/base/GltfObject";
import * as S from "./style";

export default function TimetablePage() {
  return (
    <S.TimetablePage>
      <Markdown content={timeTableEs} />
    </S.TimetablePage>
  );
}
