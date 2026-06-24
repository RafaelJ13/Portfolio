import { useState, useEffect } from 'react'

function ScrollArrow() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY < 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, [])
    return (
        <div
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
            style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 0.3s",
            }}
        >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" }}>
                {[0.4, 0.5, 0.6].map((delay, i) => (
                    <svg
                    key={i}
                    width="15"
                    height="10"
                    viewBox="0 0 24 16"
                    fill="none"
                        stroke="white"
                    strokeWidth="3"
                    style={{ animation: `bounce 2s ${delay}s infinite` }}
                    >
                    <path d="M4 4l8 8 8-8" />
                    </svg>
                ))}
            </div>

            <style>{`
                @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(8px); }
                }

                
            `}</style>

        </div>
    )
}

export default ScrollArrow;