import BackgroundGrid from './Components/background/BackgroundGrid'
import HeroSection from './Components/sections/HeroSection';
import CustomCursor from './Components/ui/CustomCursor';
import useCustomCursor from './hooks/useCustomCursor';
import About from './Components/sections/About'
import Projects from './Components/sections/Projects'
import Experience from './Components/sections/Experience'
import Contact from './Components/sections/Contact';
import useScrollSnap from './hooks/useScrollSnap'
import Navbar from './Components/ui/Navbar';
import { useAnalytics } from './hooks/useAnalytics';

const SECTIONS = ['hero', 'about', 'projects', 'experience', 'contact']

function App() {

    const { cursorEnabled, cursorPoint, isCursorHovering } = useCustomCursor();
    useScrollSnap(SECTIONS)
    useAnalytics()

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-black text-white relative overflow-hidden hero-outer">
                { <CustomCursor
                    cursorEnabled={cursorEnabled}
                    cursorPoint={cursorPoint}
                    isCursorHovering={isCursorHovering}
                /> }
                <div className="section-bg-blob hero-blob-blue" />
                <div className="section-bg-blob hero-blob-purple" />
                    <div className="absolute inset-0 overflow-hidden">
                        <BackgroundGrid />
                    </div>
                <HeroSection />
            </div>
            <div>
                <About />
                <Projects />
                <Experience />
                <Contact />
            </div>
        </>
    );
}

export default App;