/** Short, centered squiggly line separator (portfolio-style). Use a theme color class (e.g. text-ctp-peach) for stroke. */
export function SquigglySeparator({ className }: { className?: string }) {
    return (
        <div
            className={className}
            role="presentation"
            aria-hidden
        >
            <div className="flex justify-start">
                <svg
                    viewBox="0 0 120 14"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    className="h-3 aspect-120/13 min-w-0"
                >
                    <path
                        d="M 0 7 C 4 3, 8 3, 12 7 C 16 11, 20 11, 24 7 C 28 3, 32 3, 36 7 C 40 11, 44 11, 48 7 C 52 3, 56 3, 60 7 C 64 11, 68 11, 72 7 C 76 3, 80 3, 84 7 C 88 11, 92 11, 96 7 C 100 3, 104 3, 108 7 C 112 11, 116 11, 120 7"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}
