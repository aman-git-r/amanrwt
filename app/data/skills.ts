import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiGit,
    SiDocker,
    SiKubernetes,
    SiGo,
    SiAmazonwebservices,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiWordpress,
    SiElementor,
    SiGoogle,
    SiTailwindcss,
    SiNetlify,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

export type SkillId =
    | 'typescript'
    | 'javascript'
    | 'react'
    | 'nextjs'
    | 'nodejs'
    | 'python'
    | 'wordpress'
    | 'elementor'
    | 'sql'
    | 'html'
    | 'css'
    | 'netlify'
    | 'git'
    | 'docker'
    | 'golang'
    | 'aws'
    | 'kubernetes'
    | 'tailwindcss'
    | 'geminiApi';

export interface Skill {
    id: SkillId;
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement> | { className?: string }>;
    /** Brand color (hex) for the icon */
    color: string;
    /** Optional: use on dark background when brand color is too dark (e.g. Next.js, AWS) */
    colorDark?: string;
    /** Official or docs URL for the technology */
    url: string;
}

export const SKILLS: Record<SkillId, Skill> = {
    typescript: { id: 'typescript', name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', url: 'https://www.typescriptlang.org' },
    wordpress: { id: 'wordpress', name: 'WordPress', Icon: SiWordpress, color: '#21759B', url: 'https://wordpress.org' },
    elementor: { id: 'elementor', name: 'Elementor', Icon: SiElementor, color: '#92003B', url: 'https://elementor.com' },
    react: { id: 'react', name: 'React', Icon: SiReact, color: '#61DAFB', url: 'https://react.dev' },
    nextjs: { id: 'nextjs', name: 'Next.js', Icon: SiNextdotjs, color: '#000000', colorDark: '#cdd6f4', url: 'https://nextjs.org' },
    nodejs: { id: 'nodejs', name: 'Node.js', Icon: SiNodedotjs, color: '#339933', url: 'https://nodejs.org' },
    python: { id: 'python', name: 'Python', Icon: SiPython, color: '#3776AB', url: 'https://www.python.org' },
    sql: { id: 'sql', name: 'SQL', Icon: FaDatabase, color: '#336791', url: 'https://en.wikipedia.org/wiki/SQL' },
    javascript: { id: 'javascript', name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    html: { id: 'html', name: 'HTML', Icon: SiHtml5, color: '#E34F26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    css: { id: 'css', name: 'CSS', Icon: SiCss3, color: '#1572B6', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    git: { id: 'git', name: 'Git', Icon: SiGit, color: '#F05032', url: 'https://git-scm.com' },
    docker: { id: 'docker', name: 'Docker', Icon: SiDocker, color: '#2496ED', url: 'https://www.docker.com' },
    kubernetes: { id: 'kubernetes', name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5', url: 'https://kubernetes.io' },
    golang: { id: 'golang', name: 'Golang', Icon: SiGo, color: '#00ADD8', url: 'https://go.dev' },
    aws: { id: 'aws', name: 'AWS', Icon: SiAmazonwebservices, color: '#232F3E', colorDark: '#cdd6f4', url: 'https://aws.amazon.com' },
    geminiApi: { id: 'geminiApi', name: 'Gemini API', Icon: SiGoogle, color: '#4285F4', url: 'https://gemini.google.com' },
    tailwindcss: { id: 'tailwindcss', name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', url: 'https://tailwindcss.com' },
    netlify: { id: 'netlify', name: 'Netlify', Icon: SiNetlify, color: '#00C7B7', url: 'https://netlify.com' },
    } as const;

export const skillsList = Object.values(SKILLS);

