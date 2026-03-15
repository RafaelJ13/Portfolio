import techStack from '../../data/techStack';

function TechStack() {
  return (
    <div
      id='stack'
      className='mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3'
    >
      {techStack.map((tech) => (
        <span
          key={tech.name}
          data-cursor='interactive'
          className={`rounded-full border bg-neutral-800/70 px-4 py-2 font-medium text-neutral-200 backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:text-neutral-100 hover:shadow-[0_6px_18px_rgba(0,0,0,0.22)] ${tech.tone} ${tech.hoverTone}`}
        >
          {tech.name}
        </span>
      ))}
    </div>
  );
}

export default TechStack;
