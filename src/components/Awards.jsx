import React from 'react';

function Awards() {
    return (
        <div className='mt-10'>
            <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                Awards
            </h1>

            <div className='mt-8 space-y-6'>
                <div className='group flex flex-row justify-between items-center transition-all duration-300 hover:bg-neutral-900 p-4 rounded-lg'>
                    <div>
                        <h2 className='text-xl font-bold group-hover:text-blue-500 transition-colors duration-300'>
                            Best Hackathon Project
                        </h2>
                        <h3 className='text-lg text-muted-foreground'>Tech Conference 2023</h3>
                    </div>
                    <p className='text-muted-foreground'>2023</p>
                </div>

                <div className='group flex flex-row justify-between items-center transition-all duration-300 hover:bg-neutral-900 p-4 rounded-lg'>
                    <div>
                        <h2 className='text-xl font-bold group-hover:text-blue-500 transition-colors duration-300'>
                            Open Source Contributor
                        </h2>
                        <h3 className='text-lg text-muted-foreground'>GitHub Awards</h3>
                    </div>
                    <p className='text-muted-foreground'>2022</p>
                </div>
            </div>
        </div>
    );
}

export default Awards;