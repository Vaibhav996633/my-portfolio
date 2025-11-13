import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  id: number;
}

export const useCursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particleIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Create particles on mouse movement
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const velocity = 1 + Math.random() * 3;
        
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          size: 1 + Math.random() * 2,
          id: particleIdRef.current++,
        });
      }
    };

    const animate = () => {
      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = 'rgba(15, 20, 25, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life -= 0.015;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // Gravity effect

        if (particle.life > 0) {
          // Draw particle with cyan glow
          ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
          ctx.shadowBlur = 10;
          ctx.fillStyle = `rgba(0, 255, 255, ${particle.life * 0.6})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * particle.life, 0, Math.PI * 2);
          ctx.fill();

          return true;
        }
        return false;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return canvasRef;
};
