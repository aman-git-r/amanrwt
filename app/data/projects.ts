import type { SkillId } from '@/app/data/skills';

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
    techStack: SkillId[];
    liveUrl?: string;
    repoUrl?: string;
    image: string;
    readMoreUrl?: string;
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
        id: "cy5.io-website",
        title: 'cy5.io - Cloud Security Provider',
        category: 'websites',
        description:
            'cy5.io is a cloud security provider that provides a comprehensive solution for cloud security. It is a cloud security provider that provides a comprehensive solution for cloud security.',
        techStack: ['wordpress', 'html', 'css', 'javascript', 'elementor'],
        liveUrl: 'https://cy5.io',
        image: '/projects/cy5.png',
    },
    {
        id: 'luxury-travel-agency',
        title: 'luxuryliving.in - Luxury Travel Agency',
        category: 'websites',
        description:
            'Luxury Living is a travel agency that provides a comprehensive solution for luxury travel. It is a travel agency that provides a comprehensive solution for luxury travel.',
        techStack: ['react', 'javascript'],
        liveUrl: 'https://luxuryliving.in',
        image: '/projects/luxury-living.png',
    },
    {
        id: 'ocean-hugs-agency',
        title: 'oceanhugs.in',
        category: 'websites',
        description:
            'Ocean Hugs is a travel agency that provides a comprehensive solution for luxury travel. It is a travel agency that provides a comprehensive solution for luxury travel.',
        techStack: ['html', 'css', 'javascript'],
        liveUrl: 'https://oceanhugs.in',
        image: '/projects/ocean-hugs.png',
    },
    {
        id: 'ashoka-international',
        title: 'Ashoka International: Full-Service Moving & Relocation Website',
        category: 'websites',
        description: 'Ashoka International is an established full-service moving and logistics company headquartered in New Delhi, India. Operating since 1978, the company specializes in global relocations, freight forwarding, and move management for both individual and corporate clients.',
        techStack: ['html', 'css', 'javascript'],
        liveUrl: 'https://ashokaint.com',
        image: '/projects/ashoka-international.png',
    }
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
