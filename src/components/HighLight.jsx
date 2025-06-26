import React from 'react'
import Card from './Card'

function HighLight() {
    return (
        <div className='animate-fadeIn'>
            <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
                HighLight
            </h1>

            <div className='flex flex-col flex-wrap'>
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default HighLight