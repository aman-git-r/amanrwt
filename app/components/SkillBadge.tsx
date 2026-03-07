import type { Skill } from '@/app/data/skills';

interface SkillBadgeProps {
    skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
    const { name, Icon, color, colorDark, url } = skill;
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="skill-badge-link inline-flex items-center gap-2 text-sm text-ctp-text transition-transform duration-200 hover:scale-105 in-[.theme-latte]:rounded-full in-[.theme-latte]:bg-(--ctp-latte-base) in-[.theme-latte]:px-2 in-[.theme-latte]:py-1"
            title={name}
            style={
                {
                    '--icon-color': color,
                    ...(colorDark && { '--icon-color-dark': colorDark }),
                } as React.CSSProperties
            }
        >
            <Icon
                className="skill-badge-icon size-4 shrink-0"
                style={{ color: 'var(--icon-color)' }}
                aria-hidden
            />
            <span>{name}</span>
        </a>
    );
}
