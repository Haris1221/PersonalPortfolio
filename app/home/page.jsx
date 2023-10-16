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
import test from '../img/test.png'
import shopflix from '../img/shopflix.png'
import onderland from '../img/onderland.png'
import tweetar from '../img/tweetar.png'
import Link from 'next/link'
import Contact from '../contact/contact'

export default function Page() {

  return (
    <main>
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
            <motion.a className='view flex' 
            initial={{ y: 100, opacity: 0}}
            animate={{ y:0, opacity: 1}}
            transition={{ duration: 1, delay: 1 }}>View my work </motion.a>
        </div>
        </div>
            <div className='navitems flex justify-end'>
              <p className='text'>home</p> <p className='text'>About</p> <p className='text'>Projects</p> <p className='text'>Contact</p>
        </div>
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
          <div className='projects'>
            <h1 className='section__intro'>Projects</h1>
            <div className='project-left'>
              <motion.a href="" className='a'
              whileHover={{scale:0.95}}
              transition={{duration:0.2}}
              >
                <div className='image__container__left'>
                  <Image src={test} alt='s' className='image__image'/>
                </div>
              </motion.a>
              <div className='project__info flex'>
                <h3 className='project__title'>BestMeat <br/> Online Restaurant App </h3>
                <p className='p__tag'>FullStack restaurant app built with Next.js and supabase. fully customized API.</p>
                <Link className='a__projects' href='https://bestmeat.vercel.app/home'>Live App</Link>
                <Link className='a__projects' href={'/home'}>Learn More</Link>
              </div>
            </div>
            <div className='project-right'>
              <div className='project__info flex'>
                <h3 className='project__title'>ShopFlix <br/> Video straming service app</h3>
                <p className='p__tag'> FullStack video streaming service app built with React, Node.js, Express.js, and MongoDB </p>
                <Link className='a__projects' href={'/home'}>Live App</Link>
                <Link className='a__projects' href={'/home'}>Learn More</Link>
              </div>
              <motion.a href="" className='a'
              whileHover={{scale:0.95}}
              transition={{duration:0.2}}>
                <div className='image__container__right'>
                  <Image src={shopflix} alt='s' className='image__image'/>
                </div>
              </motion.a>
            </div>
            <div className='project-left'>
              <motion.a href="" className='a'
              whileHover={{scale:0.95}}
              transition={{duration:0.2}}>
                <div className='image__container__left'>
                  <Image src={onderland} alt='s' className='image__image'/>
                </div>
              </motion.a>
              <div className='project__info flex'>
                <h3 className='project__title'>Onderland <br/> Food journal app </h3>
                <p className='p__tag'>FullStack web application uses CRUD to create a food journal allowing the user to track their meals throughout the day.</p>
                <Link className='a__projects' href={'/home'}>Live App</Link>
                <Link className='a__projects' href={'/home'}>Learn More</Link>
              </div>
            </div>
            <div className='project-right'>
              <div className='project__info flex'>
                <h3 className='project__title'>Tweetar <br/> Social media app </h3>
                <p className='p__tag'>FullStack social media application built with Node.js, Express.js, and MongoDB.</p>
                <Link className='a__projects' href={'/home'}>Live App</Link>
                <Link className='a__projects' href={'/home'}>Learn More</Link>
              </div>
              <motion.a href="" className='a'
              whileHover={{scale:0.95}}
              transition={{duration:0.2}}>
                <div className='image__container__right'>
                  <Image src={tweetar} alt='s' className='image__image'/>
                </div>
              </motion.a>
            </div>
            <div className='getInTouch'>
                <h1 className='section__intro'>Contact</h1>
                <p className='about__text'>Have a question or want to work together? Leave your details and I&apos;ll get back to you as soon as possible.</p>
                <Contact />
                </div>
                <footer className='footer'>
                  <a href="">
                    <div className='return'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24"><title></title><path fill="#fafafa" d="M17.707 10.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414zM17.707 17.293l-5-5c-0.391-0.391-1.024-0.391-1.414 0l-5 5c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l4.293-4.293 4.293 4.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"></path></svg>
                    </div>
                  </a>
                  <div>socials</div>
                  <p>ALHARIS ELHASSAN ©2023</p>
                </footer>
          </div>
    </main>
  )
}
