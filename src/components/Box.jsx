import { useState, useEffect, useRef } from "react";

function Box({
  width,
  height,
  rotate,
  translateX,
  translateY,
  setTranslateX,
  setTranslateY,
  offsetX,
  offsetY,
  clientX,
  clientY,
  setClientX,
  setClientY,
}) {
  const isPressed = useRef(false);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (isPressed.current) {
        setTranslateX(e.clientX - offsetX);
        setTranslateY(e.clientY - offsetY);
        console.log(
          "newTransX:",
          e.clientX - offsetX,
          "newTransY:",
          e.clientY - offsetY
        );
      }
    });

    return () => {
      document.removeEventListener("mousemove", (e) => {
        if (isPressed.current) {
          setTranslateX(e.clientX - offsetX);
          setTranslateY(e.clientY - offsetY);
          console.log(
            "newTransX:",
            e.clientX - offsetX,
            "newTransY:",
            e.clientY - offsetY
          );
        }
      });
    };
  }, [offsetX, offsetY]);

  const handleMouseDown = (e) => {
    isPressed.current = true;
    console.log("isPressed:", isPressed);
    setClientX(e.clientX);
    setClientY(e.clientY);
  };

  const handleMouseUp = (e) => {
    isPressed.current = false;
    console.log("isPressed:", isPressed.current);
  };

  const handleMouseMove = (e) => {
    if (isPressed.current) {
      setTranslateX(e.clientX - offsetX);
      setTranslateY(e.clientY - offsetY);
      console.log(
        "newTransX:",
        e.clientX - offsetX,
        "newTransY:",
        e.clientY - offsetY
      );
    }
  };

  const handleMouseLeave = (e) => {
    console.log("leaved");
    console.log("isPressed:", isPressed.current);
    if (isPressed.current) {
      console.log("leaved and pressed");
      setTranslateX(e.clientX - offsetX);
      setTranslateY(e.clientY - offsetY);
      console.log(
        "newTransX:",
        e.clientX - offsetX,
        "newTransY:",
        e.clientY - offsetY
      );
    }
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onDragStart={handleDragStart}
      style={{
        position: "absolute",
        height,
        width,
        transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`,
        backgroundColor: "black",
      }}
    ></div>
  );
}

export default Box;
