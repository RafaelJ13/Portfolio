import Lenis from 'lenis'
import { useEffect } from 'react';

import BackgroundGrid from './Components/background/BackgroundGrid'
import HeroSection from './Components/sections/HeroSection';
import CustomCursor from './Components/ui/CustomCursor';
import SiteFooter from './Components/ui/SiteFooter';
import useCustomCursor from './hooks/useCustomCursor';
import About from './Components/sections/About'

function App() {
    const { cursorEnabled, cursorPoint, isCursorHovering } = useCustomCursor();
    
        useEffect(() => {
            const lenis = new Lenis()
            function raf(time) {
                lenis.raf(time)
                requestAnimationFrame(raf)
            }
            requestAnimationFrame(raf)
        }, [])

    return (
        <>
            <div className="min-h-screen bg-neutral-900 text-white relative ">
                <CustomCursor
                    cursorEnabled={cursorEnabled}
                    cursorPoint={cursorPoint}
                    isCursorHovering={isCursorHovering}
                />
                    <div className="absolute inset-0 overflow-hidden">
                        <BackgroundGrid />
                    </div>
                <HeroSection />
            </div>
            <div>
                <About />
                <SiteFooter />
            </div>
        </>
    );
}

export default App;