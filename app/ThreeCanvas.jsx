'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, MeshDistortMaterial, Float, Html } from '@react-three/drei';

function ConnectedNodes() {
  const groupRef = useRef();
  
  // The 4 connections mapping to your portfolio sections
  const nodes = [
    { position: [2.2, 1.2, 1], label: " SQL" },
    { position: [-2.2, -1.2, 1.5], label: " PYTHON" },
    { position: [1.2, -2.2, -1.5], label: " POWER BI" },
    { position: [-1.8, 1.8, -1], label: " Adv. Excel" }
  ];

  // Slowly rotate the entire network cluster
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.08;
      groupRef.current.rotation.x = Math.sin(t * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Core */}
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[0.7, 64, 64]}>
          <MeshDistortMaterial 
            color="#10b981" 
            distort={0.4} 
            speed={2} 
            roughness={0.2} 
            metalness={0.8} 
            wireframe={true} 
          />
        </Sphere>
      </Float>

      {/* Orbiting Nodes and Connecting Lines */}
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          <Float speed={1.5 + (i * 0.2)} rotationIntensity={0.5} floatIntensity={1} floatingRange={[-0.2, 0.2]}>
            <group position={node.position}>
              {/* Satellite Node */}
              <Sphere args={[0.15, 32, 32]}>
                <meshStandardMaterial color="#34d399" emissive="#10b981" emissiveIntensity={0.5} roughness={0.1} metalness={0.8} />
              </Sphere>
              
              {/* 3D Floating Label */}
              <Html distanceFactor={12} position={[0, 0.4, 0]} center zIndexRange={[100, 0]}>
                <div className="text-[9px] font-mono tracking-widest text-emerald-400 bg-zinc-950/80 px-2 py-1 rounded border border-emerald-500/20 whitespace-nowrap backdrop-blur-md pointer-events-none select-none">
                  {node.label}
                </div>
              </Html>
            </group>
          </Float>
          
          {/* Data Line connecting to core */}
          <Line 
            points={[[0, 0, 0], node.position]} 
            color="#059669" 
            lineWidth={1} 
            transparent 
            opacity={0.3} 
          />
        </React.Fragment>
      ))}
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-800/80 bg-gradient-to-b from-zinc-900/40 to-black/60 shadow-2xl backdrop-blur-sm">
      
      {/* Top Left Overlay matching reference site */}
      <div className="absolute top-5 left-5 z-10 flex flex-col gap-1 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[12px] font-mono tracking-widest text-zinc-300 uppercase">The Connected Mind</span>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase ml-4">4 Connections</span>
      </div>

      <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#10b981" intensity={2} />
        
        <ConnectedNodes />
        
        {/* Allows dragging but disables scrolling/zooming to protect page layout */}
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>

      {/* Bottom Center Overlay */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center pointer-events-none">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Drag to rotate</span>
      </div>
    </div>
  );
}