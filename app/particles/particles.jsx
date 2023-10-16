import Particles from 'react-tsparticles'
import {loadFull} from 'tsparticles'
export default function particles() {
    const particlesInit = async (main) => {
    await loadFull(main)
    }
    const particlesloaded = (container) => {
    }
    return (
    <Particles className='z-[-30]'
    id = 'tsparticles'
    init = {particlesInit}
    loaded = {particlesloaded}

    options = {
        { background: {
        color: {
            value: "#1a1a1a",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#aaaaaa",
            distance: 140,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 600,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5},
        },
    },
    detectRetina: true,}
    }
    />
    );
}
