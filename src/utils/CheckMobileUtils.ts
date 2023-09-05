import { useEffect, useState } from "react";

export function CheckMobileUtils() {
  const match = () => {
    if (!window.matchMedia) {
      return false;
    } else if (window.matchMedia("(max-width: 1280px)").matches) return "1280";
  };
  const [value, set] = useState(match);
  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener("resize", handler);
  }, [match]);
  return value;
}