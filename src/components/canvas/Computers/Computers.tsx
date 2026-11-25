import { useGLTF } from "@react-three/drei";

interface IProps {
  isMobile: boolean;
}

const Computers = (props: IProps) => {
  const { isMobile } = props;
  const computer = useGLTF(`${import.meta.env.BASE_URL}desktop_pc/scene.gltf`);

  return (
    <mesh>
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
