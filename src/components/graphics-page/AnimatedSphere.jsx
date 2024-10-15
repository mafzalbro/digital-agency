import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { colors } from '../../lib/colors';

const AnimatedSphere = ({ position, isDarkMode }) => {
  const mesh = useRef();
  const color = isDarkMode ? colors.dark.sphereColor : colors.light.sphereColor;

  useFrame(({ clock }) => {
    const a = Math.sin(clock.getElapsedTime()) * 0.5 + 1;
    mesh.current.scale.set(a, a, a);
  });

  return (
    <Sphere ref={mesh} args={[1, 32, 32]} position={position}>
      <meshStandardMaterial attach="material" color={color} />
    </Sphere>
  );
};

export default AnimatedSphere;
