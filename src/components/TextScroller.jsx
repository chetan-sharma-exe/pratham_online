import React, { useState, useEffect, useRef } from "react";

const TextScroller = ({
  text,
  speed = 50,
  direction = "left",
  className = "",
}) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [position, setPosition] = useState(
    direction === "left" ? 0 : -contentWidth
  );

  // Set up initial measurements
  useEffect(() => {
    if (containerRef.current && contentRef.current) {
      const contentRect = contentRef.current.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();

      setContentWidth(contentRect.width);
      setContainerWidth(containerRect.width);

      // Initialize position based on direction
      setPosition(direction === "left" ? containerWidth : -contentWidth);
    }
  }, [text, direction]);

  // Animation loop
  useEffect(() => {
    if (contentWidth === 0 || containerWidth === 0) return;

    const totalScrollWidth = containerWidth + contentWidth;
    let lastTimestamp = 0;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      // Calculate new position
      const pixelsToMove = (deltaTime / 1000) * speed;
      let newPosition;

      if (direction === "left") {
        newPosition = position - pixelsToMove;
        // Reset when text has scrolled out of view
        if (newPosition < -contentWidth) {
          newPosition = containerWidth;
        }
      } else {
        newPosition = position + pixelsToMove;
        // Reset when text has scrolled out of view
        if (newPosition > containerWidth) {
          newPosition = -contentWidth;
        }
      }

      setPosition(newPosition);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [position, contentWidth, containerWidth, speed, direction]);

  return (
    <div
      ref={containerRef}
      className={`hidden sm:block relative overflow-hidden whitespace-nowrap ${className}`}
      style={{ width: "100%" }}
    >
      <div
        ref={contentRef}
        className="inline-block"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default TextScroller;
