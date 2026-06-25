import BackgroundGrid from './Components/background/BackgroundGrid'
import HeroSection from './Components/sections/HeroSection';
import CustomCursor from './Components/ui/CustomCursor';
import SiteFooter from './Components/ui/SiteFooter';
import useCustomCursor from './hooks/useCustomCursor';
import About from './Components/sections/About'
import Contact from './Components/sections/Contact';
import useScrollSnap from './hooks/useScrollSnap'

function App() {
    const SECTIONS = ['hero', 'about', 'contact']

    const { cursorEnabled, cursorPoint, isCursorHovering } = useCustomCursor();
    useScrollSnap(SECTIONS)

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
                <Contact />
                <SiteFooter />
            </div>
        </>
    );
}

export default App;