import techStack from '../../data/techStack'
import { ICONS } from '../../data/techIcons'

function TechStack() {
  return (
    <div
      id='stack'
      className='mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3'
    >
      {techStack.map((tech) => {
        const entry = ICONS[tech.name]
        return (
          <span
            key={tech.name}
            data-cursor='interactive'
            style={entry ? { '--ic': entry.color } : undefined}
            className={`group inline-flex items-center gap-1.5 rounded-full border bg-neutral-800/70 px-3 py-1 text-xs font-medium text-neutral-200 backdrop-blur transition-all duration-200 ease-out hover:-translate-y-0.5 hover:text-neutral-100 hover:shadow-[0_6px_18px_rgba(0,0,0,0.22)] ${tech.tone} ${tech.hoverTone}`}
          >
            {entry && <entry.Icon size={12} className="text-neutral-400 group-hover:[color:var(--ic)] transition-colors duration-200" />}
            {tech.name}
          </span>
        )
      })}
    </div>
  )
}

export default TechStack
