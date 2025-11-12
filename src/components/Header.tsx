import type { SocialLinks } from '@/lib/types';
import React from 'react';
import EmailIcon from './icons/EmailIcon';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import PhoneIcon from './icons/PhoneIcon';

interface HeaderProps {
    name: string;
    role: string;
    about: string;
    contact: SocialLinks;
}

const Header: React.FC<HeaderProps> = ({ name, role, about, contact }) => {
    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            <div>
                <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
                    <a href='/'>{name}</a>
                </h1>
                <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
                    {role}
                </h2>
                <p className='mt-4 max-w-xs leading-normal text-slate-400'>
                    {about}
                </p>

                <nav
                    className='nav hidden lg:block'
                    aria-label='In-page navigation'
                >
                    <ul className='mt-16 w-max'>
                        {navItems.map(item => (
                            <li key={item.name}>
                                <a
                                    className='group flex items-center py-3 active'
                                    href={item.href}
                                >
                                    <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                                    <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                                        {item.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <ul
                className='ml-1 mt-8 flex items-center'
                aria-label='Social media'
            >
                <li className='mr-5 text-xs shrink-0'>
                    <a
                        className='block hover:text-slate-200'
                        href={contact.github}
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='GitHub (opens in a new tab)'
                    >
                        <span className='sr-only'>GitHub</span>
                        <GitHubIcon className='h-6 w-6' />
                    </a>
                </li>
                <li className='mr-5 text-xs shrink-0'>
                    <a
                        className='block hover:text-slate-200'
                        href={contact.linkedin}
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='LinkedIn (opens in a new tab)'
                    >
                        <span className='sr-only'>LinkedIn</span>
                        <LinkedInIcon className='h-6 w-6' />
                    </a>
                </li>
                <li className='mr-5 text-xs shrink-0'>
                    <a
                        className='block hover:text-slate-200'
                        href={`mailto:${contact.email}`}
                        aria-label='Email'
                    >
                        <span className='sr-only'>Email</span>
                        <EmailIcon className='h-6 w-6' />
                    </a>
                </li>
                <li className='mr-5 text-xs shrink-0'>
                    <a
                        className='block hover:text-slate-200'
                        href={`tel:${contact.phone}`}
                        aria-label='Phone'
                    >
                        <span className='sr-only'>Phone</span>
                        <PhoneIcon className='h-6 w-6' />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
