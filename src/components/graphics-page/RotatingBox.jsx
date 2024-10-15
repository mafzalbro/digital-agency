import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { colors } from '../../lib/colors';

const RotatingBox = ({ position, isDarkMode }) => {
  const mesh = useRef();
  const color = isDarkMode ? colors.dark.boxColor : colors.light.boxColor;

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    mesh.current.rotation.x = a;
    mesh.current.rotation.y = a;
  });

  return (
    <Box ref={mesh} args={[1.5, 2, 2]} position={position}>
      <meshStandardMaterial attach="material" color={color} />
    </Box>
  );
};

export default RotatingBox;
