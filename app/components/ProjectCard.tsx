import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/app/data/projects';
import { SKILLS } from '@/app/data/skills';
import { Button } from '@/app/components/Button';
import { SkillBadge } from '@/app/components/SkillBadge';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    const { title, description, techStack, liveUrl, repoUrl, image } = project;

    return (
        <article className="flex flex-col">
            <Link
                href={`/projects/${project.id}`}
                className="group block"
            >
                {/* Artifact-style image frame */}
                <div className="overflow-hidden rounded-2xl border-2 border-ctp-surface1 bg-ctp-surface0 transition-colors duration-200 group-hover:border-ctp-peach">
                    <div className="relative aspect-video w-full bg-ctp-surface0">
                        <Image
                            src={image}
                            alt=""
                            fill
                            className="object-cover transition duration-200"
                            sizes="(max-width: 640px) 100vw, 50vw"
                        />
                        <span
                            className="pointer-events-none absolute inset-0 bg-ctp-peach/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                            aria-hidden
                        />
                    </div>
                </div>
                <h3 className="mt-4 text-xl line-clamp-2 font-medium text-ctp-text transition-colors duration-200 group-hover:text-ctp-peach">
                    {title}
                </h3>
            </Link>
            <p className="mt-2 text-base leading-relaxed text-ctp-subtext0 line-clamp-3">{description}</p>

            <ul className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2" aria-label="Tech stack">
                {techStack.slice(0, 3).map((skillId) => {
                    const skill = SKILLS[skillId];
                    if (!skill) return null;
                    return (
                        <li key={skill.id} className="flex items-center">
                            <SkillBadge skill={skill} />
                        </li>
                    );
                })}
                {techStack.length > 3 && (
                    <li className="flex items-center">
                        <span className="inline-flex items-center justify-center rounded-full border border-ctp-surface1 bg-ctp-surface0 px-2.5 py-1 text-xs font-medium text-ctp-subtext0 leading-none">
                            +{techStack.length - 3}
                        </span>
                    </li>
                )}
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
