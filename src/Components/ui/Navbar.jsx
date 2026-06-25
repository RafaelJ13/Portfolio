import { useState, useEffect } from 'react'
import '../../styles/Navbar.css'

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

function Navbar() {
    const [visible, setVisible] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const checkScroll = () => {
            const about = document.getElementById('about')
            if (!about) return
            setVisible(window.scrollY >= about.offsetTop - 10)
        }

        window.addEventListener('scroll', checkScroll, { passive: true })
        checkScroll()
        return () => window.removeEventListener('scroll', checkScroll)
    }, [])

    const scrollTo = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false)
    }

    return (
        <nav className={`navbar ${visible ? 'navbar-visible' : ''}`}>
            <span className="navbar-logo">Rafael J.</span>

            <div className="navbar-links">
                {navLinks.map(l => (
                    <button key={l.label} onClick={() => scrollTo(l.href.slice(1))}>
                        {l.label}
                    </button>
                ))}
            </div>

            <button className="navbar-hamburger" onClick={() => setMenuOpen(o => !o)}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                    {menuOpen
                        ? <><path d="M6 6l12 12"/><path d="M18 6L6 18"/></>
                        : <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>
                    }
                </svg>
            </button>

            <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
                {navLinks.map(l => (
                    <button key={l.label} onClick={() => scrollTo(l.href.slice(1))}>
                        {l.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Navbar