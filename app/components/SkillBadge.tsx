import type { Skill } from '@/app/data/skills';

interface SkillBadgeProps {
    skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
    const { name, Icon, color, url } = skill;
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-ctp-text transition-transform duration-200 hover:scale-105"
            title={name}
        >
            <Icon
                className="size-4 shrink-0"
                style={{ color }}
                aria-hidden
            />
            <span>{name}</span>
        </a>
    );
}
