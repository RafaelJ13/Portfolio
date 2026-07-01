import '../../styles/Contact.css'
import SiteFooter from '../ui/SiteFooter'

function Contact() {
    const links = [
        {
            label: "rafaeljanuario032@gmail.com",
            href: "mailto:rafaeljanuario032@gmail.com",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M2 7l10 7 10-7"/>
                </svg>
            )
        },
        {
            label: "Rafaelj13",
            href: "https://github.com/Rafaelj13",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
            )
        },
        {
            label: "Rafael Januário",
            href: "https://www.linkedin.com/in/rafael-januário-a145bb347",
            icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                </svg>
            )
        },
    ];

    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center border-b border-neutral-900">
            <div className="max-w-4xl w-full mx-auto px-10 flex-1 flex flex-col justify-center">
                <div className="contact-grid">
                    <div>
                        <p className="section-label">Contact</p>
                        <h2 className="contact-title">Let's work together.</h2>
                        <p className="contact-sub">Open to full-time roles and freelance projects.</p>
                    </div>

                    <div className="contact-links">
                        {links.map((l) => (
                            <a key={l.label} href={l.href} className="contact-btn" target="_blank" rel="noreferrer">
                                <span className="contact-icon">{l.icon}</span>
                                {l.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <SiteFooter />
        </section>
    );
}

export default Contact;