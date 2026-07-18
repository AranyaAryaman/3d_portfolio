import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import foxScene from "../assets/3d/fox.glb";

// Fox model with idle / walk / hit animations, driven by `currentAnimation`.
const Fox = ({ currentAnimation, ...props }) => {
  const group = useRef();
  const { scene, animations } = useGLTF(foxScene, "/draco/");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => action?.stop());
    const active = actions[currentAnimation];
    if (active) active.reset().fadeIn(0.3).play();

    return () => active?.fadeOut(0.3);
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(foxScene, "/draco/");

export default Fox;
