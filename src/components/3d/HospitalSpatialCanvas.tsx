import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshWobbleMaterial, Float, Line, Ring } from '@react-three/drei';
import * as THREE from 'three';
import { X, Zap, Activity } from 'lucide-react';

// Node Data structure for Hospital Departments
export interface HospitalNode {
  id: string;
  name: string;
  code: string;
  position: [number, number, number];
  color: string;
  load: number;
  patients: number;
  doctors: number;
  priority: 'NORMAL' | 'ELEVATED' | 'CRITICAL';
  description: string;
}

const HOSPITAL_NODES: HospitalNode[] = [
  {
    id: '1',
    name: 'Emergency Room',
    code: 'ER-01',
    position: [-2.2, 0.8, 1.2],
    color: '#769382',
    load: 88,
    patients: 42,
    doctors: 8,
    priority: 'ELEVATED',
    description: 'Real-time triage prediction & ambulance routing active.'
  },
  {
    id: '2',
    name: 'ICU Telemetry',
    code: 'ICU-3A',
    position: [2.0, 1.2, -0.8],
    color: '#1E2D26',
    load: 94,
    patients: 18,
    doctors: 6,
    priority: 'CRITICAL',
    description: 'Autonomous step-down bed allocation engine active.'
  },
  {
    id: '3',
    name: 'Surgical Suites',
    code: 'OT-04',
    position: [-1.8, -1.2, -1.0],
    color: '#769382',
    load: 76,
    patients: 12,
    doctors: 14,
    priority: 'NORMAL',
    description: 'Sterilization cycle & team readiness synchronized.'
  },
  {
    id: '4',
    name: 'AI Triage Gateway',
    code: 'GATE-AI',
    position: [0, 2.2, 0],
    color: '#1E2D26',
    load: 99,
    patients: 128,
    doctors: 3,
    priority: 'ELEVATED',
    description: 'Neural intake stream processing 0.2ms packet telemetry.'
  },
  {
    id: '5',
    name: 'Pharmacy & Supplies',
    code: 'PHARM-X',
    position: [2.2, -0.8, 1.5],
    color: '#769382',
    load: 62,
    patients: 0,
    doctors: 4,
    priority: 'NORMAL',
    description: 'Automated medication dispensing & inventory prediction.'
  },
  {
    id: '6',
    name: 'Diagnostics & Imaging',
    code: 'RAD-02',
    position: [0, -2.0, -1.2],
    color: '#4E6B5A',
    load: 81,
    patients: 29,
    doctors: 7,
    priority: 'NORMAL',
    description: 'AI CT/MRI scan triage & stroke detection pipeline.'
  },
];

// Central Holographic Neural Core
function CentralCore({ activeMode, pulsing }: { activeMode: string; pulsing: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (pulsing ? 1.2 : 0.4);
      meshRef.current.rotation.x += delta * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
      {/* Outer Holographic Ring */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.1, 2]} />
        <MeshWobbleMaterial
          color={activeMode === 'icu' ? '#769382' : '#1E2D26'}
          factor={pulsing ? 0.7 : 0.35}
          speed={pulsing ? 4.0 : 1.8}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Rotating Outer Gyro Ring */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.6, 0.02, 16, 64]} />
        <meshBasicMaterial color="#769382" transparent opacity={0.5} />
      </mesh>

      {/* Inner Glowing Nucleus */}
      <Sphere args={[0.55, 32, 32]}>
        <meshStandardMaterial
          color={activeMode === 'ot' ? '#769382' : '#1E2D26'}
          emissive={activeMode === 'ot' ? '#769382' : '#1E2D26'}
          emissiveIntensity={pulsing ? 3.0 : 1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Data Packet Sphere traveling along beam
function DataPacket({ start, end, speed = 1 }: { start: [number, number, number]; end: [number, number, number]; speed?: number }) {
  const packetRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (packetRef.current) {
      const t = (state.clock.getElapsedTime() * speed) % 1;
      packetRef.current.position.x = start[0] + (end[0] - start[0]) * t;
      packetRef.current.position.y = start[1] + (end[1] - start[1]) * t;
      packetRef.current.position.z = start[2] + (end[2] - start[2]) * t;
    }
  });

  return (
    <mesh ref={packetRef}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color="#769382" />
    </mesh>
  );
}

