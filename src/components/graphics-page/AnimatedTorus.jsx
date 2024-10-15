import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import { colors } from '../../lib/colors';

const AnimatedTorus = ({ position, isDarkMode }) => {
  const mesh = useRef();
  const color = isDarkMode ? colors.dark.torusColor : colors.light.torusColor;

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.x = a * 0.5;  // Rotate along x-axis
    mesh.current.rotation.y = a * 0.8;  // Rotate along y-axis
    mesh.current.rotation.z = a;        // Rotate along z-axis
  });

  return (
    <Torus ref={mesh} args={[1, 0.6, 16, 100]} position={position}>
      <meshStandardMaterial attach="material" color={color} />
    </Torus>
  );
};

export default AnimatedTorus;
