import useGitHubRepoCount from '../../hooks/useGithubRepoCount.js'
import useGithubLanguageCount from '../../hooks/useGithubLanguageCount.js';
import '../../styles/About.css'
import techStack from '../../data/techStack.js'

function About() {
    const currYear = new Date().getFullYear();

    const repoCount = useGitHubRepoCount("RafaelJ13");
    const userlangs = useGithubLanguageCount("RafaelJ13");

    const stats = [
        { num: (currYear-2020).toString()+"+", label: "Years coding" },
        { num: repoCount.toString(),  label: "Projects built" },
        { num: userlangs.toString(),  label: "Core technologies" },
        { num: "PT", label: "Based in Portugal" },
    ];


    return (
        <section id="about" aria-label="About Rafael Januário" className="min-h-screen flex flex-col justify-center border-b border-neutral-900 pt-20 pb-10 md:py-0">
            <div className="max-w-4xl w-full mx-auto px-6 md:px-10">
                <h2 className="section-label mb-2">About</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>Full-stack developer based in Portugal focused on building clean, scalable web applications with Java, Spring Boot, and React.</p>
                        <p>Currently looking for full-time roles or freelance projects where I can contribute to meaningful products.</p>

                        <div className="skills-grid">
                            {techStack.map((s) => (
                                <span key={s.name} className={`skill-tag-tw border ${s.tone} ${s.hoverTone} transition-colors duration-200`}>
                                    {s.name}
                                </span>
                            ))}
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