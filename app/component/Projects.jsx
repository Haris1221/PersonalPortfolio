import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import shopflix from '../img/shopflix.png'
import shirt from '../img/3D.png'
import sitegram from '../img/sitegram.png'
import refine from '../img/refine.gif'


const Projects = () => {
  return (
    <div className='projects'>
        <h1 className='section__intro'>Projects</h1>
            <div className='project-left'>
              <motion.a  className='a'
              whileHover={{scale:0.95}}
              transition={{duration:0.2}}
              >
                <div className='image__container__left'>
                  <Image src={refine} alt='s' className='image__image'/>
                </div>
              </motion.a>
              <div className='project__info flex'>
                <h3 className='project__title'>Refine <br/> Dashboard app </h3>
                <p className='p__tag'>Build your React-based internal tools, admin panels, dashboards, B2B apps with flexibility in mind.</p>
                <Link className='a__projects' href='https://refine-dashboard-two.vercel.app/'>Live App</Link>
                <Link className='a__projects' href='https://github.com/Haris1221/RefineDashboard'>Learn More</Link>
              </div>
            </div>
            <div className='project-right'>
              <div className='project__info flex'>
                <h3 className='project__title'>3DShirt <br/> 3D customizer website </h3>
                <p className='p__tag'> Apply any color to the 3D shirt/swag for personalized styling.</p>
                <Link className='a__projects' href='https://3dshirt-nine.vercel.app/'>Live App</Link>
                <Link className='a__projects' href='https://github.com/Haris1221/3DShirt'>Learn More</Link>
              </div>
              <motion.a  className='a'
              whileHover={{scale:0.95}}
              transition={{duration:0.2}}>
                <div className='image__container__right'>
                  <Image src={shirt} alt='s' className='image__image'/>
                </div>
              </motion.a>
            </div>
            <div className='project-left'>
              <motion.a  className='a'
              whileHover={{scale:0.95}}
              transition={{duration:0.2}}>
                <div className='image__container__left'>
                  <Image src={sitegram} alt='s' className='image__image'/>
                </div>
              </motion.a>
              <div className='project__info flex'>
                <h3 className='project__title'>Sitegram <br/> Social media app </h3>
                <p className='p__tag'>FullStack social media Instagram like app. made using Vite and Appwrite.</p>
                <Link className='a__projects' href='https://sitegram.vercel.app/'>Live App</Link>
                <Link className='a__projects' href='https://github.com/Haris1221/SiteGram'>Learn More</Link>
              </div>
            </div>
            <div className='project-right'>
              <div className='project__info flex'>
                <h3 className='project__title'>ShopFlix <br/> Video straming service app</h3>
                <p className='p__tag'> FullStack video streaming service app built with React, Node.js, Express.js, and MongoDB </p>
                <p>Disclaimer: The website has been struck for copyright but it is fully safe to explore.(guess it was too close to being real :P)</p>
                <Link className='a__projects' href='https://shopflix.onrender.com/'>Live App</Link>
                <Link className='a__projects' href='https://github.com/Haris1221/ShopFlix-haris'>Learn More</Link>
              </div>
              <motion.a  className='a'
              whileHover={{scale:0.95}}
              transition={{duration:0.2}}>
                <div className='image__container__right'>
                  <Image src={shopflix} alt='s' className='image__image'/>
                </div>
              </motion.a>
            </div>
    </div>
  );
};

export default Projects;
