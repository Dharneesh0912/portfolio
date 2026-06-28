// src/components/ui/ThreeScene.tsx
'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'

export default function ThreeScene() {
  return (
    <Canvas className="absolute inset-0 pointer-events-none">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere position={[0, 0, 0]} scale={2}>
        <meshStandardMaterial color="#00E5FF" wireframe />
      </Sphere>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}