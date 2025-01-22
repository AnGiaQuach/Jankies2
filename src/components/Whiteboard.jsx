import React, { useState, useRef } from "react";
import styles from "../styles/whiteboard.module.css";
import CalculateOffsetBox from "./CalculateOffsetBox.jsx";
import Box from "./Box.jsx";

function Whiteboard() {
  const [height, setHeight] = useState(234);
  const [width, setWidth] = useState(73);
  const [rotate, setRotate] = useState(20);
  const [originX, setOriginX] = useState(0);
  const [originY, setOriginY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const Element = useRef(null);
  const WhiteboardElement = useRef(null);

  return (
    <div className={styles.whiteboard} ref={WhiteboardElement}>
      <Box
        width={width}
        height={height}
        rotate={rotate}
        translateX={translateX}
        translateY={translateY}
        setTranslateX={setTranslateX}
        setTranslateY={setTranslateY}
        offsetX={offsetX}
        offsetY={offsetY}
        clientX={clientX}
        clientY={clientY}
        setClientX={setClientX}
        setClientY={setClientY}
        WhiteboardElement={WhiteboardElement}
      ></Box>

      <CalculateOffsetBox
        width={width}
        height={height}
        rotate={rotate}
        translateX={translateX}
        translateY={translateY}
        clientX={clientX}
        clientY={clientY}
        setOffsetX={setOffsetX}
        setOffsetY={setOffsetY}
        ElementRef={Element}
      ></CalculateOffsetBox>
    </div>
  );
}

export default Whiteboard;
