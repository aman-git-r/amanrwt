import Link from "next/link";
import { ProjectTabs } from "@/app/components/ProjectTabs";
import {
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiGit,
    SiDocker,
    SiKubernetes,
    SiGithub,
    SiLinkedin,
    SiLeetcode,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const contacts = [
    { label: "Email", href: "mailto:your@email.com", Icon: HiOutlineMail },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", Icon: SiLinkedin },
    { label: "GitHub", href: "https://github.com/yourusername", Icon: SiGithub },
    { label: "LeetCode", href: "https://leetcode.com/u/yourusername", Icon: SiLeetcode },
] as const;

const skills = [
    { name: "TypeScript", Icon: SiTypescript },
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Python", Icon: SiPython },
    { name: "SQL", Icon: FaDatabase },
    { name: "Git", Icon: SiGit },
    { name: "Docker", Icon: SiDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
] as const;

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-ctp-base">
            <main className="mx-auto flex-1 w-full max-w-2xl px-6 py-24 sm:max-w-3xl sm:py-32 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-10 xl:max-w-6xl xl:px-12">
                <header className="space-y-6">
                    <h1 className="text-4xl font-medium tracking-tight text-ctp-text sm:text-5xl lg:text-6xl">
                        Aman Rawat
                    </h1>
                    <p className="font-mono text-sm text-ctp-mauve sm:text-base">
                        Software Engineer
                    </p>
                    <p className="max-w-md text-lg leading-relaxed text-ctp-subtext0 sm:max-w-lg lg:max-w-xl">
                        Building things with code. 3+ years of experience —
                        warm, calm corner of the web.
                    </p>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center rounded-none border-0 bg-ctp-mauve px-5 py-3 font-medium text-ctp-base shadow-[0_4px_0_0_var(--ctp-surface0)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_var(--ctp-surface0)] active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--ctp-surface0)]"
                        >
                            See my work
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-none border-2 border-ctp-surface1 bg-transparent px-5 py-3 font-medium text-ctp-text shadow-[0_4px_0_0_var(--ctp-crust)] transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-mauve hover:shadow-[0_6px_0_0_var(--ctp-crust)] hover:text-ctp-mauve active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--ctp-crust)]"
                        >
                            Get in touch
                        </Link>
                    </div>
                </header>

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
                                {skills.map(({ name, Icon }) => (
                                    <li
                                        key={name}
                                        className="group flex items-center gap-2 rounded-none border border-ctp-surface1 bg-ctp-mantle px-3 py-1.5 font-mono text-sm text-ctp-text transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-mauve hover:bg-ctp-surface0 hover:text-ctp-mauve"
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

                <ProjectTabs />
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
                                            href="#projects"
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
