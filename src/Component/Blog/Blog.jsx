import React from 'react';

const Blog = () => {
    return (
        <section className='text-left mt-16'>
            <div className='border rounded bg-indigo-200 p-8'>
                <p className='text-red-500  text-2xl font-bold'>1. Question: <span className='text-black'>When should you <span className='text-yellow-500'>Context</span> api ?</span></p>
                <p className='mt-4 text-2xl font-bold text-green-500'> @Answer: <span className='text-black'>Context api use when you need to avoid prop drilling . Prop drilling is very hard and difficult to maintain in large applications </span></p>
            </div>
            <br />
            <div className='border rounded bg-indigo-200 p-8'>
                <p className='text-red-500  text-2xl font-bold'>2. Question: <span className='text-black'>What is  <span className='text-yellow-500'>Custom</span> Hooks ?</span></p>
                <p className='mt-4 text-2xl font-bold text-green-500'> @Answer: <span className='text-black'>Custom Hook is a java script function and it is using a prefix "use" . Exp: <span className='text-yellow-500'>(useEffect,useState e.t.c)</span> . Custom hooks can work complex logic, making it easier to reuse code in different parts of your application. </span></p>
            </div>
        </section>
    );
};

export default Blog;