import React, { useEffect, useRef } from "react";
import * as PIXI from "pixi.js";

const ChatCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const app = new PIXI.Application({
      width: 600,
      height: 400,
      backgroundColor: 0xffffff,
      view: canvasRef.current,
    });

    const messageStyle = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 24,
      fill: "black",
      wordWrap: true,
      wordWrapWidth: 580,
    });

    const message = new PIXI.Text("Welcome to Pixi Chat!", messageStyle);
    message.x = 10;
    message.y = 10;
    app.stage.addChild(message);

    return () => {
      app.destroy(true, { children: true });
    };
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default ChatCanvas;
