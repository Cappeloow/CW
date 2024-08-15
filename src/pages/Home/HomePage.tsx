import React from 'react'
import IntroductionSection from './components/IntroductionSection'
import { motion } from 'framer-motion';
import { elementFromRightToLeft, elementUp } from '../../animations/element';
import ProfileHeader from '../../components/ProfileHeader';
const HomePage = () => {

  return (
    <main className='home'>
      <div className='main-content'>
        <section className='main-section'>
          <div className='left-main-container'>
            <ProfileHeader/>
          </div>  
        </section>
        <IntroductionSection />
      </div>
        <div className='slogan-section'>
        </div>
    </main>
  )
}

export default HomePage
