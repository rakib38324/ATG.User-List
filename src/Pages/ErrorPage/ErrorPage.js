import React from 'react';
import { Link } from 'react-router-dom';
import errorPage from './errorPage.webp'
const ErrorPage = () => {
    return (
        <div className='w-full'>
            <Link to='/' className='animate-pulse flex justify-center  rounded-lg p-3 bg-slate-400 mx-auto font-bold text-2xl my-5'>Press & Back To Home</Link>
            <img className='w-full' src={errorPage} alt="errorpage" />
            
        </div>
    );
};

export default ErrorPage;