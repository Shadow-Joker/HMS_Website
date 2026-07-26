import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshWobbleMaterial, Float, Line, Ring } from '@react-three/drei';
import * as THREE from 'three';

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
    color: '#687D31',
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
    color: '#19350C',
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
    color: '#687D31',
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
    color: '#19350C',
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
    color: '#6FA9BB',
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
    color: '#406768',
    load: 81,
    patients: 29,
    doctors: 7,
    priority: 'NORMAL',
    description: 'AI CT/MRI scan triage & stroke detection pipeline.'
  },
];

// Central Core
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
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.1, 2]} />
        <MeshWobbleMaterial
          color={activeMode === 'icu' ? '#687D31' : '#19350C'}
          factor={pulsing ? 0.7 : 0.35}
          speed={pulsing ? 4.0 : 1.8}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[1.6, 0.02, 16, 64]} />
        <meshBasicMaterial color="#6FA9BB" transparent opacity={0.6} />
      </mesh>

      <Sphere args={[0.55, 32, 32]}>
        <meshStandardMaterial
          color={activeMode === 'ot' ? '#687D31' : '#19350C'}
          emissive={activeMode === 'ot' ? '#687D31' : '#19350C'}
          emissiveIntensity={pulsing ? 3.0 : 1.5}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

// Data Packet Sphere
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
      <meshBasicMaterial color="#6FA9BB" />
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
        <meshBasicMaterial color="#687D31" transparent opacity={0.25} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[3.0, 3.02, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#6FA9BB" transparent opacity={0.2} side={THREE.DoubleSide} />
      </Ring>
      <Ring args={[4.5, 4.52, 64]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#406768" transparent opacity={0.15} side={THREE.DoubleSide} />
      </Ring>
      
      <mesh ref={radarRef}>
        <planeGeometry args={[9, 0.03]} />
        <meshBasicMaterial color="#6FA9BB" transparent opacity={0.4} side={THREE.DoubleSide} />
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
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onSelect(node)}
      >
        <octahedronGeometry args={[hovered || isSelected ? 0.42 : 0.3, 0]} />
        <meshStandardMaterial
          color={hovered || isSelected ? '#6FA9BB' : node.color}
          emissive={isSelected ? '#19350C' : node.color}
          emissiveIntensity={hovered || isSelected ? 2.5 : 0.9}
          wireframe={hovered || isSelected}
        />
      </mesh>

      <Line
        points={[[0, 0, 0], [-node.position[0], -node.position[1], -node.position[2]]]}
        color={isSelected ? '#19350C' : node.color}
        lineWidth={isSelected ? 2.5 : 1.5}
        transparent
        opacity={hovered || isSelected ? 0.95 : 0.45}
      />

      <DataPacket start={[0, 0, 0]} end={[-node.position[0], -node.position[1], -node.position[2]]} speed={0.8} />
    </group>
  );
}

function ParticleNetwork() {
  const count = 120;
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
        color="#687D31"
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

  const handlePulseSignal = () => {
    setPulsing(true);
    setTimeout(() => setPulsing(false), 2000);
  };

  return (
    <div className="relative w-full h-full min-h-[480px] rounded-2xl overflow-hidden bg-white border border-[#D5D3CC] shadow-sm flex flex-col justify-between p-4">
      
      {/* Header Controls */}
      <div className="relative z-10 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center space-x-2 bg-[#F4F3EF] px-3 py-1.5 rounded-lg border border-[#D5D3CC]">
          <span className={`w-2 h-2 rounded-full ${pulsing ? 'bg-red-500 animate-ping' : 'bg-[#6FA9BB]'}`} />
          <span className="text-xs font-mono text-[#19350C] font-semibold">
            3D NODE MATRIX :: <span className="uppercase text-[#687D31] font-bold">{mode}</span>
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={handlePulseSignal}
            className="px-3 py-1.5 rounded-lg bg-[#19350C] hover:bg-[#19350C]/90 text-white font-mono text-xs font-medium cursor-pointer transition-all active:scale-98"
          >
            PULSE
          </button>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`px-3 py-1.5 rounded-lg font-mono text-xs font-medium border transition-all cursor-pointer ${
              autoRotate
                ? 'bg-[#D5D3CC]/40 text-[#19350C] border-[#406768]/30 font-bold'
                : 'bg-white text-[#406768] border-[#D5D3CC]'
            }`}
          >
            {autoRotate ? 'ORBIT: ON' : 'ORBIT: OFF'}
          </button>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.9} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#687D31" />
          <pointLight position={[-10, -10, -10]} intensity={0.9} color="#19350C" />

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

      {/* Selected Node Drawer */}
      {selectedNode && (
        <div className="relative z-20 self-start mt-auto bg-white p-4 rounded-xl border border-[#406768]/30 shadow-lg max-w-xs pointer-events-auto">
          <div className="flex justify-between items-start mb-1">
            <div>
              <span className="text-[10px] font-mono text-[#687D31] font-bold">{selectedNode.code}</span>
              <h4 className="text-sm font-bold text-[#19350C] font-display">{selectedNode.name}</h4>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-xs text-[#406768] hover:text-[#19350C] cursor-pointer font-bold"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-[#406768] mb-2 leading-relaxed">{selectedNode.description}</p>
          <div className="flex justify-between text-xs font-mono text-[#19350C] pt-2 border-t border-[#D5D3CC]">
            <span>Capacity Load:</span>
            <span className="font-bold text-[#687D31]">{selectedNode.load}%</span>
          </div>
        </div>
      )}

      {/* Footer Selector Strip */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#D5D3CC] pointer-events-auto mt-auto text-xs font-mono">
        <div className="flex items-center space-x-1.5 overflow-x-auto">
          {HOSPITAL_NODES.map((node) => (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node)}
              className={`px-2.5 py-1 rounded transition-all cursor-pointer whitespace-nowrap ${
                selectedNode?.id === node.id
                  ? 'bg-[#19350C] text-white font-bold'
                  : 'bg-[#F4F3EF] text-[#406768] hover:bg-[#D5D3CC]/40 font-semibold'
              }`}
            >
              {node.code}
            </button>
          ))}
        </div>
        <span className="text-[10px] text-[#406768] hidden sm:inline font-semibold">CLICK NODE TO INSPECT</span>
      </div>

    </div>
  );
}