// Ground Radar Scan Ring
function GroundRadar() {
  const radarRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (radarRef.current) {
      radarRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group position={[0, -2.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <Ring args={[1.5, 1.52, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#769382" transparent opacity={0.25} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[3.0, 3.02, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#769382" transparent opacity={0.18} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[4.5, 4.52, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#769382" transparent opacity={0.1} side={THREE.DoubleSide} />
      </Ring>
      
      <mesh ref={radarRef}>
        <planeGeometry args={[9, 0.03]} />
        <meshBasicMaterial color="#769382" transparent opacity={0.35} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function HospitalNodePoint({ node, isSelected, onSelect }: { node: HospitalNode; isSelected: boolean; onSelect: (n: HospitalNode) => void }) {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (isSelected ? 2.0 : 0.8);
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
        <octahedronGeometry args={[hovered || isSelected ? 0.42 : 0.3, 0]} />
        <meshStandardMaterial
          color={hovered || isSelected ? '#769382' : node.color}
          emissive={isSelected ? '#1E2D26' : node.color}
          emissiveIntensity={hovered || isSelected ? 2.5 : 0.9}
          wireframe={hovered || isSelected}
        />
      </mesh>

      {/* Connection Line */}
      <Line
        points={[[0, 0, 0], [-node.position[0], -node.position[1], -node.position[2]]]}
        color={isSelected ? '#1E2D26' : node.color}
        lineWidth={isSelected ? 2.5 : 1.5}
        transparent
        opacity={hovered || isSelected ? 0.95 : 0.45}
      />

      <DataPacket start={[0, 0, 0]} end={[-node.position[0], -node.position[1], -node.position[2]]} speed={0.8} />
    </group>
  );
}

function ParticleNetwork() {
  const count = 150;
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 9;
      p[i * 3 + 1] = (Math.random() - 0.5) * 9;
      p[i * 3 + 2] = (Math.random() - 0.5) * 9;
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
        size={0.04}
        color="#769382"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export function HospitalSpatialCanvas({ mode = 'neural' }: { mode?: 'neural' | 'icu' | 'ot' }) {
  const [selectedNode, setSelectedNode] = useState<HospitalNode | null>(null);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulsing, setPulsing] = useState<boolean>(false);
  const [hasError, setHasError] = useState(false);

  const handlePulseSignal = () => {
    setPulsing(true);
    setTimeout(() => setPulsing(false), 2000);
  };

  if (hasError) {
    return (
      <div className="w-full h-full min-h-[440px] rounded-2xl bg-white border border-[#769382]/30 p-8 flex flex-col justify-center items-center text-center shadow-lg">
        <div className="w-16 h-16 rounded-full bg-[#769382]/20 border border-[#769382] flex items-center justify-center text-[#1E2D26] mb-4">
          🏥
        </div>
        <h3 className="text-xl font-bold text-[#1E2D26] mb-2 font-nebula">3D Spatial Node Engine</h3>
        <p className="text-sm text-[#1E2D26]/70 max-w-md">CSS spatial matrix simulating Tantriks AI core monitoring 6 hospital telemetry vectors.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[480px] lg:min-h-[520px] rounded-3xl overflow-hidden bg-gradient-to-b from-white/90 via-[#F3EFE3]/80 to-[#EBE3D3]/60 border border-[#769382]/30 shadow-xl backdrop-blur-md flex flex-col justify-between p-4">
      
      {/* 1. Header Bar Overlay: Clean & Non-overlapping */}
      <div className="relative z-10 flex items-center justify-between gap-2 pointer-events-auto">
        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#769382]/30 shadow-sm">
          <span className={`w-2 h-2 rounded-full ${pulsing ? 'bg-red-500 animate-ping' : 'bg-[#769382] animate-pulse'}`} />
          <span className="text-[11px] font-nebula text-[#1E2D26] tracking-wider">
            3D SPATIAL CANVAS :: <span className="text-[#769382] font-bold uppercase">{mode}</span>
          </span>
        </div>

        {/* Minimal Actions */}
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePulseSignal}
            className="px-3 py-1.5 rounded-xl bg-[#1E2D26] hover:bg-[#1E2D26]/90 text-[#F3EFE3] font-nebula text-[10px] font-bold tracking-wider shadow cursor-pointer transition-all active:scale-95 flex items-center space-x-1"
          >
            <Zap className="w-3 h-3 text-[#769382]" />
            <span>PULSE AI</span>
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-xl font-nebula text-[10px] font-bold tracking-wider border transition-all cursor-pointer ${
              autoRotate
                ? 'bg-[#769382]/15 text-[#1E2D26] border-[#769382]/40'
                : 'bg-white/80 text-[#1E2D26]/60 border-[#769382]/30'
            }`}
          >
            {autoRotate ? 'ROTATE: ON' : 'ROTATE: OFF'}
          </button>
        </div>
      </div>

      {/* 2. 3D R3F Canvas - Takes full space */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          onError={() => setHasError(true)}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#769382" />
          <pointLight position={[-10, -10, -10]} intensity={0.9} color="#1E2D26" />

          <CentralCore activeMode={mode} pulsing={pulsing} />

          {HOSPITAL_NODES.map((node) => (
            <HospitalNodePoint
              key={node.id}
              node={node}
              isSelected={selectedNode?.id === node.id}
              onSelect={setSelectedNode}
            />
          ))}

          <GroundRadar />
          <ParticleNetwork />

          <OrbitControls
            autoRotate={autoRotate}
            autoRotateSpeed={0.8}
            enableZoom={true}
            maxDistance={8}
            minDistance={3}
            enablePan={false}
            rotateSpeed={0.6}
          />
        </Canvas>
      </div>

      {/* 3. Selected Node Floating Card Drawer (Sleek, bottom-left, with close button, zero overlap) */}
      {selectedNode && (
        <div className="relative z-20 self-start mt-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#769382]/40 shadow-2xl max-w-xs transition-all pointer-events-auto">
          <div className="flex justify-between items-start mb-1.5">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[10px] font-nebula uppercase tracking-widest text-[#769382] font-bold">{selectedNode.code}</span>
                <span className={`px-2 py-0.5 rounded-full text-[8px] font-nebula font-bold ${
                  selectedNode.priority === 'CRITICAL'
                    ? 'bg-red-500/15 text-red-600 border border-red-500/30'
                    : selectedNode.priority === 'ELEVATED'
                    ? 'bg-[#769382]/20 text-[#1E2D26] border border-[#769382]/40'
                    : 'bg-green-500/15 text-green-700 border border-green-500/30'
                }`}>
                  {selectedNode.priority}
                </span>
              </div>
              <h4 className="text-sm font-bold text-[#1E2D26] font-nebula tracking-wide">{selectedNode.name}</h4>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="p-1 rounded-full text-[#1E2D26]/60 hover:text-[#1E2D26] hover:bg-[#769382]/20 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-[#1E2D26]/80 mb-2 leading-relaxed">
            {selectedNode.description}
          </p>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono mb-2 bg-[#F3EFE3] p-2 rounded-lg border border-[#769382]/20">
            <div>
              <span className="text-[#1E2D26]/60 text-[9px] block font-sans">Patients</span>
              <span className="font-bold text-[#1E2D26]">{selectedNode.patients} Active</span>
            </div>
            <div>
              <span className="text-[#1E2D26]/60 text-[9px] block font-sans">Staff</span>
              <span className="font-bold text-[#769382]">{selectedNode.doctors} On-Call</span>
            </div>
          </div>

          <div className="w-full bg-[#769382]/20 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                selectedNode.load > 90 ? 'bg-red-600' : 'bg-[#1E2D26]'
              }`}
              style={{ width: `${selectedNode.load}%` }}
            />
          </div>
        </div>
      )}

      {/* 4. Bottom Horizontal Node Bar & Clean Minimal Guide */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-[#769382]/20 pointer-events-auto mt-auto">
        
        {/* Sleek Horizontal Node Pill Strip */}
        <div className="flex items-center space-x-1 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none font-nebula text-[9px]">
          {HOSPITAL_NODES.map((node) => (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                selectedNode?.id === node.id
                  ? 'bg-[#1E2D26] text-[#F3EFE3] font-bold shadow-sm'
                  : 'bg-white/80 text-[#1E2D26]/70 hover:bg-[#769382]/20'
              }`}
            >
              {node.code}
            </button>
          ))}
        </div>

        {/* Minimal Unobtrusive Guidance Text */}
        <span className="text-[9px] font-nebula text-[#1E2D26]/60 tracking-widest whitespace-nowrap">
          🖱️ CLICK NODE · DRAG TO ROTATE
        </span>
      </div>

    </div>
  );
}
