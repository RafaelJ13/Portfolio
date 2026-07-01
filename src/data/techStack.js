const techStack = [
  { name: 'Java',           tone: 'border-red-300/10',     hoverTone: 'hover:border-red-300/20 hover:bg-red-400/10' },
  { name: 'Spring Boot',    tone: 'border-emerald-300/10', hoverTone: 'hover:border-emerald-300/20 hover:bg-emerald-400/10' },
  { name: 'JavaScript',     tone: 'border-yellow-300/10',  hoverTone: 'hover:border-yellow-300/20 hover:bg-yellow-400/10' },
  { name: 'PHP',            tone: 'border-pink-300/10',    hoverTone: 'hover:border-pink-300/20 hover:bg-pink-400/10' },
  { name: 'HTML',           tone: 'border-orange-300/10',  hoverTone: 'hover:border-orange-300/20 hover:bg-orange-400/10' },
  { name: 'CSS',            tone: 'border-cyan-300/10',    hoverTone: 'hover:border-cyan-300/20 hover:bg-cyan-400/10' },
  { name: 'React',          tone: 'border-sky-300/10',     hoverTone: 'hover:border-sky-300/20 hover:bg-sky-400/10' },
  { name: 'Node.js',        tone: 'border-green-300/10',   hoverTone: 'hover:border-green-300/20 hover:bg-green-400/10' },
  { name: 'PostgreSQL',     tone: 'border-indigo-300/10',  hoverTone: 'hover:border-indigo-300/20 hover:bg-indigo-400/10' },
  { name: 'MySQL',          tone: 'border-blue-300/10',    hoverTone: 'hover:border-blue-300/20 hover:bg-blue-400/10' },
  { name: 'MongoDB',        tone: 'border-teal-300/10',    hoverTone: 'hover:border-teal-300/20 hover:bg-teal-400/10' },
  { name: 'Docker',         tone: 'border-blue-300/10',    hoverTone: 'hover:border-blue-300/20 hover:bg-blue-400/10' },
  { name: 'Git',            tone: 'border-orange-300/10',  hoverTone: 'hover:border-orange-300/20 hover:bg-orange-400/10' },
  { name: 'GitHub Actions', tone: 'border-zinc-300/10',    hoverTone: 'hover:border-zinc-300/20 hover:bg-zinc-400/10' },
];

export const TAG_COLORS = Object.fromEntries(techStack.map(t => [t.name, t]));

export default techStack;
