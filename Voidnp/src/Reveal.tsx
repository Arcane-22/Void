import {useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

type RevealProps = {
    children: ReactNode
}

export default function Reveal({ children }: RevealProps) {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        observer.observe(element)

        return () => {
            observer.unobserve(element)
            observer.disconnect()
        }
    }, [])

    return (
        <div
            ref={ref}
            className={`reveal ${isVisible ? "active" : ""}`}
        >
            {children}
        </div>
    )
}