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
    | 'git'
    | 'docker'
    | 'golang'
    | 'aws'
    | 'kubernetes';

export interface Skill {
    id: SkillId;
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement> | { className?: string }>;
}

export const SKILLS: Record<SkillId, Skill> = {
    typescript: { id: 'typescript', name: 'TypeScript', Icon: SiTypescript },   
    wordpress: { id: 'wordpress', name: 'WordPress', Icon: SiWordpress },
    elementor: { id: 'elementor', name: 'Elementor', Icon: SiElementor },
    react: { id: 'react', name: 'React', Icon: SiReact },
    nextjs: { id: 'nextjs', name: 'Next.js', Icon: SiNextdotjs },
    nodejs: { id: 'nodejs', name: 'Node.js', Icon: SiNodedotjs },
    python: { id: 'python', name: 'Python', Icon: SiPython },
    sql: { id: 'sql', name: 'SQL', Icon: FaDatabase },
    javascript: { id: 'javascript', name: 'JavaScript', Icon: SiJavascript },
    html: { id: 'html', name: 'HTML', Icon: SiHtml5 },
    css: { id: 'css', name: 'CSS', Icon: SiCss3 },
    git: { id: 'git', name: 'Git', Icon: SiGit },
    docker: { id: 'docker', name: 'Docker', Icon: SiDocker },
    kubernetes: { id: 'kubernetes', name: 'Kubernetes', Icon: SiKubernetes },
    golang: { id: 'golang', name: 'Golang', Icon: SiGo },
    aws: { id: 'aws', name: 'AWS', Icon: SiAmazonwebservices },
} as const;

export const skillsList = Object.values(SKILLS);

