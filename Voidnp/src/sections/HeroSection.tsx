import React from 'react'
import Hero from '../assets/hero-image.svg'
import VerifiedCard from '../components/VerifiedCard'

function HeroSection() {
  return (
        <section className='hero-section'>
            <div className='hero-text'>
                <h2 className='hero-heading'>One Login<span className="dot">.</span> One Verified Teacher
                 Identity<span className="dot">.</span>
                 Everywhere<span className="dot">.</span></h2>
                <p>Create Your Void Teacher Profile Once, Verify Your Credentials, And Use it Across BetterSchool, 
                Trackynn, Hirynn And All Future Platform Without Repeating Verification.
                </p>
            </div>
            <figure>
                <img src={Hero} alt="hero section image" className='hero-image'/>
                <div className="overlay" id="overlay-left"></div>
                <div className="overlay" id="overlay-right"></div>
                <div>
                    <VerifiedCard/>
                </div>
                <figcaption className='caption'>
                    <strong>Gaurav Kumar Shiwakoti</strong>
                    <p className='tag'>Void Teacher</p>
                </figcaption>
            </figure>
        </section>
  )
}

export default HeroSection