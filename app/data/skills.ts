import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiGit,
    SiDocker,
    SiKubernetes,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

export type SkillId =
    | 'typescript'
    | 'react'
    | 'nextjs'
    | 'nodejs'
    | 'python'
    | 'sql'
    | 'git'
    | 'docker'
    | 'kubernetes';

export interface Skill {
    id: SkillId;
    name: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement> | { className?: string }>;
}

export const SKILLS: Record<SkillId, Skill> = {
    typescript: { id: 'typescript', name: 'TypeScript', Icon: SiTypescript },
    react: { id: 'react', name: 'React', Icon: SiReact },
    nextjs: { id: 'nextjs', name: 'Next.js', Icon: SiNextdotjs },
    nodejs: { id: 'nodejs', name: 'Node.js', Icon: SiNodedotjs },
    python: { id: 'python', name: 'Python', Icon: SiPython },
    sql: { id: 'sql', name: 'SQL', Icon: FaDatabase },
    git: { id: 'git', name: 'Git', Icon: SiGit },
    docker: { id: 'docker', name: 'Docker', Icon: SiDocker },
    kubernetes: { id: 'kubernetes', name: 'Kubernetes', Icon: SiKubernetes },
} as const;

export const skillsList = Object.values(SKILLS);

