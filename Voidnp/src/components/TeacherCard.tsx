import Hero from '../assets/hero-image.svg'
import VerifiedCard from './VerifiedCard'

function TeacherCard({ className = '' }: { className?: string }) {
  return (
    <figure className={className}>
      <img src={Hero} alt="Gaurav Kumar Shiwakoti" className='hero-image' />
      <div className="overlay" id="overlay-left"></div>
      <div className="overlay" id="overlay-right"></div>
      <VerifiedCard />
      <figcaption className='caption'>
        <strong>Gaurav Kumar Shiwakoti</strong>
        <p className='tag'>Void Teacher</p>
      </figcaption>
    </figure>
  )
}

export default TeacherCard