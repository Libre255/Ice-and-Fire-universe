import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export const Portal: React.FC = ({ children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const portal = document.getElementById("HousesContainer");
    portal?.appendChild(el.current);

    return () => {
      portal?.removeChild(el.current);
    };
  }, [children]);

  return createPortal(children, el.current);
};
