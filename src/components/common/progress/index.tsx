import { useProgress } from "@react-three/drei";
import "./style.css";

export default function Progress3D() {
  const { progress } = useProgress();
  return (
    <div className="loader">
      <h2>PLEASE WAIT</h2>
      <div className="progress-bar">
        <div
          className="progress-gray"
          style={{
            transform: `translate(${-200 + progress * 2}px, -100%)`,
          }}
        ></div>
      </div>
      <h6 className="progress-number">
        3D model import {progress.toFixed(2)} %
      </h6>
    </div>
  );
}
