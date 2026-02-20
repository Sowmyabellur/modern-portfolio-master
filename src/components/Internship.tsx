import type { Internship } from '@/lib/types';

import React from 'react';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface InternshipProps {
    internship? :Internship[];
}

const IntershipItem: React.FC<Internship> = ({
    duration,
    company,
    role,
    description,
    link,
}) => (
    <li className='mb-12'>
        <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100! lg:group-hover/list:opacity-50'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
            <header
                className='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2'
                aria-label={duration}
            >
                {duration}
            </header>
            <div className='z-10 sm:col-span-6'>
                <h3 className='font-medium leading-snug text-slate-200'>
                    <div>
                        <a
                            className='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base'
                            href={link}
                            target='_blank'
                            rel='noreferrer noopener'
                            aria-label={`${role} at ${company} (opens in a new tab)`}
                        >
                            <span className='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                            <span>
                                {role} ·{' '}
                                <span className='inline-block'>
                                    {company}
                                    <ExternalLinkIcon className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
                                </span>
                            </span>
                        </a>
                    </div>
                </h3>
                <ul className='mt-2 text-sm leading-normal text-slate-400 list-none pl-0'>
                    {description.map((item, index) => (
                        <li key={index} className='flex items-start gap-2'>
                            <span className='text-teal-400 mt-1'>▹</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </li>
);

const Internship: React.FC<InternshipProps> = ({ internship }) => {
    return (
        <section
            id='internship'
            className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
            aria-label='Internship'
        >
            <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                    Internship
                </h2>
            </div>
            <div>
                <ol className='group/list list-none pl-0'>
                    {internship?.map((exp, index) => (
                        <IntershipItem key={index} {...exp} />
                    ))}
                </ol>
                <div className='mt-12'>
                    <a
                        className='inline-flex items-center font-medium leading-tight text-slate-200 group'
                        aria-label='View Full Résumé'
                        href='/Sowmya_Bellur_Resume.pdf'
                    >
                        <span>
                            <span className='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>
                                View Full{' '}
                            </span>
                            <span className='whitespace-nowrap'>
                                <span className='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>
                                    Résumé
                                </span>
                                <ArrowLeftIcon className='ml-1 inline-block h-4 w-4 shrink-0 -translate-x-1 transition-transform group-hover:-translate-x-2 group-focus-visible:-translate-x-2 motion-reduce:transition-none' />
                            </span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Internship;
