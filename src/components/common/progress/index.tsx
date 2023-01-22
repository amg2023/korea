import { useProgress } from "@react-three/drei";
import { useTransition } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

export default function ProgressBar() {
  const { progress } = useProgress();
  const { t } = useTranslation();
  return (
    <div className="loader">
      <h2>{t("WAIT")}</h2>
      <div className="progress-bar">
        <div
          className="progress-gray"
          style={{
            transform: `translate(${-200 + progress * 2}px, -100%)`,
          }}
        ></div>
      </div>
      <h6 className="progress-number">
        {t("IMPORT")} {progress.toFixed(2)} %
      </h6>
    </div>
  );
}
