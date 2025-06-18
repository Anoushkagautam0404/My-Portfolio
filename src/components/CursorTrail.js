import React, { useEffect, useRef } from "react";

const CursorTrail = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const follow = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      dot.style.transform = `translate(${currentX}px, ${currentY}px)`;
      requestAnimationFrame(follow);
    };

    const mouseMoveHandler = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", mouseMoveHandler);
    follow();

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return <div ref={dotRef} className="follower-dot" />;
};

export default CursorTrail;
