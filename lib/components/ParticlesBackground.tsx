import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {
  Engine,
  IOptions,
  RecursivePartial,
} from "tsparticles-engine";

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options: RecursivePartial<IOptions> = {
    particles: {
      color: {
        // Light orange
        value: "#e67a4e",
      },
      number: {
        value: 40, // set the number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      size: {
        value: 20, // set the size of the particles
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 10,
          sync: false,
        },
      },
      line_linked: {
        enable: false, // disable linking between particles
      },
      move: {
        enable: true, // enable movement of particles
        speed: 2, // set the speed of the particles
        random: true,
        direction: "none",
        out_mode: "out",
      },
    },
  };

  return (
    <div className="absolute blur-md h-screen w-screen">
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
}
