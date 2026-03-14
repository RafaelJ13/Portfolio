function BackgroundGrid() {
    return (
            <div className="absolute inset-0">
                <div 
                    className="absolute inset-0 opacity-40 "
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
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


                {/* overlay para o texto ser visivel*/}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"/>    
                     
            </div>
    );
}

export default BackgroundGrid;