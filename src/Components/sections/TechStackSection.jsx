import '../../styles/TechStackSection.css'
import { ICONS } from '../../data/techIcons'
import { TAG_COLORS } from '../../data/techStack.js'

const DEFAULT_TAG = { tone: 'border-neutral-300/10', hoverTone: 'hover:border-neutral-300/20 hover:bg-neutral-400/10' }
const tagStyle = (name) => TAG_COLORS[name] ?? DEFAULT_TAG

const categories = [
    {
        label: 'Languages',
        techs: ['Java', 'JavaScript', 'PHP', 'HTML', 'CSS'],
    },
    {
        label: 'Frameworks & Runtime',
        techs: ['Spring Boot', 'React', 'Node.js'],
    },
    {
        label: 'Databases',
        techs: ['PostgreSQL', 'MySQL', 'MongoDB'],
    },
    {
        label: 'Tools & DevOps',
        techs: ['Docker', 'Git', 'GitHub Actions', 'Maven', 'Vite', 'CI/CD'],
    },
]

function TechStackSection() {
    return (
        <section id="techstack" aria-label="Tech Stack of Rafael Januário" className="min-h-screen flex flex-col justify-center pt-20 pb-10 md:py-0">
            <div className="section-bg-blob techstack-blob-violet" />
            <div className="section-bg-blob techstack-blob-cyan" />
            <div className="max-w-4xl w-full mx-auto px-6 md:px-10 relative" style={{ zIndex: 3 }}>
                <h2 className="section-label mb-8">Tech Stack</h2>
                <div className="techstack-categories">
                    {categories.map((cat) => (
                        <div key={cat.label}>
                            <p className="techstack-cat-label">{cat.label}</p>
                            <div className="techstack-grid">
                                {cat.techs.map((name) => {
                                    const entry = ICONS[name]
                                    const style = tagStyle(name)
                                    return (
                                        <span
                                            key={name}
                                            style={entry ? { '--ic': entry.color } : undefined}
                                            className={`group techstack-card inline-flex items-center gap-2.5 border transition-all duration-200 ${style.tone} ${style.hoverTone}`}
                                        >
                                            {entry && (
                                                <entry.Icon
                                                    size={18}
                                                    className="text-neutral-500 group-hover:[color:var(--ic)] transition-colors duration-200 flex-shrink-0"
                                                />
                                            )}
                                            <span className="techstack-card-name">{name}</span>
                                        </span>
                                    )
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStackSection
