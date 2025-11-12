import About from '@/components/About';
import Chat from '@/components/Chat';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import { config } from '@/lib/config';

function App() {
    return (
        <>
            <div className='mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
                <div className='lg:flex lg:justify-between lg:gap-4'>
                    <Header
                        name={config.name}
                        role={config.role}
                        about={config.about}
                        contact={config.contact}
                    />
                    <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
                        <About bio={config.bio} skills={config.skills} />
                        <Experience experiences={config.experience} />
                        <Projects projects={config.projects} />
                        <Footer contact={config.contact} />
                    </main>
                </div>
            </div>
            <Chat />
        </>
    );
}

export default App;
