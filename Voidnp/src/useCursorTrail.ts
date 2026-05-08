import { useEffect } from "react"

export function useCursorTrail() {
  useEffect(() => {
    const NUM = 20
    const BASE_COLOR = [255, 140, 0]
    const EDGE = 120
    const INTERACTIVE = "button, a, [role='button'], input, select, textarea, label"

    const coords = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const dots: Array<{ el: HTMLDivElement; x: number; y: number }> = []
    let hidden = false
    let visibility = 1

    for (let i = 0; i < NUM; i++) {
      const d = document.createElement("div")
      d.style.cssText = `
        height: 20px; width: 20px; border-radius: 50%;
        position: fixed; top: 0; left: 0;
        pointer-events: none; z-index: 99999;
        background: rgb(${BASE_COLOR[0]}, ${BASE_COLOR[1]}, ${BASE_COLOR[2]});
        will-change: transform, opacity;
      `
      document.body.appendChild(d)
      dots.push({ el: d, x: coords.x, y: coords.y })
    }

    const onMouseMove = (e: MouseEvent) => {
      coords.x = e.clientX
      coords.y = e.clientY
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(INTERACTIVE)) hidden = true
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest(INTERACTIVE)) hidden = false
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseover", onMouseOver)
    window.addEventListener("mouseout", onMouseOut)

    const W = window.innerWidth
    const H = window.innerHeight

    const edgeAlpha = (x: number, y: number) => {
      const dist = Math.min(x, W - x, y, H - y)
      return Math.max(0, Math.min(1, dist / EDGE))
    }

    let rafId: number
    const animate = () => {
      let x = coords.x
      let y = coords.y
      const alpha = edgeAlpha(x, y)

      const target = hidden ? 0 : 1
      visibility += (target - visibility) * 0.08

      dots.forEach((dot, i) => {
        dot.el.style.left = x - 10 + "px"
        dot.el.style.top = y - 10 + "px"

        const trailFade = (NUM - i) / NUM
        dot.el.style.opacity = String(trailFade * alpha * visibility)
        dot.el.style.transform = `scale(${trailFade * 0.9 + 0.1})`
        dot.el.style.background = `rgb(${BASE_COLOR[0]}, ${BASE_COLOR[1]}, ${BASE_COLOR[2]})`

        dot.x = x
        dot.y = y
        const next = dots[i + 1] || dots[0]
        x += (next.x - x) * 0.3
        y += (next.y - y) * 0.3
      })

      rafId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseover", onMouseOver)
      window.removeEventListener("mouseout", onMouseOut)
      dots.forEach((dot) => dot.el.remove())
    }
  }, [])
}