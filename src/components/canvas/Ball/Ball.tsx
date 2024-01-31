import { Decal, Float, useTexture } from "@react-three/drei";

interface IProps {
  icon: string;
}

const Ball = (props: IProps) => {
  const { icon } = props;
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.8]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          flatShading
          polygonOffsetFactor={-5}
        />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.2]}
        />
      </mesh>
    </Float>
  );
};

export default Ball;
