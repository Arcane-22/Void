import { useRef, useEffect } from 'react'
import UGetCardList from '../components/UGetCardList'
import lCharacter from '../assets/lcharacter.svg'
import arrow from '../assets/arrow.svg'

function WhatUGetSection() {
    const arrowRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    let lastY = window.scrollY

    const handleScroll = () => {
      if (!arrowRef.current) return

      if (window.scrollY > lastY) {
        arrowRef.current.style.transform = 'rotate(-180deg)' // scrolling down
      } else {
        arrowRef.current.style.transform = 'rotate(0deg)'   // scrolling up
      }

      lastY = window.scrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll) // cleanup
  }, [])

  return (
    <section className='whatuget-section'>
      <header className='whatuget-header'>
        <h2 className='get-heading'>What You Get Inside Void Teachers<span className='dot'>.</span></h2>
        <p>Void Teachers is built with a complete set of tools that handle identity creation, verification, and cross-platform access. Each feature works together 
        to create a unified system for educators and institutions.</p>
      </header>
      <div className='card-group'>
      <UGetCardList/>
      <img src= {lCharacter} alt='lady character image' className='lcharacter'/>
      <img src= {arrow} alt= 'arrow image' className='arrow' ref={arrowRef}/>
      </div>
    </section>
  )
}

export default WhatUGetSection