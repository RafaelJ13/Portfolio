import BackgroundGrid from './Components/background/BackgroundGrid'

function App() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white overflow-hidden relative">
            <BackgroundGrid />
            <main className='relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 md:px-10'>
                <h1 className='max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl'>
                    Under Construction
                </h1>
            </main>
            <footer className='z10 flex items-center justify-center'>
                © Made By Rafaelj13 
            </footer>
        </div>
    );
}

export default App;