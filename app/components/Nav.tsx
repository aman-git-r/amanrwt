'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SiGithub, SiX } from 'react-icons/si';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
] as const;

type Theme = 'mocha' | 'latte';

export function Nav() {
    const pathname = usePathname();
    const [theme, setTheme] = useState<Theme>('mocha');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = (localStorage.getItem('theme') as Theme) || 'mocha';
        setTheme(stored);
    }, []);

    const toggleTheme = () => {
        const next: Theme = theme === 'mocha' ? 'latte' : 'mocha';
        setTheme(next);
        localStorage.setItem('theme', next);
        document.documentElement.className = `theme-${next}`;
    };

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-40 border-b border-ctp-surface1 bg-ctp-crust/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                {/* Left: brand */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-2xl font-semibold tracking-wide text-ctp-text"
                >
                    <span className="text-ctp-peach">//</span>
                    <span className="text-ctp-text">AR</span>
                </Link>

                <div className="flex flex-none items-center gap-6">
                    {/* Navigation */}
                    <nav aria-label="Main navigation">
                        <ul className="flex items-center justify-end gap-3 sm:gap-5">
                            {navItems.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`inline-flex items-center gap-2 px-1.5 py-1 text-sm transition-colors ${
                                            isActive(href)
                                                ? 'text-ctp-peach'
                                                : 'text-ctp-text hover:text-ctp-peach'
                                        }`}
                                    >
                                        <span>{label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Right icons: Twitter, GitHub, theme toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="https://x.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="X (Twitter)"
                            className="inline-flex h-6 w-6 items-center justify-center text-ctp-text/80 transition-colors hover:text-ctp-peach"
                        >
                            <SiX className="h-4 w-4" aria-hidden />
                        </a>
                        <a
                            href="https://github.com/aman-git-r"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="inline-flex h-6 w-6 items-center justify-center text-ctp-text/80 transition-colors hover:text-ctp-peach"
                        >
                            <SiGithub className="h-4 w-4" aria-hidden />
                        </a>
                        <button
                            type="button"
                            onClick={toggleTheme}
                            className="inline-flex h-6 w-6 items-center justify-center text-ctp-text/80 transition-colors hover:text-ctp-peach focus:outline-none"
                            aria-label={
                                mounted && theme === 'latte'
                                    ? 'Switch to dark mode'
                                    : 'Switch to light mode'
                            }
                        >
                            {mounted && theme === 'latte' ? (
                                <HiOutlineMoon className="h-5 w-5" aria-hidden />
                            ) : (
                                <HiOutlineSun className="h-5 w-5" aria-hidden />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
