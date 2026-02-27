'use client';

import { useEffect, useState } from 'react';
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi';

const THEME_KEY = 'theme';
type Theme = 'mocha' | 'latte';

export function ThemeToggle() {
    const [theme, setThemeState] = useState<Theme>('mocha');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const stored = (localStorage.getItem(THEME_KEY) as Theme) || 'mocha';
        setThemeState(stored);
    }, []);

    const toggle = () => {
        const next: Theme = theme === 'mocha' ? 'latte' : 'mocha';
        setThemeState(next);
        localStorage.setItem(THEME_KEY, next);
        document.documentElement.className = `theme-${next}`;
    };

    if (!mounted) {
        return (
            <div
                className="fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full border-2 border-ctp-surface1 bg-ctp-base shadow-[0_4px_0_0_var(--ctp-crust)]"
                aria-hidden
            />
        );
    }

    const isLight = theme === 'latte';

    return (
        <button
            type="button"
            onClick={toggle}
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border-2 border-ctp-surface1 bg-ctp-base text-ctp-text shadow-[0_4px_0_0_var(--ctp-crust)] transition-all duration-200 hover:-translate-y-0.5 hover:border-ctp-mauve hover:shadow-[0_6px_0_0_var(--ctp-crust)] hover:text-ctp-mauve active:translate-y-0.5 active:shadow-[0_1px_0_0_var(--ctp-crust)]"
            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
        >
            {isLight ? (
                <HiOutlineMoon className="h-5 w-5" aria-hidden />
            ) : (
                <HiOutlineSun className="h-5 w-5" aria-hidden />
            )}
        </button>
    );
}
