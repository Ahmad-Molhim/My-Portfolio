import { useEffect, useRef } from "react";

export const BinaryStream = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const fontSize = 16;
    const rowCount = Math.floor(height / fontSize);

    const streams = Array.from({ length: rowCount }).map(() => ({
      x: Math.random() * width,
      speed: 0.4 + Math.random() * 0.6,
      chars: Array.from({ length: 40 }, () =>
        Math.random() > 0.5 ? "1" : "0"
      ),
    }));

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px monospace`;
      ctx.fillStyle = "rgba(140, 110, 255, 0.6)";

      streams.forEach((stream, i) => {
        stream.x += stream.speed;
        if (stream.x > width + stream.chars.length * fontSize)
          stream.x = -stream.chars.length * fontSize;

        stream.chars.forEach((char, j) => {
          ctx.fillText(char, stream.x + j * fontSize, i * fontSize);
        });

        // occasional random flicker
        if (Math.random() < 0.01) {
          const index = Math.floor(Math.random() * stream.chars.length);
          stream.chars[index] = Math.random() > 0.5 ? "1" : "0";
        }
      });

      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};
