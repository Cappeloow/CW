import React from 'react'
import IntroductionSection from './components/IntroductionSection'
import { motion } from 'framer-motion';
import { elementFromRightToLeft, elementUp } from '../../animations/element';
const HomePage = () => {

  return (
    <main>
        <section className='main-section'>
          <div className='left-border-container'>
            <div className='title-section'>
              <motion.div 
                variants={elementUp} 
                initial="init" 
                animate="anim"  
              >
                <h1>Casper Wernersson</h1>
              </motion.div>
              <motion.div 
                variants={elementFromRightToLeft} 
                initial="init" 
                animate="anim"
              >
                <p>Web Developer / Visual Designer</p>
              </motion.div>

            </div>
          </div>
            <div className='slogan-section'>
              <span>
                “Let me tell you about myself.”
              </span>
            </div>
        </section>
        <IntroductionSection />
        
    </main>
  )
}

export default HomePage
