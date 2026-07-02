import { useState, useEffect } from 'react'

const SNAP_EASING = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const about = document.getElementById('about')
            setVisible(!!about && window.scrollY >= about.offsetTop - 10)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const handleClick = () => {
        if (window.__lenis) {
            window.__lenis.scrollTo(0, { duration: 1.4, easing: SNAP_EASING })
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 200,
                opacity: visible ? 1 : 0,
                pointerEvents: visible ? 'all' : 'none',
                transform: visible ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                background: 'rgba(255,255,255,0.04)',
                border: '0.5px solid #2a2a2a',
                borderRadius: '8px',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.borderColor = '#444'
            }}
            onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = '#2a2a2a'
            }}
        >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6"/>
            </svg>
        </button>
    )
}

export default BackToTop
