import { useState, useEffect } from 'react'
import '../../styles/Navbar.css'

const navLinks = [
    {
        label: 'Home', href: '#hero', color: '#e2e8f0',
        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
    },
    {
        label: 'About', href: '#about', color: '#2dd4bf',
        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>,
    },
    {
        label: 'Projects', href: '#projects', color: '#fb923c',
        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    },
    {
        label: 'Experience', href: '#experience', color: '#60a5fa',
        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
    },
    {
        label: 'Contact', href: '#contact', color: '#34d399',
        icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>,
    },
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
                        className={`navbar-link ${activeSection === l.href.slice(1) ? 'active' : ''}`}
                        style={{ '--ic': l.color }}
                        onClick={() => scrollTo(l.href.slice(1))}
                    >
                        <span className="navbar-link-icon">{l.icon}</span>
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
                        className={`navbar-link ${activeSection === l.href.slice(1) ? 'active' : ''}`}
                        style={{ '--ic': l.color }}
                        onClick={() => scrollTo(l.href.slice(1))}
                    >
                        <span className="navbar-link-icon">{l.icon}</span>
                        {l.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Navbar