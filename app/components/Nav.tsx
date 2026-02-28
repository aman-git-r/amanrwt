'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const navItems = [
    { href: '/', label: 'Home', comingSoon: false },
    { href: '/story', label: 'Story', comingSoon: true },
    { href: '/blog', label: 'Blog', comingSoon: true },
] as const;

export function Nav() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const firstLinkRef = useRef<HTMLAnchorElement>(null);

    const closeMenu = () => setMenuOpen(false);

    /* Click outside: close when clicking outside menuRef (e.g. backdrop) */
    useEffect(() => {
        if (!menuOpen) return;
        const handleClickOutside = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                closeMenu();
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    /* Escape key: close menu */
    useEffect(() => {
        if (!menuOpen) return;
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu();
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [menuOpen]);

    /* When menu opens: lock body scroll (avoid scrollbar shift), focus first link for keyboard */
    useEffect(() => {
        if (!menuOpen) return;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const prevOverflow = document.body.style.overflow;
        const prevPaddingRight = document.body.style.paddingRight;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollbarWidth}px`;
        firstLinkRef.current?.focus({ preventScroll: true });
        return () => {
            document.body.style.overflow = prevOverflow;
            document.body.style.paddingRight = prevPaddingRight;
        };
    }, [menuOpen]);

    const linkContent = (label: string, comingSoon: boolean) => (
        <>
            <span>{label}</span>
            {comingSoon && (
                <span
                    className="rounded-md border border-ctp-surface1 bg-ctp-surface0 px-2 py-0.5 font-mono text-xs text-ctp-peach"
                    aria-hidden
                >
                    Coming soon
                </span>
            )}
        </>
    );

    return (
        <>
            {/* Mobile: hamburger top-right (same style as ThemeToggle), fixed width to prevent shift */}
            <div
                className="fixed right-6 top-[max(0.75rem,env(safe-area-inset-top))] z-50 w-11 overflow-visible sm:hidden"
                ref={menuRef}
            >
                <button
                    type="button"
                    onClick={() => setMenuOpen((o) => !o)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-ctp-surface1 bg-ctp-base text-ctp-text shadow-[0_4px_0_0_var(--ctp-crust)] transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-mauve hover:shadow-[0_6px_0_0_var(--ctp-crust)] hover:text-ctp-mauve focus:outline-none focus-visible:ring-2 focus-visible:ring-ctp-mauve focus-visible:ring-offset-2 focus-visible:ring-offset-ctp-base active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--ctp-crust)]"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                    aria-haspopup="true"
                >
                    {menuOpen ? (
                        <HiOutlineX className="h-5 w-5" aria-hidden />
                    ) : (
                        <HiOutlineMenu className="h-5 w-5" aria-hidden />
                    )}
                </button>
                {menuOpen && (
                    <div
                        className="nav-glass absolute right-[calc(100%+6.5rem)] top-[calc(rem)] z-50 min-w-48 max-w-[calc(100vw-3rem)] w-max rounded-2xl border border-ctp-surface1 py-2 shadow-lg"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation menu"
                    >
                        <ul className="font-mono text-sm" role="menu">
                            {navItems.map((item, i) => {
                                const isActive =
                                    item.href === '/'
                                        ? pathname === '/'
                                        : pathname.startsWith(item.href);
                                return (
                                    <li key={item.href} role="none">
                                        <Link
                                            ref={i === 0 ? firstLinkRef : undefined}
                                            href={item.href}
                                            role="menuitem"
                                            onClick={closeMenu}
                                            className={`flex min-h-[44px] min-w-[44px] items-center gap-2 px-4 py-2.5 transition-colors hover:text-ctp-mauve focus:outline-none focus-visible:ring-2 focus-visible:ring-ctp-mauve focus-visible:ring-inset ${
                                                isActive
                                                    ? 'bg-ctp-surface0 text-ctp-mauve'
                                                    : 'text-ctp-subtext0'
                                            }`}
                                            aria-label={
                                                item.comingSoon
                                                    ? `${item.label} – coming soon`
                                                    : undefined
                                            }
                                        >
                                            {linkContent(item.label, item.comingSoon)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                )}
            </div>

            {/* Desktop: centered floating pill with liquid glass */}
            <nav
                aria-label="Main"
                className="fixed left-1/2 top-[max(0.75rem,env(safe-area-inset-top))] z-40 hidden w-max -translate-x-1/2 sm:block"
            >
                <div className="nav-glass flex items-center gap-1 rounded-full px-2 py-2 font-mono text-sm">
                    <ul className="flex items-center justify-center gap-1">
                        {navItems.map(({ href, label, comingSoon }) => {
                            const isActive =
                                href === '/' ? pathname === '/' : pathname.startsWith(href);
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 transition-colors hover:text-ctp-mauve focus:outline-none focus-visible:ring-2 focus-visible:ring-ctp-mauve focus-visible:ring-offset-2 focus-visible:ring-offset-ctp-mantle ${
                                            isActive
                                                ? 'bg-ctp-surface0 text-ctp-mauve'
                                                : 'text-ctp-subtext0'
                                        }`}
                                        aria-label={
                                            comingSoon ? `${label} – coming soon` : undefined
                                        }
                                    >
                                        {linkContent(label, comingSoon)}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}
