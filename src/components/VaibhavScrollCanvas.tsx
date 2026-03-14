import React, { useEffect, useRef, useState } from 'react';
import { MotionValue, useTransform, useMotionValueEvent, useSpring } from 'framer-motion';

interface VaibhavScrollCanvasProps {
  scrollYProgress: MotionValue<number>;
  totalFrames: number;
  imageFolderPath: string;
  className?: string;
}

const VaibhavScrollCanvas: React.FC<VaibhavScrollCanvasProps> = ({
  scrollYProgress,
  totalFrames,
  imageFolderPath,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Map scroll progress (0-1) to raw target frame index
  const rawFrameIndex = useTransform(scrollYProgress, [0, 1], [0, totalFrames - 1]);
  
  // Apply a spring to the index to smooth out mouse wheel ticks
  const frameIndex = useSpring(rawFrameIndex, {
    stiffness: 400, // High stiffness for responsiveness
    damping: 90,    // High damping to prevent oscillation
    restDelta: 0.001
  });

  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        // pad with zeros: ezgif-frame-001.jpg
        const frameNum = String(i).padStart(3, '0');
        img.src = `${imageFolderPath}/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === totalFrames) {
                setImagesLoaded(true);
            }
        };
        images.push(img);
    }
    imagesRef.current = images;
  }, [totalFrames, imageFolderPath]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || imagesRef.current.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[Math.floor(index)];
    if (!img || !img.complete) return;

    // High DPI Support
    const pixelRatio = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * pixelRatio || canvas.height !== height * pixelRatio) {
        canvas.width = width * pixelRatio;
        canvas.height = height * pixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(pixelRatio, pixelRatio);
    }

    // Draw image to cover with slight zoom and vertical offset
    const zoom = 1.0;
    const isMobileSize = width < 768;
    const yOffset = isMobileSize ? 10 : 40; // Less offset on mobile to keep head visible
    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;
    let drawWidth, drawHeight, x, y;

    if (imgRatio > canvasRatio) {
        drawHeight = height * zoom;
        drawWidth = height * zoom * imgRatio;
        x = (width - drawWidth) / 2;
        y = (height - drawHeight) / 2 + yOffset;
    } else {
        drawWidth = width * zoom;
        drawHeight = (width * zoom) / imgRatio;
        x = (width - drawWidth) / 2;
        y = (height - drawHeight) / 2 + yOffset;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, x, y, drawWidth, drawHeight);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    requestAnimationFrame(() => renderFrame(latest));
  });

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
        renderFrame(frameIndex.get());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [frameIndex]);

  // Initial render when images finish loading
  useEffect(() => {
    if (imagesLoaded) {
        renderFrame(frameIndex.get());
    }
  }, [imagesLoaded]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default VaibhavScrollCanvas;
