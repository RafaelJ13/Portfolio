import BackgroundGrid from './Components/background/BackgroundGrid'
import HeroSection from './Components/sections/HeroSection';
import CustomCursor from './Components/ui/CustomCursor';
import SiteFooter from './Components/ui/SiteFooter';
import useCustomCursor from './hooks/useCustomCursor';

function App() {
    const { cursorEnabled, cursorPoint, isCursorHovering } = useCustomCursor();
    
    return (
        <div className="min-h-screen bg-neutral-900 text-white overflow-hidden relative">
            <CustomCursor
                cursorEnabled={cursorEnabled}
                cursorPoint={cursorPoint}
                isCursorHovering={isCursorHovering}
            />
            <BackgroundGrid />
            <HeroSection />
            <SiteFooter />
        </div>
    );
}

export default App;