import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as random from "maath/random/dist/maath-random.cjs";

const Stars = () => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(2000), { radius: 1.2 });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          sizeAttenuation={true}
          transparent
          size={0.006}
          depthWrite={false}
          color="#f272c8"
        />
      </Points>
    </group>
  );
};

export default Stars;
