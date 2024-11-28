import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const hoverTargets = document.querySelectorAll(".hover-target");

    // GSAP timeline for hover effects
    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline
      .to(cursorRef.current, {
        height: "112px",
        width: "112px",
        ease: "expo.inOut",
        duration: 0.3,
      })
      .to(
        svgRef.current,
        {
          opacity: 1,
          width: "96px",
          height: "96px",
          ease: "expo.inOut",
          duration: 0.3,
        },
        0
      );

    // Add hover animations
    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => hoverTimeline.play());
      target.addEventListener("mouseleave", () => {
        hoverTimeline.reverse();
        hoverTimeline.eventCallback("onReverseComplete", () => {
          gsap.set(svgRef.current, { opacity: 0 });
          gsap.set(cursorRef.current, { height: "12px", width: "12px" });
        });
      });
    });

    // Track mouse movement
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      // Cleanup listeners
      document.removeEventListener("mousemove", handleMouseMove);
      hoverTargets.forEach((target) => {
        target.removeEventListener("mouseenter", () => hoverTimeline.play());
        target.removeEventListener("mouseleave", () => hoverTimeline.reverse());
      });
    };
  }, []);

  const { x, y } = cursor;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-50 w-3 h-3 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full pointer-events-none cursor opacity-80"
      style={{ left: `${x}px`, top: `${y}px` }}
    >
      <svg
        ref={svgRef}
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6 19L19 6m0 0v12.48M19 6H6.52"
        />
      </svg>
    </div>
  );
}
