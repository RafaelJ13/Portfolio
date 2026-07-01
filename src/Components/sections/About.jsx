import useGitHubRepoCount from '../../hooks/useGithubRepoCount.js'
import useGithubLanguageCount from '../../hooks/useGithubLanguageCount.js';
import '../../styles/About.css'
import techStack, { ICONS } from '../../data/techStack'

function About() {
    const currYear = new Date().getFullYear();

    const repoCount = useGitHubRepoCount("RafaelJ13");
    const userlangs = useGithubLanguageCount("RafaelJ13");

    const stats = [
        { num: (currYear-2024).toString()+"+", label: "Years coding" },
        { num: repoCount.toString(),  label: "Projects built" },
        { num: userlangs.toString(),  label: "Core technologies" },
        { num: "PT", label: "Based in Portugal" },
    ];


    return (
        <section id="about" aria-label="About Rafael Januário" className="min-h-screen flex flex-col justify-center pt-20 pb-10 md:py-0">
            <div className="section-bg-blob about-blob-teal" />
            <div className="section-bg-blob about-blob-indigo" />
            <div className="max-w-4xl w-full mx-auto px-6 md:px-10 relative" style={{ zIndex: 3 }}>
                <h2 className="section-label mb-2">About</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>Full-stack developer based in Portugal focused on building clean, scalable web applications with Java, Spring Boot, and React.</p>
                        <p>Currently looking for full-time roles or freelance projects where I can contribute to meaningful products.</p>

                        <div className="skills-grid">
                            {techStack.map((s) => {
                                const entry = ICONS[s.name]
                                return (
                                    <span key={s.name} style={entry ? { '--ic': entry.color } : undefined} className={`group skill-tag-tw inline-flex items-center gap-1.5 border ${s.tone} ${s.hoverTone} transition-colors duration-200`}>
                                        {entry && <entry.Icon size={12} className="text-neutral-400 group-hover:[color:var(--ic)] transition-colors duration-200" />}
                                        {s.name}
                                    </span>
                                )
                            })}
                        </div>
                    </div>

                    <div className="about-stats">
                        {stats.map((s) => (
                            <div key={s.label} className="stat">
                                <div className="stat-num">{s.num}</div>
                                <div className="stat-label">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;