import { useEffect, useRef, useState } from 'react';

export const InteractiveInsect = () => {
  const insectRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [idlePosition, setIdlePosition] = useState({ x: 0, y: 0 });
  const [isIdle, setIsIdle] = useState(true);

  const mousePositionRef = useRef({ x: 0, y: 0 });
  const idleTimeoutRef = useRef<NodeJS.Timeout>();
  const lastMouseMoveTimeRef = useRef(Date.now());
  const animationFrameRef = useRef<number>();
  const isIdleRef = useRef(true);
  const idlePositionRef = useRef({ x: window.innerWidth / 2 - 20, y: 0 });

  useEffect(() => {
    // Set initial idle position to top center
    const initialPosition = { x: window.innerWidth / 2 - 20, y: 0 };
    idlePositionRef.current = initialPosition;
    isIdleRef.current = true;
    setIdlePosition(initialPosition);
    setPosition(initialPosition);

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
      lastMouseMoveTimeRef.current = Date.now();

      // Clear idle timeout and set active state
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      isIdleRef.current = false;
      setIsIdle(false);

      // Set new idle timeout
      idleTimeoutRef.current = setTimeout(() => {
        isIdleRef.current = true;
        idlePositionRef.current = mousePositionRef.current;
        setIsIdle(true);
        setIdlePosition(mousePositionRef.current);
      }, 3000);
    };

    const animate = () => {
      setPosition((prevPos) => {
        const targetX = isIdleRef.current ? idlePositionRef.current.x : mousePositionRef.current.x;
        const targetY = isIdleRef.current ? idlePositionRef.current.y : mousePositionRef.current.y;

        // Smooth easing towards target position
        const easing = 0.1;
        const newX = prevPos.x + (targetX - prevPos.x) * easing;
        const newY = prevPos.y + (targetY - prevPos.y) * easing;

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (idleTimeoutRef.current) {
        clearTimeout(idleTimeoutRef.current);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={insectRef}
      className="fixed pointer-events-none z-40 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Body */}
        <ellipse
          cx="20"
          cy="20"
          rx="8"
          ry="12"
          stroke="rgba(0, 255, 255, 0.8)"
          strokeWidth="1.5"
          fill="rgba(0, 255, 255, 0.1)"
        />

        {/* Head */}
        <circle
          cx="20"
          cy="10"
          r="5"
          stroke="rgba(0, 255, 255, 0.8)"
          strokeWidth="1.5"
          fill="rgba(0, 255, 255, 0.1)"
        />

        {/* Left Antennae */}
        <path
          d="M 17 8 Q 12 5 10 2"
          stroke="rgba(0, 255, 255, 0.7)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right Antennae */}
        <path
          d="M 23 8 Q 28 5 30 2"
          stroke="rgba(0, 255, 255, 0.7)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left Legs (Front) */}
        <path
          d="M 14 16 L 8 14"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 14 16 L 8 18"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right Legs (Front) */}
        <path
          d="M 26 16 L 32 14"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 26 16 L 32 18"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Left Legs (Back) */}
        <path
          d="M 14 24 L 8 22"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 14 24 L 8 26"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Right Legs (Back) */}
        <path
          d="M 26 24 L 32 22"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 26 24 L 32 26"
          stroke="rgba(0, 255, 255, 0.6)"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />

        {/* Tail */}
        <path
          d="M 20 32 Q 18 36 20 38"
          stroke="rgba(0, 255, 255, 0.7)"
          strokeWidth="1.2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
