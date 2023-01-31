import { useEffect, useState } from "react";

export function useSizeEffect() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  return { width };
}
