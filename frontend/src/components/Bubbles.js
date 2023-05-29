import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

function BubbleAnimation() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let bubbles = [];
    const colors = ["rgba(255, 255, 255, .1)"];

    class Bubble {
      constructor() {
        this.size = Math.random() * 10 + 2;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedY = Math.random() * 0.5 + 0.15;
        this.speedX = Math.random() * 0.5 - 0.3;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.y - this.size > canvas.height || this.y + this.size < 0) {
          this.speedY = -this.speedY;
        }
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.speedX = -this.speedX;
        }

        this.x += this.speedX;
        this.y += this.speedY;

        this.draw();
      }
    }

    function generateBubbles() {
      for (
        let i = 0;
        i < Math.sqrt((canvas.height * canvas.width) / 1000);
        i++
      ) {
        bubbles.push(new Bubble());
      }
    }

    generateBubbles();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
      }
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      // Cleanup
      bubbles = [];
    };
  }, []);

  return (
    <Box
      component="canvas"
      ref={canvasRef}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
    />
  );
}

export default BubbleAnimation;
