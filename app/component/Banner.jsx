import React from 'react';
import Particle from '../particles/particles';
import { motion } from 'framer-motion';

const Banner = ({onWorkClick}) => {
  return (
    <div className='banner flex items-center justify-center w-full h-[500px] '>
      <Particle />
      <div className='newdiv flex flex-col items-center text-center'>
            <motion.div className='intro flex items-center justify-center'
    initial={{ x: -100, opacity: 0}}
    animate={{ x:0, opacity: 1}}
    transition={{ duration: 1.3 }}
  >
                Hello, I&apos;m &nbsp;
                <span style={{ color: '#ff4d5a' }}>Haris</span>.
            </motion.div>
            <motion.div className='intro' 
            initial={{ x: 100, opacity: 0}}
            animate={{ x:0, opacity: 1}}
            transition={{ duration: 1.3 }}>
              I&apos;m a full stack web developer
            </motion.div>
            <motion.button onClick={onWorkClick} className='view flex' 
            initial={{ y: 100, opacity: 0}}
            animate={{ y:0, opacity: 1}}
            transition={{ duration: 1, delay: 1 }}>View my work </motion.button>
        </div>
    </div>
  );
};

export default Banner;
