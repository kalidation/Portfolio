import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import SocialMedia from "./SociaMedia";

interface IPorps {
  url: string;
  isAnimated: boolean;
}

const LinkedinCanvas = ({ url, isAnimated }: IPorps) => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        {isAnimated && (
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        )}
        <SocialMedia url={url} />
      </Suspense>
    </Canvas>
  );
};

export default LinkedinCanvas;
