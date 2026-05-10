import HeroVideo from '../assets/hero.mp4'
import TeacherCard from '../components/TeacherCard'

function HeroSection() {
  return (
        <section className='hero-section'>
            <video
                autoPlay
                loop
                muted
                playsInline
                className='hero-video'
            >
                <source src={HeroVideo} type='video/mp4' />
            </video>

            <div className='hero-overlay'></div>
            <div className='hero-inner'>
                <div className='hero-text'>
                    <h2 className='hero-heading'>One Login<span className="dot">.</span> One Verified Teacher
                    Identity<span className="dot">.</span>
                    Everywhere<span className="dot">.</span></h2>
                    <p>Create Your Void Teacher Profile Once, Verify Your Credentials, And Use it Across BetterSchool, 
                    Trackynn, Hirynn And All Future Platform Without Repeating Verification.
                    </p>
                </div>
                <TeacherCard/>
            </div>
        </section>
  )
}

export default HeroSection