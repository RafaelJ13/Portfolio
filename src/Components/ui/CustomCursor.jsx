function CustomCursor({ cursorEnabled, cursorPoint, isCursorHovering }) {
  if (!cursorEnabled) {
    return null;
  }

  return (
    <>
      <div
        className='pointer-events-none fixed left-0 top-0 z-[100] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100 transition-transform duration-150 ease-out'
        style={{ transform: `translate(${cursorPoint.x}px, ${cursorPoint.y}px) translate(-50%, -50%)` }}
      />
      <div
        className={`pointer-events-none fixed left-0 top-0 z-[99] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neutral-200/60 bg-neutral-100/5 backdrop-blur-[1px] transition-all duration-200 ease-out ${isCursorHovering ? 'scale-125 border-neutral-100/85 bg-neutral-100/10' : 'scale-100'}`}
        style={{ transform: `translate(${cursorPoint.x}px, ${cursorPoint.y}px) translate(-50%, -50%)` }}
      />
    </>
  );
}

export default CustomCursor;
