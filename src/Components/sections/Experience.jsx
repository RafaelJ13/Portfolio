import '../../styles/Experience.css'
import { TAG_COLORS, ICONS } from '../../data/techStack'

const DEFAULT_TAG = { tone: 'border-neutral-300/10', hoverTone: 'hover:border-neutral-300/20 hover:bg-neutral-400/10' }
const tagStyle = (name) => TAG_COLORS[name] ?? DEFAULT_TAG

const entries = [
    {
        period: "Sep 2026 (Future) — Present",
        role: "BSc — Computer Engineering",
        company: "Polytechnic Institute of Castelo Branco — ESTCB",
        description: "EQF Level 6 degree covering software engineering, algorithms, computer architecture, networks, and systems development.",
        tags: ["Algorithms", "OOP", "Networks", "Systems"],
    },
    {
        period: "Feb 2026 — Jun 2026",
        role: "Intern — Software Developer",
        company: "Rcoders — Paga.pt",
        description: "Developed and maintained Paga.pt, a digital payments platform. Built responsive frontend features, implemented backend functionality in PHP including transactional email services, and designed CI/CD pipelines with GitHub Actions to automate deployment workflows.",
        tags: ["PHP", "JavaScript", "HTML", "CSS", "MySQL", "Git", "GitHub Actions", "CI/CD"],
    },
    {
        period: "2022 — 2023",
        role: "CTeSP — Information Systems Technologies and Programming",
        company: "Polytechnic Institute of Castelo Branco — ESTCB",
        description: "EQF Level 5 qualification covering software engineering, OOP, relational databases, web development, and systems design.",
        tags: ["PHP", "JavaScript", "SQL", "HTML", "CSS", "OOP", "Java", "Agile", "Android SDK"],
    },
]

function Experience() {
    return (
        <section id="experience" aria-label="Experience and Education of Rafael Januário" className="min-h-screen flex flex-col justify-center pt-20 pb-12 md:pt-28 md:pb-16">
            <div className="section-bg-blob exp-blob-blue" />
            <div className="section-bg-blob exp-blob-amber" />
            <div className="max-w-4xl w-full mx-auto px-6 md:px-10 relative" style={{ zIndex: 3 }}>
                <h2 className="section-label mb-2">Experience</h2>
            </div>
            <div className="exp-list-outer relative" style={{ zIndex: 3 }}>
                <div className="exp-list">
                    {entries.map((e, i) => (
                        <div key={i} className="exp-entry">
                            <span className="exp-period">{e.period}</span>
                            <div className="exp-timeline">
                                <div className="exp-dot" />
                            </div>
                            <div className="exp-content">
                                <span className="exp-period-mobile">{e.period}</span>
                                <h3 className="exp-role">{e.role}</h3>
                                <span className="exp-company">{e.company}</span>
                                <p className="exp-desc">{e.description}</p>
                                {e.tags && (
                                    <div className="exp-tags">
                                        {e.tags.map((t) => {
                                            const entry = ICONS[t]
                                            return (
                                                <span key={t} style={entry ? { '--ic': entry.color } : undefined} className={`group exp-tag inline-flex items-center gap-1.5 border transition-colors duration-200 ${tagStyle(t).tone} ${tagStyle(t).hoverTone}`}>
                                                    {entry && <entry.Icon size={12} className="text-neutral-400 group-hover:[color:var(--ic)] transition-colors duration-200" />}
                                                    {t}
                                                </span>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
