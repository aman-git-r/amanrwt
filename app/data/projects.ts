export type ProjectCategory =
    | 'websites'
    | 'web-apps'
    | 'featured-project'
    | 'cli-tools'
    | 'others';

export interface Project {
    id: string;
    title: string;
    category: ProjectCategory;
    description: string;
    techStack: string[];
    liveUrl?: string;
    repoUrl?: string;
    image: string;
}

export const PROJECT_CATEGORIES: { value: ProjectCategory; label: string }[] = [
    { value: 'websites', label: 'Websites' },
    { value: 'web-apps', label: 'Web apps' },
    { value: 'featured-project', label: 'Featured' },
    { value: 'cli-tools', label: 'CLI tools' },
    { value: 'others', label: 'Others' },
];

export const projects: Project[] = [
    {
        id: 'portfolio',
        title: 'Portfolio site',
        category: 'websites',
        description:
            'Personal portfolio built with Next.js and Tailwind. Catppuccin theme, accessible tabs, and a calm reading experience.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
        liveUrl: 'https://amanrwt.com',
        repoUrl: 'https://github.com/yourusername/amanrwt',
        image: '/projects/placeholder.svg',
    },
    {
        id: 'reddit-clone',
        title: 'Reddit clone',
        category: 'websites',
        description:
            'Reddit clone built with Next.js and Tailwind. Catppuccin theme, accessible tabs, and a calm reading experience.',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
        liveUrl: 'https://amanrwt.com',
        repoUrl: 'https://github.com/yourusername/amanrwt',
        image: '/projects/placeholder.svg',
    },
    // {
    //     id: 'cli-demo',
    //     title: 'CLI tool example',
    //     category: 'cli-tools',
    //     description:
    //         'A small command-line utility for local development. Demonstrates parsing, config loading, and clear help output.',
    //     techStack: ['Node.js', 'TypeScript', 'Commander'],
    //     repoUrl: 'https://github.com/yourusername/example-cli',
    //     image: '/projects/placeholder.svg',
    // },
];
