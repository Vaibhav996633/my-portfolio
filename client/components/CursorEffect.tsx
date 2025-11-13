import { useCursorTrail } from '@/hooks/useCursorTrail';

export const CursorEffect = () => {
  const canvasRef = useCursorTrail();

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{
        mixBlendMode: 'screen',
      }}
    />
  );
};
