import { useEffect, useRef } from "react";

export default function RevealEffectBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let renderer: any, scene: any, camera: any;
    let width: number, height: number, cx: number, cy: number, wWidth: number, wHeight: number;
    let objects: any[] = [];
    let geometry: any, material: any;
    const conf = {
      color: 0xffffff,
      objectWidth: 12,
      objectThickness: 3,
      ambientColor: 0x808080,
      light1Color: 0xffffff,
      shadow: false,
      perspective: 75,
      cameraZ: 75,
    };
    let nx: number, ny: number;
    let animId: number;
    let TMath: any;

    function getRendererSize() {
      const cam = new (window as any).THREE.PerspectiveCamera(conf.perspective, camera.aspect);
      const vFOV = cam.fov * Math.PI / 180;
      const height = 2 * Math.tan(vFOV / 2) * Math.abs(conf.cameraZ);
      const width = height * cam.aspect;
      return [width, height];
    }

    function onResize() {
      width = window.innerWidth; cx = width / 2;
      height = window.innerHeight; cy = height / 2;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      const size = getRendererSize();
      wWidth = size[0];
      wHeight = size[1];
    }

    function initLights() {
      scene.add(new (window as any).THREE.AmbientLight(conf.ambientColor));
      let light = new (window as any).THREE.PointLight(0xffffff);
      light.position.z = 100;
      scene.add(light);
    }

    function startAnim() {
      document.body.classList.remove('revealed');
      objects.forEach(mesh => {
        mesh.rotation.set(0, 0, 0);
        mesh.material.opacity = 1;
        mesh.position.z = 0;
        let delay = TMath.randFloat(1, 2);
        let rx = TMath.randFloatSpread(2 * Math.PI);
        let ry = TMath.randFloatSpread(2 * Math.PI);
        let rz = TMath.randFloatSpread(2 * Math.PI);
        (window as any).TweenMax.to(mesh.rotation, 2, { x: rx, y: ry, z: rz, delay: delay });
        (window as any).TweenMax.to(mesh.position, 2, { z: 80, delay: delay + 0.5, ease: (window as any).Power1.easeOut });
        (window as any).TweenMax.to(mesh.material, 2, { opacity: 0, delay: delay + 0.5 });
      });
      setTimeout(() => {
        document.body.classList.add('revealed');
      }, 4500);
    }

    function initObjects() {
      objects = [];
      nx = Math.round(wWidth / conf.objectWidth) + 1;
      ny = Math.round(wHeight / conf.objectWidth) + 1;
      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          let material = new (window as any).THREE.MeshLambertMaterial({ color: conf.color, transparent: true, opacity: 1 });
          let mesh = new (window as any).THREE.Mesh(geometry, material);
          mesh.position.set(-wWidth / 2 + i * conf.objectWidth, -wHeight / 2 + j * conf.objectWidth, 0);
          objects.push(mesh);
          scene.add(mesh);
        }
      }
      document.body.classList.add('loaded');
      startAnim();
    }

    function animate() {
      animId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    function initScene() {
      onResize();
      scene = new (window as any).THREE.Scene();
      initLights();
      initObjects();
    }

    function init() {
      if (!canvasRef.current) return;
      renderer = new (window as any).THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera = new (window as any).THREE.PerspectiveCamera(conf.perspective, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = conf.cameraZ;
      scene = new (window as any).THREE.Scene();
      geometry = new (window as any).THREE.BoxGeometry(conf.objectWidth, conf.objectWidth, conf.objectThickness);
      TMath = (window as any).THREE.Math;
      window.addEventListener('resize', onResize);
      initScene();
      animate();
      // Make canvas visible after init
      canvasRef.current.style.opacity = '1';
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
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/TweenMax.min.js')
    ]).then(() => {
      // Wait for window.THREE and window.TweenMax to be available
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
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="reveal-effect"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        opacity: 0, // will be set to 1 after init
        pointerEvents: 'none',
        transition: 'opacity 0.5s',
      }}
    />
  );
}
