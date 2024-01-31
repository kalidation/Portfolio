import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../../common/Loader";
import SocialMedia from "./SociaMedia";
import { OrbitControls } from "@react-three/drei";

interface IPorps {
  url: string;
  isAnimated: boolean;
}

const LinkedinCanvas = ({ url, isAnimated }: IPorps) => {
  return (
    <Canvas>
      <Suspense fallback={<CanvasLoader />}>
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
