import Link from "next/link";
import { Button } from "@/app/components/Button";
import { ProjectCard } from "@/app/components/ProjectCard";
import { skillsList } from "@/app/data/skills";
import { projects } from "@/app/data/projects";
import {
    SiGithub,
    SiLinkedin,
    SiLeetcode,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const contacts = [
    { label: "Email", href: "mailto:amanrawat4060@gmail.com", Icon: HiOutlineMail },
    { label: "LinkedIn", href: "https://linkedin.com/in/aman-rwt", Icon: SiLinkedin },
    { label: "GitHub", href: "https://github.com/aman-git-r", Icon: SiGithub },
    { label: "LeetCode", href: "https://leetcode.com/u/aman-rwt", Icon: SiLeetcode },
] as const;

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-ctp-base">
            {/* Hero – full viewport container, then gradients applied inside (no cut-off) */}
            <section
                className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden"
                aria-label="Introduction"
            >
                <div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden
                >
                    <div
                        className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full opacity-[0.12] blur-[60px]"
                        style={{ backgroundColor: "var(--ctp-mauve)" }}
                    />
                    <div
                        className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full opacity-[0.12] blur-[60px]"
                        style={{ backgroundColor: "var(--ctp-peach)" }}
                    />
                </div>
                <header className="relative z-10 mx-auto max-w-2xl space-y-6 px-6 text-center sm:px-8">
                    <h1 className="text-4xl font-medium tracking-tight text-ctp-text sm:text-5xl lg:text-6xl">
                        Aman Rawat
                    </h1>
                    <p className="font-mono text-sm text-ctp-mauve sm:text-base">
                        Software Engineer
                    </p>
                    <p className="mx-auto max-w-md text-lg leading-relaxed text-ctp-subtext0 sm:max-w-lg lg:max-w-xl">
                        Building things with code. 3+ years of experience —
                        warm, calm corner of the web.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                        <Button href="/projects" variant="primary">
                            See my work
                        </Button>
                        <Button href="/contact" variant="secondary">
                            Get in touch
                        </Button>
                    </div>
                </header>
            </section>

            <main className="mx-auto w-full max-w-2xl px-6 pb-20 sm:max-w-3xl sm:pb-24 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-10 xl:max-w-6xl xl:px-12">
                <section
                    id="about"
                    className="mt-20 border-t border-ctp-surface0 pt-16 sm:mt-24 sm:pt-20"
                    aria-labelledby="about-heading"
                >
                    <h2
                        id="about-heading"
                        className="font-mono text-sm font-medium uppercase tracking-wider text-ctp-mauve"
                    >
                        About me
                    </h2>
                    <div className="mt-6 space-y-6">
                        <p className="max-w-2xl text-lg leading-relaxed text-ctp-text">
                            I&apos;m a software engineer who loves turning ideas into
                            reliable, user-friendly software. I focus on clean code,
                            thoughtful architecture, and shipping things that work.
                        </p>
                        <p className="max-w-2xl text-base leading-relaxed text-ctp-subtext0">
                            When I&apos;m not coding, I enjoy reading, exploring new
                            tech, and keeping this corner of the web a calm place to
                            visit.
                        </p>
                        <div>
                            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-ctp-subtext1">
                                Skills & tools
                            </h3>
                            <ul className="mt-3 flex w-4/5 flex-wrap gap-2">
                                {skillsList.map(({ id, name, Icon }) => (
                                    <li
                                        key={id}
                                        className="group flex items-center gap-2 rounded-none border border-ctp-surface1 bg-ctp-mantle px-3 py-1.5 font-mono text-sm text-ctp-text transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-mauve hover:text-ctp-mauve in-[.theme-mocha]:hover:bg-ctp-surface0"
                                    >
                                        <Icon
                                            className="size-4 shrink-0 text-ctp-subtext1 transition-colors duration-200 group-hover:text-ctp-mauve"
                                            aria-hidden
                                        />
                                        <span>{name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                {/* Featured projects preview */}
                <section
                    className="mt-20 border-t border-ctp-surface0 pt-16 sm:mt-24 sm:pt-20"
                    aria-labelledby="featured-projects-heading"
                >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <h2
                                id="featured-projects-heading"
                                className="font-mono text-sm font-medium uppercase tracking-wider text-ctp-mauve"
                            >
                                Featured projects
                            </h2>
                            <p className="mt-2 max-w-xl text-sm text-ctp-subtext0">
                                A few things I&apos;ve worked on recently. See more on the projects page.
                            </p>
                        </div>
                        <Button href="/projects" variant="secondary" className="self-start sm:self-auto">
                            View all projects →
                        </Button>
                    </div>
                    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {projects.slice(0, 2).map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </section>
            </main>

            <footer
                className="mt-auto border-t border-ctp-surface0 bg-ctp-crust pt-12 pb-8 sm:pt-16"
                role="contentinfo"
            >
                <div className="mx-auto max-w-2xl px-6 sm:max-w-3xl md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-10 xl:max-w-6xl xl:px-12">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-wrap items-center gap-6">
                            <span className="font-mono text-xs font-medium uppercase tracking-wider text-ctp-subtext1">
                                Connect
                            </span>
                            <ul className="flex flex-wrap gap-4" aria-label="Contact links">
                                {contacts.map(({ label, href, Icon }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-2 font-mono text-sm text-ctp-subtext0 transition-colors hover:text-ctp-mauve"
                                            aria-label={label}
                                        >
                                            <Icon
                                                className="size-4 shrink-0 text-ctp-subtext1 transition-colors group-hover:text-ctp-mauve"
                                                aria-hidden
                                            />
                                            <span>{label}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6 border-t border-ctp-surface0 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <nav aria-label="Footer navigation">
                                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                                    <li>
                                        <Link
                                            href="/projects"
                                            className="font-mono text-sm text-ctp-subtext0 transition-colors hover:text-ctp-mauve"
                                        >
                                            Projects
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contact"
                                            className="font-mono text-sm text-ctp-subtext0 transition-colors hover:text-ctp-mauve"
                                        >
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                            <p className="font-mono text-xs text-ctp-subtext1">
                                © {new Date().getFullYear()} Aman Rawat
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
