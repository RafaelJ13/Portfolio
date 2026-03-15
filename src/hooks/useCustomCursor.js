import { useEffect, useState } from 'react';

function getCursorSupport() {
  if (typeof window === 'undefined') {
    return false;
  }

  const supportsFinePointer = window.matchMedia('(pointer:fine)').matches;
  const hasTouchPoints = navigator.maxTouchPoints > 0;

  return supportsFinePointer && !hasTouchPoints;
}

function useCustomCursor() {
  const [cursorEnabled] = useState(() => getCursorSupport());
  const [cursorPoint, setCursorPoint] = useState({ x: 0, y: 0 });
  const [isCursorHovering, setIsCursorHovering] = useState(false);

  useEffect(() => {
    if (!cursorEnabled) {
      return;
    }

    document.body.classList.add('custom-cursor-enabled');

    const interactiveSelector = 'a, button, [role="button"], input, textarea, select, [data-cursor="interactive"]';

    const handleMouseMove = (event) => {
      setCursorPoint({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (event) => {
      const isInteractive = event.target.closest(interactiveSelector);
      setIsCursorHovering(Boolean(isInteractive));
    };

    const handleMouseLeave = () => {
      setIsCursorHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.classList.remove('custom-cursor-enabled');
    };
  }, [cursorEnabled]);

  return {
    cursorEnabled,
    cursorPoint,
    isCursorHovering,
  };
}

export default useCustomCursor;
