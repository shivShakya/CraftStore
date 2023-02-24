import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import mug from './pot.glb';

function Nap() {
  const { scene } = useGLTF(mug);

  return (
    <Canvas style={{width: '300px', height: '300px' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <mesh receiveShadow scale={[2, 2, 2]}>
        <primitive object={scene} />
      </mesh>
    </Canvas>
  );
}

export default Nap;
