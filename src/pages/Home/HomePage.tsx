import React from 'react'
import IntroductionSection from './components/IntroductionSection'
const HomePage = () => {
  return (
    <main>
        <section className='main-section'>
          <div className='left-border-container'>
            <div className='title-section'>
              <h1>Casper Wernersson</h1>
              <p>Web Developer / Visual Designer</p>
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
