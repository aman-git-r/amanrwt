export const metadata = {
    title: 'Blog',
    description: 'Posts and thoughts — coming soon.',
};

export default function BlogPage() {
    return (
        <div className="flex min-h-screen flex-col bg-ctp-base">
            <main className="mx-auto flex flex-1 flex-col items-center justify-center w-full max-w-2xl px-6 py-24 sm:max-w-3xl sm:py-32 md:max-w-4xl md:px-8 lg:max-w-5xl lg:px-10 xl:max-w-6xl xl:px-12">
                <h1 className="text-4xl font-medium tracking-tight text-ctp-text sm:text-5xl">
                    Blog
                </h1>
                <p className="mt-4 font-mono text-sm text-ctp-mauve sm:text-base">
                    Posts and thoughts — coming soon.
                </p>
            </main>
        </div>
    );
}
