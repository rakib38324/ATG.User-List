import React from 'react';

const Loading = () => {
    return (

        <div className='flex justify-center items-center h-full my-52 '>
            <p className='text-5xl font-bold  text-blue-700'>L</p>
            <div className='w-8 h-8 border-8 mt-2 border-dashed rounded-full animate-spin  border-blue-800'></div>
            <p className='text-5xl font-bold   text-blue-700'>a</p>
            <p className='text-5xl font-bold   text-blue-700'>d</p>
            <p className='text-5xl font-bold   text-blue-700'>i</p>
            <p className='text-5xl font-bold   text-blue-700'>n</p>
            <p className='text-5xl font-bold   text-blue-700'>g</p>
            <p className='text-5xl font-bold  animate-pulse text-blue-700'>.</p>
            <p className='text-5xl font-bold  animate-pulse text-blue-700'>.</p>
            <p className='text-5xl font-bold  animate-pulse text-blue-700'>.</p>

        </div>

    )
};

export default Loading;