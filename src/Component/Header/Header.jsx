import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <nav className=' md:flex  justify-between text-center'>
            <h1 className='text-5xl font-bold text-green-400'>Job <span className='text-3xl font-bold text-sky-400'>Circular</span></h1>
            <div className='pl-4  md:flex justify-center text-center gap-4 m-auto '>
                <Link to="/">Home</Link>
                <Link to="statistics">Statistics</Link>
                <Link to="appliedJob">Applied Job</Link>
                <Link to="blog">Blog</Link>
            </div>
            <button className='text-2xl  text-white  bg-indigo-400 rounded p-4'>star Applying</button>
        </nav>

    );
};

export default Header;