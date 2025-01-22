import React, { useEffect, useRef } from "react";

function CalculateOffsetBox({
  width,
  height,
  rotate,
  translateX,
  translateY,
  clientX,
  clientY,
  setOffsetX,
  setOffsetY,
  ElementRef,
}) {
  useEffect(() => {
    if (ElementRef.current) {
      const { x, y } = ElementRef.current.getBoundingClientRect();
      console.log("ElementRef.current no-rotate x,y :", x, y);
      setOffsetX(clientX - x);
      setOffsetY(clientY - y);
      console.log("setOffsetX:", clientX - x, "setOffsetY:", clientY - y);
    }
  }, [clientX, clientY]);

  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        backgroundColor: "blue",
        transform: `translate(${translateX}px, ${translateY}px) rotate(0deg)`,
        zIndex: -1,
      }}
      ref={ElementRef}
    ></div>
  );
}

export default CalculateOffsetBox;
