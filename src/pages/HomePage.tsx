import React from 'react'
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
       
        <section className='introduction-section'>
          <aside className='left-icon-container'>
            <div>ICON</div>
            <div>ICON</div>
            <div>ICON</div>
          </aside>
          <article>
            <img src="" alt="" />
            <h2>title</h2>
            <p>text</p>
          </article>
          <aside className='right-icon-container'>
            <div>icon</div>
            <div>icon</div>
          </aside>
        </section>
    </main>
  )
}

export default HomePage
