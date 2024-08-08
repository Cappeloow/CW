import React from 'react'
import IntroductionSection from './components/IntroductionSection'
import { motion } from 'framer-motion';
import { elementFromRightToLeft, elementUp } from '../../animations/element';
import ProfileHeader from '../../components/ProfileHeader';
const HomePage = () => {

  return (
    <main>
        <section className='main-section'>
          <div className='left-main-container'>
            <ProfileHeader/>
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
