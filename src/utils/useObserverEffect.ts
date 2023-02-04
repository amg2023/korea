import { MutableRefObject, useEffect } from "react";

export default function useObserverEffect(
  El: MutableRefObject<Element | undefined>,
  cb: IntersectionObserverCallback
) {
  useEffect(() => {
    const observer = new IntersectionObserver(cb, {
      threshold: 0.4,
    });
    observer.observe(El?.current!);
    return () => observer && observer.disconnect();
  }, [El]);
}
