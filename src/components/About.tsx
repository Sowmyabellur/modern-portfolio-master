
import React from 'react';

interface AboutProps {
  bio: string;
  skills: string[];
}

const About: React.FC<AboutProps> = ({ bio, skills }) => {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
      </div>
      <div>
        <p className="mb-4 text-slate-400">{bio}</p>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Skills">
          {skills.map((skill) => (
            <li key={skill} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
