import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

interface IProps {
  isMobile: boolean;
}

const Computers = (props: IProps) => {
  const { isMobile } = props;
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const meshRef = useRef<Mesh>(null!);

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={1} groundColor="black" />
      <pointLight intensity={4} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={10}
        shadow-mapSize={1024}
        castShadow
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.55 : 0.75}
        position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export default Computers;
