'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { href: '/', label: 'Home', comingSoon: false },
    { href: '/story', label: 'Story', comingSoon: true },
    { href: '/blog', label: 'Blog', comingSoon: true },
] as const;

export function Nav() {
    const pathname = usePathname();

    return (
        <nav
            aria-label="Main"
            className="border-b border-ctp-surface0 bg-ctp-base"
        >
            <div className="mx-auto w-full max-w-2xl px-6 sm:max-w-3xl md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-10 xl:max-w-6xl xl:px-12">
                <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 py-4">
                    {navItems.map(({ href, label, comingSoon }) => {
                        const isActive =
                            href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(href);
                        return (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`inline-flex items-center gap-2 font-mono text-sm transition-colors hover:text-ctp-mauve ${
                                        isActive
                                            ? 'border-b-2 border-ctp-mauve text-ctp-mauve'
                                            : 'border-b-2 border-transparent text-ctp-subtext0'
                                    }`}
                                    aria-label={
                                        comingSoon
                                            ? `${label} – coming soon`
                                            : undefined
                                    }
                                >
                                    <span>{label}</span>
                                    {comingSoon && (
                                        <span
                                            className="rounded border border-ctp-surface1 bg-ctp-surface0 px-2 py-0.5 font-mono text-xs text-ctp-peach"
                                            aria-hidden
                                        >
                                            Coming soon
                                        </span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
