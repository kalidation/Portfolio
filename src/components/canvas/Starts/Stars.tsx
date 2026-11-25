import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { useRef, useState } from "react";
import type { Points as PointsImpl } from "three";

const Stars = () => {
  const ref = useRef<PointsImpl>(null);
  const [sphere] = useState(
    () =>
      random.inSphere(new Float32Array(2001), {
        radius: 1.2,
      }) as Float32Array,
  );

  useFrame((_state, delta) => {
    if (!ref.current) return;
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
