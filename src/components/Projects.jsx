import React from 'react';

function Projects() {
    return (
        <div className='group flex flex-row justify-between items-center p-4 rounded-lg transition-all duration-300 hover:bg-neutral-900'>
            <div className="flex flex-row gap-4 items-center text-lg">
                <h3 className='font-medium group-hover:text-blue-500 transition-colors duration-300'>
                    Narrativ - AI Storytelling Platform
                </h3>
                <span className="hidden md:inline text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Generative AI for personalized storytelling experiences
                </span>
            </div>
            <div>
                <a
                    href="#"
                    className='underline text-lg hover:text-blue-500 transition-colors duration-300'
                >
                    code
                </a>
            </div>
        </div>
    );
}

export default Projects;