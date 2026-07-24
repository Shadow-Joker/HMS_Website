import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshWobbleMaterial, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

// Node Data structure for Hospital Departments
interface HospitalNode {
  id: string;
  name: string;
  code: string;
  position: [number, number, number];
  color: string;
  load: number; // 0-100% capacity load
}

const HOSPITAL_NODES: HospitalNode[] = [
  { id: '1', name: 'Emergency Room', code: 'ER-01', position: [-2.2, 0.8, 1.2], color: '#406768', load: 88 },
  { id: '2', name: 'ICU Telemetry', code: 'ICU-3A', position: [2.0, 1.2, -0.8], color: '#687D31', load: 94 },
  { id: '3', name: 'Surgical Suites', code: 'OT-04', position: [-1.8, -1.2, -1.0], color: '#19350C', load: 76 },
  { id: '4', name: 'AI Triage Gateway', code: 'GATE-AI', position: [0, 2.2, 0], color: '#6FA9BB', load: 99 },
  { id: '5', name: 'Pharmacy & Supplies', code: 'PHARM-X', position: [2.2, -0.8, 1.5], color: '#687D31', load: 62 },
  { id: '6', name: 'Diagnostics & Imaging', code: 'RAD-02', position: [0, -2.0, -1.2], color: '#406768', load: 81 },
];

function CentralCore({ activeMode }: { activeMode: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      {/* Outer Holographic Ring */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.1, 2]} />
        <MeshWobbleMaterial
          color={activeMode === 'icu' ? '#687D31' : '#19350C'}
          factor={0.35}
          speed={1.8}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Inner Glowing Nucleus */}
      <Sphere args={[0.55, 32, 32]}>
        <meshStandardMaterial
          color={activeMode === 'ot' ? '#687D31' : '#406768'}
          emissive={activeMode === 'ot' ? '#687D31' : '#406768'}
          emissiveIntensity={1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function HospitalNodePoint({ node, onSelect }: { node: HospitalNode; onSelect: (n: HospitalNode) => void }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group position={node.position}>
      {/* Node Sphere */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onSelect(node)}
      >
        <octahedronGeometry args={[hovered ? 0.38 : 0.3, 0]} />
        <meshStandardMaterial
          color={hovered ? '#6FA9BB' : node.color}
          emissive={node.color}
          emissiveIntensity={hovered ? 2.2 : 0.9}
          wireframe={hovered}
        />
      </mesh>

      {/* Connection Beam to Core */}
      <Line
        points={[[0, 0, 0], [-node.position[0], -node.position[1], -node.position[2]]]}
        color={node.color}
        lineWidth={1.5}
        transparent
        opacity={hovered ? 0.95 : 0.45}
      />
    </group>
  );
}

function ParticleNetwork() {
  const count = 120;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 8;
      p[i * 3 + 1] = (Math.random() - 0.5) * 8;
      p[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return p;
  }, []);

  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
      particlesRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#406768"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  );
}

export function HospitalSpatialCanvas({ mode = 'neural' }: { mode?: 'neural' | 'icu' | 'ot' }) {
  const [selectedNode, setSelectedNode] = useState<HospitalNode | null>(HOSPITAL_NODES[0]);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[420px] rounded-2xl bg-white border border-[#406768]/30 p-8 flex flex-col justify-center items-center text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-[#687D31]/20 border border-[#687D31] flex items-center justify-center text-[#19350C] mb-4">
          🏥
        </div>
        <h3 className="text-xl font-bold text-[#19350C] mb-2">3D Spatial Node Engine (Fallback Mode)</h3>
        <p className="text-sm text-[#19350C]/70 max-w-md">CSS spatial matrix simulating Tantriks AI core monitoring 6 hospital telemetry vectors.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[500px] rounded-2xl overflow-hidden bg-white/80 border border-[#406768]/30 shadow-xl backdrop-blur-md">
      {/* Header Overlay Info */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-3 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#406768]/30 shadow-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-[#687D31] animate-pulse" />
        <span className="text-xs font-mono text-[#19350C]">
          TANTRIKS AI 3D SPATIAL ENGINE :: <span className="text-[#406768] font-bold uppercase">{mode} MODE</span>
        </span>
      </div>

      {/* Selected Node Status Card Overlay */}
      {selectedNode && (
        <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#406768]/30 shadow-lg max-w-xs transition-all">
          <div className="flex justify-between items-start mb-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#406768] font-bold">{selectedNode.code}</span>
              <h4 className="text-sm font-bold text-[#19350C]">{selectedNode.name}</h4>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#687D31]/15 text-[#19350C] font-bold border border-[#687D31]/30">
              {selectedNode.load}% LOAD
            </span>
          </div>
          <div className="w-full bg-[#406768]/20 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#19350C] h-full rounded-full transition-all duration-500"
              style={{ width: `${selectedNode.load}%` }}
            />
          </div>
          <p className="text-[11px] text-[#19350C]/75 mt-2 font-mono">
            AI Triage Priority: <span className="text-[#687D31] font-bold">OPTIMAL</span> (0.4ms latency)
          </p>
        </div>
      )}

      {/* Interactive Controls Guide */}
      <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center space-x-2 text-[11px] font-mono text-[#19350C]/70 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#406768]/30 shadow-sm">
        <span>🖱️ Drag to rotate</span>
        <span>•</span>
        <span>Scroll to zoom</span>
      </div>

      {/* 3D R3F Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        onError={() => setHasError(true)}
        className="w-full h-full cursor-grab active:cursor-grabbing bg-gradient-to-b from-white/60 to-[#e2e0db]/80"
      >
        <ambientLight intensity={0.9} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#19350C" />
        <pointLight position={[-10, -10, -10]} intensity={0.9} color="#687D31" />

        <CentralCore activeMode={mode} />

        {HOSPITAL_NODES.map((node) => (
          <HospitalNodePoint key={node.id} node={node} onSelect={setSelectedNode} />
        ))}

        <ParticleNetwork />

        <OrbitControls
          enableZoom={true}
          maxDistance={8}
          minDistance={3}
          enablePan={false}
          rotateSpeed={0.6}
        />
      </Canvas>
    </div>
  );
}
