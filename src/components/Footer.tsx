import type { SocialLinks } from '@/lib/types';
import React from 'react';

interface FooterProps {
    contact: SocialLinks;
}

const Footer: React.FC<FooterProps> = ({ contact }) => {
    return (
        <footer className='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
            <div className='flex flex-col gap-2 sm:flex-row sm:gap-6 mb-4'>
                <a
                    className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
                    href={`mailto:${contact.email}`}
                >
                    {contact.email}
                </a>
                <a
                    className='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
                    href={`tel:${contact.phone}`}
                >
                    {contact.phone}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
