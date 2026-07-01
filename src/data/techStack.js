import { FaJava, FaNetworkWired, FaObjectGroup, FaCode, FaServer, FaSitemap } from 'react-icons/fa'
import {
  SiSpringboot, SiJavascript, SiPhp,
  SiHtml5, SiCss, SiReact, SiNodedotjs,
  SiPostgresql, SiMysql, SiMongodb,
  SiDocker, SiGit, SiGithubactions, SiAndroid,
  SiApachemaven, SiGradle, SiGithub, SiDiscorddotjs, SiVite, SiCircleci,
  SiJira, SiSqlite, SiPostman, SiSwagger, SiTailwindcss,
} from 'react-icons/si'

export const ICONS = {
  'Java':             { Icon: FaJava,          color: '#f89820' },
  'Spring Boot':      { Icon: SiSpringboot,    color: '#6db33f' },
  'JavaScript':       { Icon: SiJavascript,    color: '#f7df1e' },
  'Tailwind CSS':     { Icon: SiTailwindcss,   color: '#38bdf8' },
  'Swagger':          { Icon: SiSwagger,       color: '#85ea2d' },
  'Gradle':           { Icon: SiGradle,        color: '#02303a' },
  'PHP':              { Icon: SiPhp,           color: '#8892be' },
  'HTML':             { Icon: SiHtml5,         color: '#e34f26' },
  'CSS':              { Icon: SiCss,           color: '#1572b6' },
  'React':            { Icon: SiReact,         color: '#61dafb' },
  'Node.js':          { Icon: SiNodedotjs,     color: '#339933' },
  'PostgreSQL':       { Icon: SiPostgresql,    color: '#4169e1' },
  'MySQL':            { Icon: SiMysql,         color: '#4479a1' },
  'MongoDB':          { Icon: SiMongodb,       color: '#47a248' },
  'Docker':           { Icon: SiDocker,        color: '#2496ed' },
  'Git':              { Icon: SiGit,           color: '#f05032' },
  'GitHub Actions':   { Icon: SiGithubactions, color: '#2088ff' },
  'Android SDK':      { Icon: SiAndroid,       color: '#3ddc84' },
  'Maven':            { Icon: SiApachemaven,   color: '#c71a36' },
  'GitHub API':       { Icon: SiGithub,        color: '#ffffff' },
  'Discord.js':       { Icon: SiDiscorddotjs,  color: '#5865f2' },
  'Vite':             { Icon: SiVite,          color: '#646cff' },
  'CI/CD':            { Icon: SiCircleci,      color: '#04aa51' },
  'REST API':         { Icon: SiPostman,       color: '#ff6c37' },
  'Agile':            { Icon: SiJira,          color: '#0052cc' },
  'SQL':              { Icon: SiSqlite,        color: '#44a8d4' },
  'Networks':         { Icon: FaNetworkWired,  color: '#38bdf8' },
  'OOP':              { Icon: FaObjectGroup,   color: '#a78bfa' },
  'Algorithms':       { Icon: FaCode,          color: '#f59e0b' },
  'Systems':          { Icon: FaServer,        color: '#06b6d4' },
  'Design Patterns':  { Icon: FaSitemap,       color: '#c084fc' },
}

