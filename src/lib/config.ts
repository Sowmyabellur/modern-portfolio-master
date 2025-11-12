import type { PortfolioConfig } from './types';

export const config: PortfolioConfig = {
    name: 'Sowmya Bellur',
    role: 'Senior Frontend Engineer at Google',
    about: 'I build exceptional and accessible digital experiences for the web.',
    bio: "With over a decade of experience, I've transformed complex problems into elegant, user-friendly solutions. My passion lies in crafting pixel-perfect UIs and writing clean, scalable code. When I'm not coding, I enjoy exploring new hiking trails and photography.",
    contact: {
        email: 'sowmyabellur04.com',
        github: 'https://github.com',
        linkedin: 'https://linkedin.com/in/',
        twitter: 'https://twitter.com',
        phone: '+1 123-456-7890',
    },
    skills: [
        'React',
        'TypeScript',
        'JavaScript (ES6+)',
        'Next.js',
        'Node.js',
        'Tailwind CSS',
        'Figma',
        'Storybook',
        'Testing (Jest, RTL)',
        'CI/CD',
    ],
    experience: [
        {
            duration: '2022 — Present',
            company: 'Google',
            role: 'Senior Frontend Engineer',
            link: 'https://google.com',
            description: [
                'Led the development of a new design system used by over 20 teams, improving consistency and development speed.',
                'Architected and built a highly performant, server-rendered web application using Next.js, resulting in a 40% improvement in LCP.',
                'Mentored junior engineers, conducted code reviews, and championed best practices for accessibility and performance.',
            ],
        },
        {
            duration: '2018 — 2022',
            company: 'Meta',
            role: 'Frontend Engineer',
            link: 'https://meta.com',
            description: [
                'Developed and maintained key features for the main social feed, impacting millions of daily active users.',
                'Collaborated with UX/UI designers and product managers to prototype and implement new user-facing features.',
                'Improved application state management by migrating from Redux to React Query, reducing boilerplate and simplifying data fetching.',
            ],
        },
        {
            duration: '2016 — 2018',
            company: 'Amazon',
            role: 'Software Development Engineer',
            link: 'https://amazon.com',
            description: [
                'Worked on the AWS console, creating intuitive interfaces for complex cloud services.',
                'Built reusable UI components with React and styled-components, enhancing the developer experience.',
                'Contributed to improving the frontend testing infrastructure, increasing code coverage by 25%.',
            ],
        },
    ],
    projects: [
        {
            name: 'Portfolio V2',
            description:
                "My personal portfolio site (the one you're on) built with React, Next.js, and Tailwind CSS to showcase my work and skills.",
            technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
            github: 'https://github.com',
            link: 'https://example.com',
        },
        {
            name: 'E-Commerce Platform',
            description:
                'A full-stack e-commerce application with features like product search, cart functionality, and Stripe integration for payments.',
            technologies: [
                'React',
                'Node.js',
                'Express',
                'MongoDB',
                'Stripe API',
            ],
            github: 'https://github.com',
        },
        {
            name: 'Task Management App',
            description:
                'A Kanban-style task management tool with drag-and-drop functionality, user authentication, and real-time collaboration.',
            technologies: [
                'React',
                'Firebase',
                'React DnD',
                'Styled Components',
            ],
            github: 'https://github.com',
            link: 'https://example.com',
        },
        {
            name: 'Data Visualization Dashboard',
            description:
                'A dashboard for visualizing complex datasets using D3.js and React, providing interactive charts and graphs.',
            technologies: ['React', 'D3.js', 'TypeScript', 'GraphQL'],
            github: 'https://github.com',
        },
    ],
};
