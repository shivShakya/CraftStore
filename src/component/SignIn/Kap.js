import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import start from './start.glb';

function Kap() {
  const { scene } = useGLTF(start);

  return (
    <Canvas style={{width: '300px', height: '300px'}}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <spotLight
         position={[10, 10, 10]}
         angle={0.15}
         penumbra={1}
         intensity={1}
         castShadow
      />
      <OrbitControls />
      <mesh receiveShadow scale={[5, 5, 5]}>
        <primitive object={scene} />
      </mesh>
    </Canvas>
  );
}

export default Kap;



{/*
  import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 700 / 550, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    renderer.setSize(700, 550);
    renderer.setClearColor(0xffffff);
   // document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);   
    
/*
    controls.enableRotate = true; // Enables rotation
    controls.enablePan = false; // Disables panning
    controls.enableZoom = false; // Disables zooming
    controls.maxPolarAngle = Math.PI / 2; // Limits rotation to the X-Z plane
    controls.enableDamping = true; // Adds inertia to the rotation
    controls.dampingFactor = 0.05; // Sets the damping factor for the rotation
    controls.rotateSpeed = 0.5; // Sets the rotation speed
    controls.minPolarAngle = Math.PI / 4; // Limits rotation to the Y-Z plane
    controls.maxAzimuthAngle = Math.PI / 2; // Limits rotation to the positive X-axis
    controls.minAzimuthAngle = -Math.PI / 2; // Limits rotation to the negative X-axis
  


   
    

   
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
    const cube = new THREE.Mesh(geometry, material);
    
    scene.add(cube);
    
    
    cube.scale.x = 4;
    cube.scale.y = 4;

    const cubeLink = 'https://discourse.threejs.org/t/there-is-no-gltfloader-in-three-module/16117';
    let linkOpened = false;

    renderer.domElement.addEventListener('click', (event) => {
      // Get the mouse position in normalized device coordinates

      if (linkOpened) {
        return;
      }
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
      // Cast a ray from the camera to the mouse position
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
    
      // Check if the ray intersects with the cube
      const intersects = raycaster.intersectObject(cube);
    /*
      if (intersects.length > 0) {
       
        intersects[0].object.material.color.set(0xff0000);
      }
      */
     /*
      if (intersects.length > 0) {
       // window.open(cubeLink, '_blank');
        intersects[0].object.material.color.set(0xff0000);
        linkOpened = true;
      }
      

  
      if (intersects.length > 0) {
        const intersection = intersects[0];
        const boxGeometry = new THREE.BoxGeometry();
        const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const color = new THREE.Color(Math.random(), Math.random(), Math.random());
        const box = new THREE.Mesh(boxGeometry, boxMaterial);
        box.position.copy(intersection.point);
        box.material.color.set(color);
       // scene.add(box);
      }
    });
    

    camera.position.z = 5;
  
   
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onWindowResize);

    animate();
  
  }, []);

  return <canvas ref={canvasRef} />;
}

export default ThreeScene;
*/
}



