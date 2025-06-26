import React from 'react';

function Card() {
    return (
        <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 w-full border flex flex-row p-4 rounded-lg shadow-lg bg-neutral-900 hover:bg-neutral-800 transition-all duration-300 group"
        >
            <div className="w-3/4 flex flex-col justify-center pr-4">
                <h1 className="text-2xl mb-2 text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
                    Narrativ
                </h1>
                <p className="text-muted-foreground text-base mt-2 text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                    AI-powered storytelling platform that creates personalized narratives based on user input.
                </p>
            </div>
            <div className="w-1/4 flex justify-end items-center">
                <div className="overflow-hidden rounded-lg">
                    <img
                        src="/src/assets/Screenshot 2025-06-25 183301.png"
                        width={100}
                        alt="project"
                        className="rounded-lg transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
        </a>
    );
}

export default Card;