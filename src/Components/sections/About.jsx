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
        <section id="about" className="min-h-screen flex flex-col justify-center border-b border-neutral-900">
            <div className="max-w-4xl w-full mx-auto px-10">
                <p className="section-label -mb-6">About</p>
                <div className="about-grid">
                    <div className="about-text">
                        <p>Full-stack developer focused on building clean, scalable web applications.</p>
                        <p>Currently looking for opportunities to contribute to meaningful products.</p>

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