import { useEffect } from 'react'
import Lenis from 'lenis'

function useScrollSnap(sectionIds) {
    useEffect(() => {
        const lenis = new Lenis()
        const sections = sectionIds.map(id => document.getElementById(id))
        let isScrolling = false

        const scrollTo = (e, direction) => {
            if (isScrolling) return
            isScrolling = true

            const current = sections.reduce((closest, s) => {
                if (!s) return closest
                const top = Math.abs(s.getBoundingClientRect().top)
                const closestTop = Math.abs(closest.getBoundingClientRect().top)
                return top < closestTop ? s : closest
            })

            const index = sections.indexOf(current)
            const next = direction > 0 ? sections[index + 1] : sections[index - 1]

            if (next) {
                lenis.scrollTo(next.offsetTop, {
                    duration: 1.2,
                    onComplete: () => { isScrolling = false }
                })
            } else {
                isScrolling = false
            }
        }

        const handleWheel = (e) => {
            e.preventDefault()
            scrollTo(e, e.deltaY)
        }


        const handleKey = (e) => {
            if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return
            e.preventDefault()
            scrollTo(e, e.key === 'ArrowDown' ? 1 : -1)
        }

        window.addEventListener('wheel', handleWheel, { passive: false })
        window.addEventListener('keydown', handleKey, { passive: false })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        return () => {
            window.removeEventListener('wheel', handleWheel)
            window.removeEventListener('keydown', handleKey)
            lenis.destroy()
        }
    }, [sectionIds])
}

export default useScrollSnap