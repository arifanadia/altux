"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Move the main cursor instantly
    document.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });

      // Make the follower smoothly follow the cursor
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    });

    return () => {
      document.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor fixed w-4 h-4 bg-black rounded-full pointer-events-none z-50"
      ></div>
      <div
        ref={followerRef}
        className="follow-cursor fixed w-10 h-10 bg-gray-500 opacity-50 rounded-full pointer-events-none z-40"
      ></div>
    </>
  );
};

export default CustomCursor;
