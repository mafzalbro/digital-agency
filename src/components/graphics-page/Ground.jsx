import { Plane, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Ground = () => {
  const texture = useTexture('/ground.png');
  const meshRef = useRef();

  // Use useFrame to animate the texture offset
  useFrame(() => {
    if (meshRef.current) {
      // Move the texture offset to create a scrolling effect
      texture.offset.y -= 0.005; // Adjust the speed to make it slower
    }
  });

  return (
    <Plane ref={meshRef} args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
      <meshStandardMaterial attach="material" map={texture} />
    </Plane>
  );
};

export default Ground;
