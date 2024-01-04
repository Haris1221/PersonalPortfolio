'use client'
import React from 'react'
import Banner from '../component/Banner'
import Navigation from '../component/Nav'
import About from '../component/About'
import Projects from '../component/Projects'
import ContactSection from '../component/ContatcLayout'
import Footer from '../component/Footer'

export default function Page() {

  function scroll(e){
    e.preventDefault()
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
  function work(e){
    e.preventDefault()
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }
  function about(e){
    e.preventDefault()
    window.scrollTo({top: 1000, behavior: 'smooth'})
  }
  function contact(e){
    e.preventDefault()
    window.scrollTo({top: 5000, behavior: 'smooth'})
  }

  return (
    <main className='main'>
      <Banner onWorkClick={work}/>
      <Navigation onWorkClick={work} onAboutClick={about} onContactClick={contact} onScrollClick={scroll}/>
      <About />
      <Projects />
      <ContactSection />
      <Footer onScrollClick={scroll}/>
    </main>
  )
}
