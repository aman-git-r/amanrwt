import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Fraunces } from 'next/font/google';
import { Nav } from '@/app/components/Nav';
import { ThemeToggle } from '@/app/components/ThemeToggle';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
    variable: '--font-mono-jetbrains',
    subsets: ['latin'],
});

const fraunces = Fraunces({
    variable: '--font-display',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Aman Rawat | Software Engineer',
        template: '%s | Aman Rawat',
    },
    description:
        'Software engineer with 3+ years of experience. Portfolio and projects.',
    metadataBase: new URL('https://amanrwt.com'),
    openGraph: {
        title: 'Aman Rawat | Software Engineer',
        description:
            'Software engineer with 3+ years of experience. Portfolio and projects.',
        url: 'https://amanrwt.com',
        siteName: 'Aman Rawat',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Aman Rawat | Software Engineer',
        description:
            'Software engineer with 3+ years of experience. Portfolio and projects.',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#1e1e2e',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `(function(){var t=localStorage.getItem('theme')||'mocha';document.documentElement.className='theme-'+t;})();`,
                    }}
                />
            </head>
            <body
                className={`${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased`}
            >
                <Nav />
                {children}
                <ThemeToggle />
            </body>
        </html>
    );
}
