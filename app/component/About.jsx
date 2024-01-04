import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import profile from '../img/profile.png';
import react from '../img/react.png'
import node from '../img/node.png'
import mongo from '../img/mongo.png'
import js from '../img/js.png'
import ex from '../img/ex.png'
import html from '../img/html.png'
import css from '../img/css.png'
import next from '../img/Next.js.png'
import git from '../img/git.png'

const About = () => {
  return (
    <div className='about flex '>
        <h1 className='section__intro'>About</h1>
          <div className='container'>
            <motion.div className='left' 
            initial={{ x:-400, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 0.3}}>
              <Image className='img' src={profile} alt='s'  />
              <p className='about__text'>Really passionate and highly driven who runs by a single code, discipline. I&apos;m A fullstack developer who likes to build things and make them look pleasing to the eye. i like spending time on my computer whether it be for work or playing games with a bunch of friends. mostly the second part though.</p>
            </motion.div>
            <div className='right flex'>
              <div className='skill'>
                <motion.div className='content' 
                initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 1.7}}>
                <Image className='skills__img' src={react} alt='x'/>
                <p className='skills__name'>React</p>
                </motion.div>
                <motion.div className='content' 
                initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 1.5}}>
                <Image className='skills__img' src={node} alt='x'/>
                <p className='skills__name'>Node.Js</p>
                </motion.div>
                <motion.div className='content' 
                initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 1.3}}>
                <Image className='skills__img' src={mongo} alt='x'/>
                <p className='skills__name'>MongoDB</p>
                </motion.div>
              </div>
              <div className='skill'>
              <motion.div className='content' 
              initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 0.3}}>
              <Image className='skills__img' src={js} alt='x'/>
                <p className='skills__name'>JavaScript</p>
              </motion.div>
                <motion.div className='content' 
                initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 1.9}}>
                <Image className='skills__img' src={ex} alt='x'/>
                <p className='skills__name'>Express.Js</p>
                </motion.div>
                <motion.div className='content' 
                initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 2.1}}>
                <Image className='skills__img' src={html} alt='x'/>
                <p className='skills__name'>HTML</p>
                </motion.div>
                <motion.div className='content' 
                initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 1.1}}>
                <Image className='skills__img' src={css} alt='x'/>
                <p className='skills__name'>CSS</p>
                </motion.div>
              </div>
              <div className='skill'>
              <motion.div className='content' 
              initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 0.5}}>
              <Image className='skills__img' src={next} alt='x'/>
                <p className='skills__name'>Next.Js</p>
              </motion.div>
                <motion.div className='content' 
                initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 0.7}}>
                <Image className='skills__img' src={git} alt='x'/>
                <p className='skills__name'>Git</p>
                </motion.div>
                <motion.div className='content' 
                initial={{ opacity: 0 }}
            whileInView={{opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay: 0.9}}>
                <Image className='skills__img' src={mongo} alt='x'/>
                <p className='skills__name'>MongoDB</p>
                </motion.div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default About;
