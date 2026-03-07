import type { SkillId } from '@/app/data/skills';

export type ProjectCategory =
    | 'websites'
    | 'web-apps'
    | 'featured-project'
    | 'cli-tools'
    | 'others';

export interface LongDescription {
    problem: string;
    approach: string;
    outcome: string;
}

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
    /** Case study: problem, approach, outcome. Optional; detail page hides if missing. */
    longDescription?: LongDescription;
    /** Extra screenshots for the detail page gallery. Optional. */
    gallery?: string[];
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
        title: 'Cy5 Cloud Security Provider Website',
        category: 'websites',
        description:
            'Cy5.io is a cloud security provider that provides a comprehensive solution for cloud-native application security.',
        techStack: ['wordpress', 'html', 'css', 'javascript', 'elementor'],
        liveUrl: 'https://cy5.io',
        image: '/projects/cy5.png',
        longDescription: {
            problem:
                'The client needed a clear, trustworthy web presence to communicate their cloud security offerings and capture enterprise leads without looking generic or dated.',
            approach:
                'We used WordPress with Elementor for flexible layout control, custom styling with the Catppuccin-inspired palette for a modern feel, and structured content sections for services, differentiators, and contact.',
            outcome:
                'A fast-loading, accessible marketing site that reflects the brand and converts visitors into leads. The site is easy for the client to update without developer involvement.',
        },
        gallery: ['/projects/cy5.png', '/projects/cy5.png'],
    },
    {
        id: 'luxury-travel-agency',
        title: 'Luxury Living Travel Agency Website',
        category: 'websites',
        description:
            'Luxury Living is a B2B travel company that only works with high-end / luxury hotels & resorts. They take pride in being the only one of our kind in the Indian Subcontinent. They are completely offline & they like to keep it that way.',
        techStack: ['react', 'javascript'],
        liveUrl: 'https://luxuryliving.in',
        image: '/projects/luxury-living.png',
    },
    {
        id: 'ocean-hugs-agency',
        title: 'Ocean Hugs Travel Agency Website',
        category: 'websites',
        description:
            'Ocean Hugs is a Delhi-based travel agency specializing in personalized honeymoon and tour packages. The site showcases their bespoke itinerary services, highlights key offerings, and serves as a digital gateway for travelers exploring Greater Kailash and beyond.',
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
