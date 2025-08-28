import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from "@tsparticles/slim";
import  { useCallback } from "react";

const Particles_Container = () => {

  initParticlesEngine(async (engine) => {
    await loadSlim(engine);
  } )

 const particlesLoaded = useCallback(async () => {}, []);

  return <Particles
          id='tsparticles'
          className='w-full h-full absolute translate-z-0'
          particlesLoaded={particlesLoaded}
          options={{
            fullscreen: {enable : false},
            background: {
              color: { value: '' }
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                  mode: 'push'
                },
                onHover: {
                  enable: true,
                  mode: 'repulse'
                },
                /*resize: true*/
              },
              modes: {
                push: {
                  quantity: 90
                },
                repulse: {
                  distance: 200,
                  duration: 0.4
                }
              }
            },
            particles: {
              color: {
                value: '#4299e1'
              },
              links: {
                color: '#080708',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
              },
              collisions: {
                enable: true
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce'
                },
                random: false,
                speed: 1,
                straight: false
              },
              number: {
                density: {
                  enable: true,
                  /*area: 1080*/
                },
                value: 80
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle'
              },
              size: {
                value: {min: 1, max: 5}
              }
            },
            detectRetina: true
          }}
    />
}

export default Particles_Container;