import type { SkillId } from '@/app/data/skills';

export type ProjectCategory =
    | 'websites'
    | 'web-apps'
    | 'featured-project'
    | 'cli-tools'
    | 'ai-projects'
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
    client?: 'course-work' | 'client' | 'personal-project';
}

export const PROJECT_CATEGORIES: { value: ProjectCategory; label: string }[] = [
    { value: 'websites', label: 'Websites' },
    { value: 'web-apps', label: 'Web apps' },
    { value: 'featured-project', label: 'Featured' },
    { value: 'cli-tools', label: 'CLI tools' },
    { value: 'ai-projects', label: 'AI projects' },
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
        category: 'web-apps',
        description:
            'Luxury Living is a B2B travel company that only works with high-end / luxury hotels & resorts. They take pride in being the only one of our kind in the Indian Subcontinent. They are completely offline & they like to keep it that way.',
        techStack: ['react', 'javascript', 'python', 'drf', 'aws'],
        liveUrl: 'https://luxuryliving.in',
        image: '/projects/luxury-living.png',
    },
    {
        id: 'ocean-hugs-agency',
        title: 'Ocean Hugs Travel Agency Website',
        category: 'websites',
        description:
            'Ocean Hugs is a Delhi-based travel agency specializing in personalized honeymoon and tour packages. The site showcases their bespoke itinerary services, highlights key offerings, and serves as a digital gateway for travelers exploring Greater Kailash and beyond.',
        techStack: ['html', 'css', 'javascript', 'aws'],
        liveUrl: 'https://oceanhugs.in',
        image: '/projects/ocean-hugs.png',
    },
    {
        id: 'ashoka-international',
        title: 'Ashoka International: Full-Service Moving & Relocation Website',
        category: 'websites',
        description: 'Ashoka International is an established full-service moving and logistics company headquartered in New Delhi, India. Operating since 1978, the company specializes in global relocations, freight forwarding, and move management for both individual and corporate clients.',
        techStack: ['html', 'css', 'javascript', 'aws'],
        liveUrl: 'https://ashokaint.com',
        image: '/projects/ashoka-international.png',
    },
    {
        id: 'omnifood',
        title: 'Omnifood: Meal Planning & Delivery Service Website',
        category: 'websites',
        description: 'Omnifood is a meal planning and delivery service that delivers healthy, delicious meals to your door.',
        techStack: ['html', 'css', 'javascript', 'netlify'],
        liveUrl: 'https://omnifood.amanrwt.com',
        repoUrl: 'https://github.com/aman-git-r/omnifood',
        image: '/projects/omnifood.png',
        client: 'course-work'
    },
    {
        id: 'natours',
        title: 'Natours: Nature Tours Booking Website',
        category: 'websites',
        description: 'Natours is a nature tours booking website that allows you to book nature tours and activities.',
        techStack: ['html', 'css', 'sass', 'javascript', 'netlify'],
        liveUrl: 'https://natours.amanrwt.com',
        image: '/projects/natours/natours.png',
        repoUrl: 'https://github.com/aman-git-r/natours',
        longDescription: {
            problem:
                'I wanted to create a website that would allow users to book nature tours and activities.',
            approach:
                'I used HTML, CSS, and JavaScript to create a website that would allow users to book nature tours and activities.',
            outcome:
                'A website that allows users to book nature tours and activities. I learned a lot about HTML, CSS, and JavaScript while creating this project.',
        },
        gallery: ['/projects/natours/natours.png', '/projects/natours/natours-menu.png'],
        client: 'course-work',
    },
    {
        id: 'vibe-chords',
        title: 'Vibe Chords: AI-Powered Music Chord Generator',
        category: 'ai-projects',
        description: 'Vibe Chords is an AI-powered music chord generator that generates chords based on the given music vibe.',
        techStack: ['nextjs', 'shadcn', 'typescript', 'geminiApi', 'tailwindcss', 'netlify'],
        liveUrl: 'https://vibe-chords.amanrwt.com',
        image: '/projects/vibe-chords.png',
        repoUrl: 'https://github.com/aman-git-r/vibe-chords',
        client: 'personal-project',
        longDescription: {
            problem:
                'I wanted to create a web-application that would allow users to generate chords based on the given music vibe.',
            approach:
                'I used Next.js, Shadcn, TypeScript, Gemini API, Tailwind CSS, and Netlify to create a web-application that would allow users to generate chords based on the given music vibe.',
            outcome:
                'A web-application that allows users to generate chords based on the given music vibe.',
        }
    },
];
