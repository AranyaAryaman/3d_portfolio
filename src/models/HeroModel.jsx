import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  Center,
  PresentationControls,
  useGLTF,
} from "@react-three/drei";

import islandScene from "../assets/3d/island.glb";
import Loader from "../components/Loader";

// Slowly auto-rotates its children.
const Spin = ({ children, speed = 0.22 }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });
  return <group ref={ref}>{children}</group>;
};

const Island = () => {
  // island.glb is Draco-compressed — decode with the locally hosted decoder.
  const { scene } = useGLTF(islandScene, "/draco/");
  return (
    <PresentationControls
      global
      snap
      config={{ mass: 1, tension: 170, friction: 26 }}
      rotation={[0.08, 0, 0]}
      polar={[-0.25, 0.35]}
      azimuth={[-0.7, 0.7]}
    >
      {/* fit once to frame the model regardless of its native size */}
      <Bounds fit margin={1.15}>
        <Center>
          <Spin>
            <primitive object={scene} />
          </Spin>
        </Center>
      </Bounds>
    </PresentationControls>
  );
};

const HeroModel = () => (
  <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 38 }}>
    <ambientLight intensity={1.1} />
    <hemisphereLight intensity={0.6} groundColor="#1d1d21" />
    <directionalLight position={[6, 8, 5]} intensity={2.2} />
    <directionalLight position={[-6, 2, -4]} intensity={0.9} color="#c9a24b" />
    <Suspense fallback={<Loader />}>
      <Island />
    </Suspense>
  </Canvas>
);

useGLTF.preload(islandScene, "/draco/");

export default HeroModel;
