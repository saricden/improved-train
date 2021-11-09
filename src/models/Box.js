import { useFrame } from "@react-three/fiber";
import { Interactive } from "@react-three/xr";
import { useRef, useState } from "react";

export default function Model(props) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.02;
    ref.current.rotation.y += 0.01;
  });

  return (
    <Interactive
      onHover={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <mesh
        {...props}
        ref={ref}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshPhongMaterial color={isHovered ? 'green' : 'orange'} />
      </mesh>
    </Interactive>
  );
}