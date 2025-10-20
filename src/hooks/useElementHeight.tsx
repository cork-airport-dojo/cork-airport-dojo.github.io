import { useEffect, useState } from "react";

export function useElementHeight(selector?: string) {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!selector) return;
    const el = document.querySelector(selector);
    if (!el) return;
    const update = () => setHeight(el.getBoundingClientRect().height);
    const ro = new window.ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, [selector]);

  return height;
}