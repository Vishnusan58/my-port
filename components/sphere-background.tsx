"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import { useRef } from "react"
import type { Mesh } from "three"

function AnimatedSphere() {
  const meshRef = useRef<Mesh>(null)

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001
      meshRef.current.rotation.x += 0.0005
    }
  })

  return (
    <Sphere args={[1, 32, 32]} ref={meshRef}>
      <meshStandardMaterial color="white" wireframe={true} transparent opacity={0.05} />
    </Sphere>
  )
}

export default function SphereBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <AnimatedSphere />
        {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}
      </Canvas>
    </div>
  )
}
