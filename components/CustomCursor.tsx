import React, { useEffect, useState } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if cursor is over clickable element
      const target = e.target as HTMLElement;
      const isClickable = (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a,button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      );

      setIsPointer(Boolean(isClickable));
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      
      // Restore default cursor
      document.body.style.cursor = 'auto';
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed pointer-events-none z-50 rounded-full mix-blend-difference transition-transform duration-300 ${
          isClicking ? 'scale-75' : 'scale-100'
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '40px' : '20px',
          height: isPointer ? '40px' : '20px',
          backgroundColor: '#00FFFF',
          transform: 'translate(-50%, -50%)',
          opacity: 0.8,
        }}
      />
      
      {/* Trailing effect */}
      <div
        className="fixed pointer-events-none z-40 rounded-full bg-white/30 mix-blend-difference transition-all duration-500 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isPointer ? '60px' : '40px',
          height: isPointer ? '60px' : '40px',
          transform: 'translate(-50%, -50%)',
          opacity: 0.3,
        }}
      />
    </>
  );
}