const techStack = [
  { name: 'Java',           tone: 'border-amber-300/10',   hoverTone: 'hover:border-amber-300/20 hover:bg-amber-400/10',     cardHoverTone: 'group-hover/card:border-amber-300/20 group-hover/card:bg-amber-400/10' },
  { name: 'Spring Boot',    tone: 'border-emerald-300/10', hoverTone: 'hover:border-emerald-300/20 hover:bg-emerald-400/10', cardHoverTone: 'group-hover/card:border-emerald-300/20 group-hover/card:bg-emerald-400/10' },
  { name: 'JavaScript',     tone: 'border-yellow-300/10',  hoverTone: 'hover:border-yellow-300/20 hover:bg-yellow-400/10',   cardHoverTone: 'group-hover/card:border-yellow-300/20 group-hover/card:bg-yellow-400/10' },
  { name: 'PHP',            tone: 'border-pink-300/10',    hoverTone: 'hover:border-pink-300/20 hover:bg-pink-400/10',       cardHoverTone: 'group-hover/card:border-pink-300/20 group-hover/card:bg-pink-400/10' },
  { name: 'HTML',           tone: 'border-orange-300/10',  hoverTone: 'hover:border-orange-300/20 hover:bg-orange-400/10',   cardHoverTone: 'group-hover/card:border-orange-300/20 group-hover/card:bg-orange-400/10' },
  { name: 'CSS',            tone: 'border-cyan-300/10',    hoverTone: 'hover:border-cyan-300/20 hover:bg-cyan-400/10',       cardHoverTone: 'group-hover/card:border-cyan-300/20 group-hover/card:bg-cyan-400/10' },
  { name: 'React',          tone: 'border-sky-300/10',     hoverTone: 'hover:border-sky-300/20 hover:bg-sky-400/10',         cardHoverTone: 'group-hover/card:border-sky-300/20 group-hover/card:bg-sky-400/10' },
  { name: 'Node.js',        tone: 'border-green-300/10',   hoverTone: 'hover:border-green-300/20 hover:bg-green-400/10',     cardHoverTone: 'group-hover/card:border-green-300/20 group-hover/card:bg-green-400/10' },
  { name: 'PostgreSQL',     tone: 'border-indigo-300/10',  hoverTone: 'hover:border-indigo-300/20 hover:bg-indigo-400/10',   cardHoverTone: 'group-hover/card:border-indigo-300/20 group-hover/card:bg-indigo-400/10' },
  { name: 'MySQL',          tone: 'border-blue-300/10',    hoverTone: 'hover:border-blue-300/20 hover:bg-blue-400/10',       cardHoverTone: 'group-hover/card:border-blue-300/20 group-hover/card:bg-blue-400/10' },
  { name: 'MongoDB',        tone: 'border-teal-300/10',    hoverTone: 'hover:border-teal-300/20 hover:bg-teal-400/10',       cardHoverTone: 'group-hover/card:border-teal-300/20 group-hover/card:bg-teal-400/10' },
  { name: 'Docker',         tone: 'border-blue-300/10',    hoverTone: 'hover:border-blue-300/20 hover:bg-blue-400/10',       cardHoverTone: 'group-hover/card:border-blue-300/20 group-hover/card:bg-blue-400/10' },
  { name: 'Git',            tone: 'border-orange-300/10',  hoverTone: 'hover:border-orange-300/20 hover:bg-orange-400/10',   cardHoverTone: 'group-hover/card:border-orange-300/20 group-hover/card:bg-orange-400/10' },
  { name: 'GitHub Actions', tone: 'border-blue-300/10',    hoverTone: 'hover:border-blue-300/20 hover:bg-blue-400/10',       cardHoverTone: 'group-hover/card:border-blue-300/20 group-hover/card:bg-blue-400/10' },
]

