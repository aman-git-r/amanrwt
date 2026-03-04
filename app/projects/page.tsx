import type { Metadata } from 'next';
import { ProjectTabs } from '@/app/components/ProjectTabs';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Websites, web apps, CLI tools, and other things I’ve built.',
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-ctp-base">
            <main className="mx-auto w-full max-w-2xl px-6 py-24 pb-20 sm:max-w-3xl sm:py-32 sm:pb-24 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-10 xl:max-w-6xl xl:px-12">
                <header className="mb-12">
                    <h1 className="font-mono text-sm font-medium uppercase tracking-wider text-ctp-mauve">
                        Projects
                    </h1>
                    <p className="mt-2 text-base text-ctp-subtext0">
                        Websites, web apps, CLI tools, and other things I’ve built.
                    </p>
                </header>
                <ProjectTabs standalone />
            </main>
        </div>
    );
}
