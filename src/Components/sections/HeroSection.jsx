import { useEffect, useState } from 'react';
import roles from '../../data/roles';
import TechStack from './TechStack';

function HeroSection() {
  const [index, setIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    let slideTimeout;
    let resetTimeout;

    const intervalId = setInterval(() => {
      setIsSliding(true);

      slideTimeout = setTimeout(() => {
        setIsResetting(true);
        setIsSliding(false);
        setIndex((prev) => (prev + 1) % roles.length);

        resetTimeout = setTimeout(() => {
          setIsResetting(false);
        }, 20);
      }, 750);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(slideTimeout);
      clearTimeout(resetTimeout);
    };
  }, []);

  const nextIndex = (index + 1) % roles.length;

  return (
    <main className='relative z-10 flex min-h-[calc(100vh-80px)] items-center justify-center px-6 md:px-10'>
      <section className='mx-auto flex w-full max-w-5x1 flex-col items-center text-center'>
        <div className='inline-flex flex-col items-center'>
          <div className='mb-6 overflow-hidden whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-center text-xs font-medium uppercase tracking-[0.24em] text-neutral-400 backdrop-blur'>
            <div className='relative h-4 overflow-hidden w-[13rem]'>
              <div
                className={[
                  'flex flex-col',
                  isResetting ? '' : 'transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
                  isSliding ? '-translate-y-4' : 'translate-y-0',
                ].join(' ')}
              >
                <span className='flex h-4 items-center justify-center'>
                  {roles[index]}
                </span>
                <span className='flex h-4 items-center justify-center'>
                  {roles[nextIndex]}
                </span>
              </div>
            </div>
          </div>

          <h1 className='w-max text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl'>
            Rafael J.
          </h1>

          <p className='mt-5 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg md:text-xl'>
            I build scalable web applications using <span className='font-semibold text-white'>Java</span>,{' '}
            <span className='font-semibold text-white'>Spring Boot</span>,{' '}
            <span className='font-semibold text-white'>React</span>, and{' '}
            <span className='font-semibold text-white'>PostgreSQL</span>.
          </p>

          <TechStack />
        </div>
      </section>
    </main>
  );
}

export default HeroSection;
