import { useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF(`${import.meta.env.BASE_URL}planet/scene.gltf`);

  return (
    <primitive object={earth.scene} scale={3} position-y={0} rotation-y={0} />
  );
};

export default Earth;
