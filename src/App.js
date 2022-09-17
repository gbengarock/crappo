import React, { useEffect, useRef } from 'react';
import Coin from './components/Coin';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Stat from './components/Stat';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


function App() {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef(null)
  useEffect(() => {
    const element = ref.current;
    gsap.to(
      element.querySelector('.heroimg'), {
        rotation: "1800", 
        duration:3, 
        scale: 1,
        ease: 'back' 
      },
      {        
        scrollTrigger: {
          trigger: element.querySelector('.heroimg'),
          start: 'top top',
          end: 'bottom center',
          scrub: true
        }
      }
      );
    
  });  

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.coinpage'), {
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.coinpage'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.floatCard'), {
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.floatCard'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.why'), {
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.why'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.content'), {
        y: -10,
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.content'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.statImg'), {
        y: -10,
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.statImg'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.statTxt'), {
        y: -10,
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.statTxt'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.statImg2'), {
        y: -10,
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.statImg2'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.statImg3'), {
        y: -10,
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.statImg3'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.newsletter'), {
        y: -10,
        scale: 0.5, 
        opacity: 0,
        ease: 'none'
      },
      {
        opacity: 1,
        scale: 1,
        duration:3,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.newsletter'),
          start: "top bottom",
          end: "bottom center",
          scrub: true
        }
      }
      );
    
  });
  // gsap.to('.heroimg', {rotation: 360, duration: 2, ease: "bounce.out"});
  // gsap.from('.heroimg', {duration:3, rotation:360})

  return (
    <div className='App' ref={ref}>
       <Navbar />
       <Hero />
       <Coin />
       <Stat />
       <Newsletter />
       <Footer />
    </div>
  );
}

export default App;
