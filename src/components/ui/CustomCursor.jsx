import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Move the cursor with the mouse
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY}px`;
      }
    };

    // Scale cursor on hover
    const handleMouseOver = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(1.5)';
    };
    const handleMouseOut = () => {
      if (cursorRef.current) cursorRef.current.style.transform = 'scale(1)';
    };

    // Add event listeners
    document.addEventListener('mousemove', moveCursor);
    const hoverElements = document.querySelectorAll('a, button');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      // Clean up event listeners
      document.removeEventListener('mousemove', moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default CustomCursor;
