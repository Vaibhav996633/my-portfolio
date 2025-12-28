import { useEffect, useRef, useState } from "react";

export default function RevealEffectLoader({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let renderer: any, scene: any, camera: any;
    let objects: any[] = [];
    let width: number, height: number, wWidth: number, wHeight: number;
    const config = {
      color: 0xffffff,
      cubeSize: 12,
      cubeDepth: 3,
      cameraZ: 75,
      perspective: 75
    };

    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      const vFOV = camera.fov * Math.PI / 180;
      wHeight = 2 * Math.tan(vFOV / 2) * config.cameraZ;
      wWidth = wHeight * camera.aspect;
    }

    function createLights() {
      scene.add(new (window as any).THREE.AmbientLight(0x808080));
      const light = new (window as any).THREE.PointLight(0xffffff);
      light.position.z = 100;
      scene.add(light);
    }

    function createCubes() {
      scene.clear();
      createLights();
      objects = [];
      const geometry = new (window as any).THREE.BoxGeometry(
        config.cubeSize,
        config.cubeSize,
        config.cubeDepth
      );
      const nx = Math.round(wWidth / config.cubeSize) + 1;
      const ny = Math.round(wHeight / config.cubeSize) + 1;
      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          const material = new (window as any).THREE.MeshLambertMaterial({
            color: config.color,
            transparent: true
          });
          const cube = new (window as any).THREE.Mesh(geometry, material);
          cube.position.set(
            -wWidth / 2 + i * config.cubeSize,
            -wHeight / 2 + j * config.cubeSize,
            0
          );
          scene.add(cube);
          objects.push(cube);
        }
      }
    }

    function startAnimation() {
      document.body.classList.remove('revealed');
      document.body.classList.add('loaded');
      createCubes();
      objects.forEach(cube => {
        const delay = (window as any).THREE.Math.randFloat(0.8, 1.8);
        (window as any).TweenMax.to(cube.rotation, 2, {
          x: (window as any).THREE.Math.randFloatSpread(Math.PI * 2),
          y: (window as any).THREE.Math.randFloatSpread(Math.PI * 2),
          z: (window as any).THREE.Math.randFloatSpread(Math.PI * 2),
          delay
        });
        (window as any).TweenMax.to(cube.position, 2, {
          z: 80,
          delay: delay + 0.4,
          ease: (window as any).Power1.easeOut
        });
        (window as any).TweenMax.to(cube.material, 2, {
          opacity: 0,
          delay: delay + 0.4
        });
      });
      setTimeout(() => {
        document.body.classList.add('revealed');
        setRevealed(true);
      }, 4500);
    }

    function animate() {
      renderer && renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    function init() {
      if (!canvasRef.current) return;
      renderer = new (window as any).THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      });
      camera = new (window as any).THREE.PerspectiveCamera(
        config.perspective,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = config.cameraZ;
      scene = new (window as any).THREE.Scene();
      window.addEventListener('resize', onResize);
      onResize();
      animate();
      startAnimation();
    }

    function loadScript(src: string) {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    }

    Promise.all([
      loadScript('https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js')
    ]).then(() => {
      const checkReady = () => {
        if ((window as any).THREE && (window as any).TweenMax && canvasRef.current) {
          init();
        } else {
          setTimeout(checkReady, 50);
        }
      };
      checkReady();
    });

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      {/* Always render the content, canvas overlays on top until reveal is done */}
      {children}
      {!revealed && (
        <canvas
          ref={canvasRef}
          id="reveal-canvas"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999,
            background: 'transparent',
            pointerEvents: 'none'
          }}
        />
      )}
    </>
  );
}
