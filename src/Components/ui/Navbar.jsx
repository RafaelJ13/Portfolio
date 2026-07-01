import { useState, useEffect } from 'react'
import '../../styles/Navbar.css'

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]

const SNAP_EASING = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

function Navbar() {
    const [visible, setVisible] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const sections = ['about', 'projects', 'experience', 'contact']

        const checkScroll = () => {
            const about = document.getElementById('about')
            if (!about) return
            setVisible(window.scrollY >= about.offsetTop - 10)

            const mid = window.scrollY + window.innerHeight / 2
            let current = ''
            for (const id of sections) {
                const el = document.getElementById(id)
                if (el && el.offsetTop <= mid) current = id
            }
            setActiveSection(current)
        }

        window.addEventListener('scroll', checkScroll, { passive: true })
        checkScroll()
        return () => window.removeEventListener('scroll', checkScroll)
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (!el) return
        if (window.__lenis) {
            window.__lenis.scrollTo(el.offsetTop, { duration: 1.4, easing: SNAP_EASING })
        } else {
            window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        }
        setMenuOpen(false)
    }

    return (
        <nav className={`navbar ${visible ? 'navbar-visible' : ''}`}>
            <span className="navbar-logo">Rafael J.</span>

            <div className="navbar-links">
                {navLinks.map(l => (
                    <button
                        key={l.label}
                        className={activeSection === l.href.slice(1) ? 'active' : ''}
                        onClick={() => scrollTo(l.href.slice(1))}
                    >
                        {l.label}
                    </button>
                ))}
            </div>

            <button className="navbar-hamburger" onClick={() => setMenuOpen(o => !o)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                    {menuOpen
                        ? <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>
                        : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>
                    }
                </svg>
            </button>

            <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
                {navLinks.map(l => (
                    <button
                        key={l.label}
                        className={activeSection === l.href.slice(1) ? 'active' : ''}
                        onClick={() => scrollTo(l.href.slice(1))}
                    >
                        {l.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Navbar