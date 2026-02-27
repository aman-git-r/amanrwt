import Image from 'next/image';
import type { Project } from '@/app/data/projects';
import { SKILLS } from '@/app/data/skills';
import { Button } from '@/app/components/Button';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { title, description, techStack, liveUrl, repoUrl, image } = project;

    return (
        <article className="flex flex-col">
            {/* Artifact-style image frame */}
            <div className="overflow-hidden rounded-none border border-ctp-surface1 bg-ctp-surface0">
                <div className="flex h-2 items-center gap-1.5 border-b border-ctp-surface1 bg-ctp-surface1 px-2">
                    <span className="size-1.5 rounded-full bg-ctp-overlay0" aria-hidden />
                    <span className="size-1.5 rounded-full bg-ctp-overlay0" aria-hidden />
                    <span className="size-1.5 rounded-full bg-ctp-overlay0" aria-hidden />
                </div>
                <div className="relative aspect-video w-full bg-ctp-surface0">
                    <Image
                        src={image}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 50vw"
                    />
                </div>
            </div>

            <h3 className="mt-4 text-xl font-medium text-ctp-text">{title}</h3>
            <p className="mt-2 text-base leading-relaxed text-ctp-subtext0">{description}</p>

            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Tech stack">
                {techStack.map((skillId) => {
                    const skill = SKILLS[skillId];
                    if (!skill) return null;
                    const { id, name, Icon } = skill;

                    return (
                        <li
                            key={id}
                            className="group flex items-center gap-2 rounded-none border border-ctp-surface1 bg-ctp-mantle px-3 py-1.5 font-mono text-sm text-ctp-text transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-mauve hover:text-ctp-mauve [.theme-mocha_&]:hover:bg-ctp-surface0"
                        >
                            <Icon
                                className="size-4 shrink-0 text-ctp-subtext1 transition-colors duration-200 group-hover:text-ctp-mauve"
                                aria-hidden
                            />
                            <span>{name}</span>
                        </li>
                    );
                })}
            </ul>

            <div className="mt-4 flex flex-wrap gap-3">
                {liveUrl && (
                    <Button href={liveUrl} variant="primary" external>
                        Live
                    </Button>
                )}
                {repoUrl && (
                    <Button href={repoUrl} variant="secondary" external>
                        Repo
                    </Button>
                )}
            </div>
        </article>
    );
}
