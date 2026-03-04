import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    projects,
    PROJECT_CATEGORIES,
    type Project,
} from '@/app/data/projects';
import { SKILLS } from '@/app/data/skills';
import { Button } from '@/app/components/Button';

export function generateStaticParams() {
    return projects.map((p) => ({ id: p.id }));
}

function getProject(id: string): Project | undefined {
    return projects.find((p) => p.id === id);
}

function getCategoryLabel(category: Project['category']): string {
    return PROJECT_CATEGORIES.find((c) => c.value === category)?.label ?? category;
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const { id } = await params;
    const project = getProject(id);
    if (!project) return { title: 'Project not found' };
    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const project = getProject(id);
    if (!project) notFound();

    const {
        title,
        category,
        description,
        techStack,
        liveUrl,
        repoUrl,
        image,
        longDescription,
        gallery,
    } = project;

    const categoryLabel = getCategoryLabel(category);

    function ArtifactFrame({ src, className }: { src: string; className?: string }) {
        return (
            <div
                className={
                    'overflow-hidden rounded-md border border-ctp-surface1 bg-ctp-surface0 ' +
                    (className ?? '')
                }
            >
                <div className="flex h-4 items-center gap-1.5 border-b border-ctp-surface1 bg-ctp-surface1 px-2">
                    <span className="size-1.5 rounded-full bg-ctp-red" aria-hidden />
                    <span className="size-1.5 rounded-full bg-ctp-yellow" aria-hidden />
                    <span className="size-1.5 rounded-full bg-ctp-green" aria-hidden />
                </div>
                <div className="relative aspect-video w-full bg-ctp-surface0">
                    <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 896px"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-ctp-base">
            <main className="mx-auto w-full max-w-3xl px-6 py-24 pb-20 sm:py-32 sm:pb-24 md:px-8">
                <Link
                    href="/projects"
                    className="mb-8 inline-block font-mono text-sm text-ctp-subtext0 transition-colors hover:text-ctp-mauve"
                >
                    ← Back to projects
                </Link>

                <ArtifactFrame src={image} className="w-full" />

                <div className="mt-8">
                    <h1 className="text-3xl font-medium text-ctp-text sm:text-4xl">{title}</h1>
                    <span className="mt-2 inline-block rounded-none border border-ctp-surface1 bg-ctp-mantle px-3 py-1 font-mono text-xs text-ctp-mauve">
                        {categoryLabel}
                    </span>
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
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-ctp-subtext0">
                    {description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
                    {techStack.map((skillId) => {
                        const skill = SKILLS[skillId];
                        if (!skill) return null;
                        const { id: skillIdKey, name, Icon } = skill;
                        return (
                            <li
                                key={skillIdKey}
                                className="flex items-center gap-2 rounded-none border border-ctp-surface1 bg-ctp-mantle px-3 py-1.5 font-mono text-sm text-ctp-text"
                            >
                                <Icon className="size-4 shrink-0 text-ctp-subtext1" aria-hidden />
                                <span>{name}</span>
                            </li>
                        );
                    })}
                </ul>

                {longDescription && (
                    <div className="mt-12 space-y-8">
                        <section>
                            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-ctp-subtext1">
                                The problem
                            </h2>
                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ctp-text">
                                {longDescription.problem}
                            </p>
                        </section>
                        <section>
                            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-ctp-subtext1">
                                Approach
                            </h2>
                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ctp-text">
                                {longDescription.approach}
                            </p>
                        </section>
                        <section>
                            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-ctp-subtext1">
                                Outcome
                            </h2>
                            <p className="mt-3 max-w-2xl text-base leading-relaxed text-ctp-text">
                                {longDescription.outcome}
                            </p>
                        </section>
                    </div>
                )}

                {gallery && gallery.length > 0 && (
                    <div className="mt-12">
                        <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-ctp-subtext1">
                            Screenshots
                        </h2>
                        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {gallery.map((src, i) => (
                                <li key={i}>
                                    <ArtifactFrame src={src} />
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>
        </div>
    );
}
