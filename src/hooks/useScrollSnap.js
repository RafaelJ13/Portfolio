import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

function useScrollSnap(sectionIds) {
    const idsRef = useRef(sectionIds)
    idsRef.current = sectionIds

    useEffect(() => {
        const lenis = new Lenis()
        window.__lenis = lenis
        let locked = false
        let fallbackTimer = null

        const getSections = () =>
            idsRef.current.map(id => document.getElementById(id)).filter(Boolean)

        const snap = (direction) => {
            const sections = getSections()
            if (!sections.length) return

            const scrollY = window.scrollY
            const tops = sections.map(s => ({
                el: s,
                top: s.getBoundingClientRect().top + scrollY,
            }))

            const target = direction > 0
                ? tops.find(({ top }) => top > scrollY + 50)
                : [...tops].reverse().find(({ top }) => top < scrollY - 50)

            if (!target) return

            locked = true
            clearTimeout(fallbackTimer)
            fallbackTimer = setTimeout(() => { locked = false }, 2500)

            lenis.scrollTo(target.top, {
                duration: 1.4,
                easing: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
                onComplete: () => {
                    clearTimeout(fallbackTimer)
                    fallbackTimer = setTimeout(() => { locked = false }, 800)
                },
            })
        }

        const onWheel = (e) => {
            e.preventDefault()
            e.stopImmediatePropagation()
            if (!locked && Math.abs(e.deltaY) > 10) snap(e.deltaY)
        }

        const onKey = (e) => {
            if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return
            e.preventDefault()
            if (!locked) snap(e.key === 'ArrowDown' ? 1 : -1)
        }

        window.addEventListener('wheel', onWheel, { passive: false, capture: true })
        window.addEventListener('keydown', onKey)

        let rafId
        const raf = (time) => {
            lenis.raf(time)
            rafId = requestAnimationFrame(raf)
        }
        rafId = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(rafId)
            clearTimeout(fallbackTimer)
            window.removeEventListener('wheel', onWheel, { capture: true })
            window.removeEventListener('keydown', onKey)
            lenis.destroy()
            window.__lenis = null
        }
    }, [])
}

export default useScrollSnap
