import React from 'react';

function Experience() {
    return (
        <div className='mt-10'>
            <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                Experience
            </h1>

            <div className='mt-8 space-y-6'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h2 className='text-xl font-bold'>Software Engineer</h2>
                        <h3 className='text-lg text-muted-foreground'>Company Name</h3>
                    </div>
                    <p className='text-muted-foreground'>2023 - Present</p>
                </div>
                <p className='text-muted-foreground'>
                    Developed scalable web applications using modern technologies.
                    Improved system performance by 40% through optimization techniques.
                </p>
            </div>

            <div className='mt-8 space-y-6'>
                <div className='flex flex-row justify-between'>
                    <div>
                        <h2 className='text-xl font-bold'>Frontend Developer</h2>
                        <h3 className='text-lg text-muted-foreground'>Another Company</h3>
                    </div>
                    <p className='text-muted-foreground'>2021 - 2023</p>
                </div>
                <p className='text-muted-foreground'>
                    Created responsive UIs with React and implemented state management solutions.
                    Collaborated with designers to implement pixel-perfect interfaces.
                </p>
            </div>
        </div>
    );
}

export default Experience;