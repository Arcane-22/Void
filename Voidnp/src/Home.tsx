import { useEffect } from "react"

import Footer from "./shared/Footer"
import NavBar from "./shared/NavBar"

import HeroSection from "./sections/HeroSection"
import SingleIdentity from "./sections/SingleIdentity"
import JourneySection from "./sections/JourneySection"
import WhySection from "./sections/WhySection"
import WhatUGetSection from "./sections/WhatUGetSection"
import BuildSection from "./sections/BuildSection"

import { useCursorTrail } from "./useCursorTrail"
import Reveal from "./Reveal"

export default function Home() {
    useCursorTrail()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <NavBar />

            <Reveal>
                <HeroSection />
            </Reveal>
            <div className="container">
                <Reveal>
                    <SingleIdentity />
                </Reveal>

                <Reveal>
                    <JourneySection />
                </Reveal>

                <Reveal>
                    <WhySection />
                </Reveal>

                <Reveal>
                    <WhatUGetSection />
                </Reveal>

                <Reveal>
                    <BuildSection />
                </Reveal>
            </div>

            <Footer />
        </>
    )
}