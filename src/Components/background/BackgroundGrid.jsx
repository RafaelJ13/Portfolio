function BackgroundGrid() {
    return (
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px',
                        transform: 'perspective(1000px) rotateX(70deg) scale(3)',
                        width: '200%',
                        height: '200%',
                        top: '-50%',
                        left: '-50%',
                        transformOrigin: 'center center',
                    }}
                />

                {/* topo escuro esconde o "tecto" da grelha e cria profundidade 3D */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/90"/>

            </div>
    );
}

export default BackgroundGrid;
