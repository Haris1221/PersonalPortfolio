'use client'
import React from 'react'
import {motion} from 'framer-motion'
import profile from '../img/profile.png' 
import Image from 'next/image'
import Particle from '../particles/particles'
import react from '../img/react.png'
import node from '../img/node.png'
import mongo from '../img/mongo.png'
import js from '../img/js.png'
import ex from '../img/ex.png'
import html from '../img/html.png'
import css from '../img/css.png'
import next from '../img/Next.js.png'
import git from '../img/git.png'


export default function Page() {

  return (
    <main>
        <div className='banner flex items-center justify-center w-full  '>
          <Particle />
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
            <motion.a className='view flex' 
            initial={{ y: 100, opacity: 0}}
            animate={{ y:0, opacity: 1}}
            transition={{ duration: 1, delay: 1 }}>View my work </motion.a>
        </div>
            <div className='navitems flex justify-end'>
              <p className='text'>home</p> <p className='text'>About</p> <p className='text'>Projects</p> <p className='text'>Contact</p>
        </div>
        <div className='about flex '>
          <h1 className='about__about'>About</h1>
          <div className='container'>
            <motion.div className='left' 
            initial={{ x:-200, opacity: 0 }}
            whileInView={{ x:0, opacity: 1 }}
            viewport={{ once: true }}
            transition={ {duration: 1, delay:1}}>
              <Image className='img' src={profile} alt='s'  />
              <p className='about__text'>Really passionate and highly driven who runs by a single code, discipline. I&apos;m A fullstack developer who likes to build things and make them look pleasing to the eye. i like spending time on my computer whether it be for work or playing games with a bunch of friends. mostly the second part though.</p>
            </motion.div>
            <motion.div className='right flex'  
            initial={{ x: 200, opacity: 0}}
            animate={{ x:0, opacity: 1}}
            transition={{ duration: 1}}>
              <div className='skill'>
                <div className='content'>
                <Image className='skills__img' src={react} alt='x'/>
                <p className='skills__name'>React</p>
                </div>
                <div className='content'>
                <Image className='skills__img' src={node} alt='x'/>
                <p className='skills__name'>Node.Js</p>
                </div>
                <div className='content'>
                <Image className='skills__img' src={mongo} alt='x'/>
                <p className='skills__name'>MongoDB</p>
                </div>
              </div>
              <div className='skill'>
              <div className='content'>
              <Image className='skills__img' src={js} alt='x'/>
                <p className='skills__name'>JavaScript</p>
              </div>
                <div className='content'>
                <Image className='skills__img' src={ex} alt='x'/>
                <p className='skills__name'>Express.Js</p>
                </div>
                <div className='content'>
                <Image className='skills__img' src={html} alt='x'/>
                <p className='skills__name'>HTML</p>
                </div>
                <div className='content'>
                <Image className='skills__img' src={css} alt='x'/>
                <p className='skills__name'>CSS</p>
                </div>
              </div>
              <div className='skill'>
              <div className='content'>
              <Image className='skills__img' src={next} alt='x'/>
                <p className='skills__name'>Next.Js</p>
              </div>
                <div className='content'>
                <Image className='skills__img' src={git} alt='x'/>
                <p className='skills__name'>Git</p>
                </div>
                <div className='content'>
                <Image className='skills__img' src={mongo} alt='x'/>
                <p className='skills__name'>MongoDB</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div>Projects</div>
          <div>Projects</div>
          <div>Projects</div>
          <div>Projects</div>
          <div>Projects</div>
          <div>Projects</div>
          <div>Projects</div>
          <div>Projects</div>
          <div>Projects</div>
          <div>Projects</div>
        </div>
    </main>
  )
}
