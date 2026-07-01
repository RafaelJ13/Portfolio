import { useEffect, useRef } from 'react'
import Lenis from 'lenis'

function useScrollSnap(sectionIds) {
    const idsRef = useRef(sectionIds)

    useEffect(() => {
        const lenis = new Lenis()
        window.__lenis = lenis
        let locked = false

        const getSections = () =>
            idsRef.current.map(id => document.getElementById(id)).filter(Boolean)

        const snap = (direction) => {
            const sections = getSections()
            if (!sections.length) return

            const scrollY = window.scrollY
            const target = direction > 0
                ? sections.find(s => s.offsetTop > scrollY + 50)
                : [...sections].reverse().find(s => s.offsetTop < scrollY - 50)

            if (!target) return

            locked = true
            const fallback = setTimeout(() => { locked = false }, 1600)

            lenis.scrollTo(target.offsetTop, {
                duration: 1.4,
                easing: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
                onComplete: () => {
                    locked = false
                    clearTimeout(fallback)
                },
            })
        }

        const onWheel = (e) => {
            // capture: true garante que disparamos antes do listener do Lenis (bubble)
            // stopImmediatePropagation impede o Lenis de processar o mesmo evento
            e.preventDefault()
            e.stopImmediatePropagation()
            if (!locked) snap(e.deltaY)
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
            window.removeEventListener('wheel', onWheel, { capture: true })
            window.removeEventListener('keydown', onKey)
            lenis.destroy()
            window.__lenis = null
        }
    }, [])
}

export default useScrollSnap
