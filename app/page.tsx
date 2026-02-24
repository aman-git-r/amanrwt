import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen bg-ctp-base">
            <main className="mx-auto max-w-2xl px-6 py-24 sm:max-w-3xl sm:py-32 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-10 xl:max-w-6xl xl:px-12">
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
                            href="/projects"
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
            </main>
        </div>
    );
}
