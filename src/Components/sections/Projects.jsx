import '../../styles/Projects.css'
import { TAG_COLORS } from '../../data/techStack.js'

const DEFAULT_TAG = { tone: 'border-neutral-300/10', hoverTone: 'hover:border-neutral-300/20 hover:bg-neutral-400/10' }
const tagStyle = (name) => TAG_COLORS[name] ?? DEFAULT_TAG

const projects = [
    {
        name: "Shortify",
        description: "URL shortener REST API built with Spring Boot. Exposes endpoints to create and resolve short links, backed by a relational database ",
        tags: ["Java", "Spring Boot", "REST API", "Maven"],
        url: "https://github.com/RafaelJ13/Shortify",
        thumb: "thumb-shortify",
        gridClass: "grid-shortify",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>
        ),
    },
    {
        name: "GitHub Migrator",
        description: "CLI tool that automates migrating repositories between GitHub accounts. Uses the GitHub API to clone, recreate, and push repos — supporting both public and private visibility.",
        tags: ["Java", "Maven", "GitHub API"],
        url: "https://github.com/RafaelJ13/github-migrator",
        thumb: "thumb-migrator",
        gridClass: "grid-migrator",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
        ),
    },
    {
        name: "Pro Galaxy Bot",
        description: "Discord bot with a full ticket support system. Users can open private text and voice channels for support; admins close and clean them up. Data persisted in MongoDB via Mongoose.",
        tags: ["Node.js", "Discord.js", "MongoDB", "Mongoose"],
        url: "https://github.com/RafaelJ13/pro-galaxy-bot",
        thumb: "thumb-galaxy",
        gridClass: "grid-galaxy",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
        ),
    },
]

function Projects() {
    return (
        <section id="projects" aria-label="Projects by Rafael Januário" className="min-h-screen flex flex-col justify-center border-b border-neutral-900 pt-16">
            <div className="max-w-4xl w-full mx-auto px-10 -py-3">
                <h2 className="section-label mb-2 mt-4">Projects</h2>
                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <a
                            key={i}
                            className="project-card"
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${p.name} — ${p.description}`}
                        >
                            <div className={`project-thumb ${p.thumb}`}>
                                <div className={`thumb-grid ${p.gridClass}`} />
                                <div className="thumb-fade" />
                                <span className="project-thumb-icon">{p.icon}</span>
                            </div>
                            <div className="project-body">
                                <h3 className="project-name">{p.name}</h3>
                                <p className="project-desc">{p.description}</p>
                                <div className="project-tags">
                                    {p.tags.map((t) => (
                                        <span key={t} className={`project-tag border transition-colors duration-200 ${tagStyle(t).tone} ${tagStyle(t).hoverTone}`}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}

                    <a
                        className="project-card"
                        href="https://github.com/RafaelJ13/Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Portfolio — Single-page portfolio built with React and Vite, featuring scroll snapping, dynamic GitHub stats, and a contact form."
                    >
                        <div className="project-thumb thumb-portfolio">
                            <div className="thumb-portfolio-grid" />
                            <div className="thumb-portfolio-fade" />
                            <span className="project-thumb-icon">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                                    <line x1="8" y1="21" x2="16" y2="21"/>
                                    <line x1="12" y1="17" x2="12" y2="21"/>
                                </svg>
                            </span>
                        </div>
                        <div className="project-body">
                            <h3 className="project-name">Portfolio</h3>
                            <p className="project-desc">This portfolio website — a single-page app built with React and Vite, featuring scroll snapping, dynamic GitHub stats, and a contact form.</p>
                            <div className="project-tags">
                                {["React", "Vite", "JavaScript", "CSS"].map((t) => (
                                    <span key={t} className={`project-tag border transition-colors duration-200 ${tagStyle(t).tone} ${tagStyle(t).hoverTone}`}>{t}</span>
                                ))}
                            </div>
                        </div>
                    </a>
                </div>

                <div className="mt-6 flex justify-center">
                    <a
                        href="https://github.com/RafaelJ13"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                    >
                        See all projects on GitHub
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Projects
