import Footer from "./shared/Footer"
import NavBar from "./shared/NavBar"
import HeroSection from "./sections/HeroSection"
import SingleIdentity from "./sections/SingleIdentity"
import JourneySection from "./sections/JourneySection"
import WhySection from "./sections/WhySection"
import WhatUGetSection from "./sections/WhatUGetSection"
import BuildSection from "./sections/BuildSection"
import { useCursorTrail } from "./useCursorTrail"

function Home() {
    useCursorTrail()
  return (
    <>
    <div className="container">
    <NavBar/>
    <HeroSection/>
    <SingleIdentity/>
    <JourneySection/>
    <WhySection/>
    <WhatUGetSection/>
    <BuildSection/>
    </div>
    <Footer/>
    </>
  )
}

export default Home