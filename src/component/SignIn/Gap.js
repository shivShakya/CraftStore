import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import mug from './mug.glb';

function Gap() {
  const { scene } = useGLTF(mug);

  return (
    <Canvas style={{width: '300px', height: '300px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <mesh receiveShadow scale={[25, 25, 25]}>
        <primitive object={scene} />
      </mesh>
    </Canvas>
  );
}

export default Gap;