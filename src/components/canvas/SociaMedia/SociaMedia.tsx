import { useGLTF } from "@react-three/drei";

interface IProps {
  url: string;
}

const SocialMedia = ({ url }: IProps) => {
  const three_d_object = useGLTF(url);

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <primitive object={three_d_object.scene} scale={1.5} />
    </mesh>
  );
};

export default SocialMedia;
