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

const SECTIONS = ['hero', 'about', 'projects', 'experience', 'contact']

function App() {

    const { cursorEnabled, cursorPoint, isCursorHovering } = useCustomCursor();
    useScrollSnap(SECTIONS)

    return (
        <>
            <Navbar/>
            <div className="min-h-screen bg-neutral-900 text-white relative overflow-hidden">
                { <CustomCursor
                    cursorEnabled={cursorEnabled}
                    cursorPoint={cursorPoint}
                    isCursorHovering={isCursorHovering}
                /> }
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