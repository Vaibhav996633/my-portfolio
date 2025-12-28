import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';


// Unique 3D animation: interactive particles that react to mouse movement
const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    // Particle system
    const PARTICLE_COUNT = 400;
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x00fff7, size: 2.5, transparent: true, opacity: 0.8 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / width) * 2 - 1;
      mouseY = -(event.clientY / height) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    let frameId: number;
    let t = 0;
    const animate = () => {
      t += 0.01;
      // Animate particles in a wave, and react to mouse
      const positions = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        positions[i * 3 + 1] += Math.sin(t + i) * 0.05 + mouseY * 0.7;
        positions[i * 3] += Math.cos(t + i) * 0.05 + mouseX * 0.7;
      }
      geometry.attributes.position.needsUpdate = true;
      points.rotation.y += 0.002 + mouseX * 0.01;
      points.rotation.x += 0.001 + mouseY * 0.01;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'fixed', inset: 0, zIndex: -1 }} />;
};

export default ThreeBackground;
