import useGitHubRepoCount from '../../hooks/useGithubRepoCount.js'
import useGithubLanguageCount from '../../hooks/useGithubLanguageCount.js';
import '../../styles/About.css'

function About() {
    const currYear = new Date().getFullYear();

    const repoCount = useGitHubRepoCount("RafaelJ13");
    const userlangs = useGithubLanguageCount("RafaelJ13");

    const stats = [
        { num: (currYear-2024).toString()+"+", label: "Years coding" },
        { num: repoCount.toString(),            label: "Projects built" },
        { num: userlangs.toString(),            label: "Core technologies" },
        { num: "PT",                            label: "Based in Portugal" },
    ];


    return (
        <section id="about" aria-label="About Rafael Januário" className="min-h-screen flex flex-col justify-center pt-20 pb-10 md:py-0">
            <div className="section-bg-blob about-blob-teal" />
            <div className="section-bg-blob about-blob-indigo" />
            <div className="max-w-4xl w-full mx-auto px-6 md:px-10 relative" style={{ zIndex: 3 }}>
                <h2 className="section-label mb-2">About</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <h3 className="about-title">Full-Stack Developer</h3>
                        <p>Junior Software Developer from Portugal with experience in full-stack web development. Recently interned at Rcoders on Paga.pt, building frontend features, PHP backend services, and CI/CD pipelines. Comfortable across the stack - from database design to deployment - with a strong focus on clean, maintainable code. Currently pursuing a BSc in Computer Engineering. Open to full-time roles or freelance projects.</p>
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