const extraTags = [
  { name: 'Design Patterns', tone: 'border-purple-300/10',  hoverTone: 'hover:border-purple-300/20 hover:bg-purple-400/10',   cardHoverTone: 'group-hover/card:border-purple-300/20 group-hover/card:bg-purple-400/10' },
  { name: 'Tailwind CSS',    tone: 'border-cyan-300/10',    hoverTone: 'hover:border-cyan-300/20 hover:bg-cyan-400/10',       cardHoverTone: 'group-hover/card:border-cyan-300/20 group-hover/card:bg-cyan-400/10' },
  { name: 'Swagger',         tone: 'border-lime-300/10',    hoverTone: 'hover:border-lime-300/20 hover:bg-lime-400/10',       cardHoverTone: 'group-hover/card:border-lime-300/20 group-hover/card:bg-lime-400/10' },
  { name: 'Gradle',          tone: 'border-teal-400/10',    hoverTone: 'hover:border-teal-400/20 hover:bg-teal-400/10',       cardHoverTone: 'group-hover/card:border-teal-400/20 group-hover/card:bg-teal-400/10' },
  { name: 'Maven',           tone: 'border-red-300/10',     hoverTone: 'hover:border-red-300/20 hover:bg-red-400/10',         cardHoverTone: 'group-hover/card:border-red-300/20 group-hover/card:bg-red-400/10' },
  { name: 'GitHub API',      tone: 'border-blue-300/10',    hoverTone: 'hover:border-blue-300/20 hover:bg-blue-400/10',       cardHoverTone: 'group-hover/card:border-blue-300/20 group-hover/card:bg-blue-400/10' },
  { name: 'Discord.js',      tone: 'border-indigo-300/10',  hoverTone: 'hover:border-indigo-300/20 hover:bg-indigo-400/10',   cardHoverTone: 'group-hover/card:border-indigo-300/20 group-hover/card:bg-indigo-400/10' },
  { name: 'Vite',            tone: 'border-fuchsia-300/10', hoverTone: 'hover:border-fuchsia-300/20 hover:bg-fuchsia-400/10', cardHoverTone: 'group-hover/card:border-fuchsia-300/20 group-hover/card:bg-fuchsia-400/10' },
  { name: 'REST API',        tone: 'border-orange-300/10',  hoverTone: 'hover:border-orange-300/20 hover:bg-orange-400/10',   cardHoverTone: 'group-hover/card:border-orange-300/20 group-hover/card:bg-orange-400/10' },
  { name: 'CI/CD',           tone: 'border-green-300/10',   hoverTone: 'hover:border-green-300/20 hover:bg-green-400/10',     cardHoverTone: 'group-hover/card:border-green-300/20 group-hover/card:bg-green-400/10' },
  { name: 'SQL',             tone: 'border-indigo-300/10',  hoverTone: 'hover:border-indigo-300/20 hover:bg-indigo-400/10',   cardHoverTone: 'group-hover/card:border-indigo-300/20 group-hover/card:bg-indigo-400/10' },
  { name: 'Agile',           tone: 'border-blue-300/10',    hoverTone: 'hover:border-blue-300/20 hover:bg-blue-400/10',       cardHoverTone: 'group-hover/card:border-blue-300/20 group-hover/card:bg-blue-400/10' },
  { name: 'Android SDK',     tone: 'border-green-300/10',   hoverTone: 'hover:border-green-300/20 hover:bg-green-400/10',     cardHoverTone: 'group-hover/card:border-green-300/20 group-hover/card:bg-green-400/10' },
  { name: 'OOP',             tone: 'border-violet-300/10',  hoverTone: 'hover:border-violet-300/20 hover:bg-violet-400/10',   cardHoverTone: 'group-hover/card:border-violet-300/20 group-hover/card:bg-violet-400/10' },
  { name: 'Algorithms',      tone: 'border-amber-300/10',   hoverTone: 'hover:border-amber-300/20 hover:bg-amber-400/10',     cardHoverTone: 'group-hover/card:border-amber-300/20 group-hover/card:bg-amber-400/10' },
  { name: 'Networks',        tone: 'border-sky-300/10',     hoverTone: 'hover:border-sky-300/20 hover:bg-sky-400/10',         cardHoverTone: 'group-hover/card:border-sky-300/20 group-hover/card:bg-sky-400/10' },
  { name: 'Systems',         tone: 'border-cyan-300/10',    hoverTone: 'hover:border-cyan-300/20 hover:bg-cyan-400/10',       cardHoverTone: 'group-hover/card:border-cyan-300/20 group-hover/card:bg-cyan-400/10' },
]

export const TAG_COLORS = Object.fromEntries(
  [...techStack, ...extraTags].map(t => [t.name, t])
)

export default techStack
