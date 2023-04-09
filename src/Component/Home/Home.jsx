import React from 'react';
import img from './img.jpg'
import { useLoaderData } from 'react-router-dom';
import Data from './Data';
const Home = () => {
   const datas= useLoaderData();
   return (
      <header> 
         {/* section-1 */}
         <section className='bg-indigo-50 md:flex justify-between mt-12 ' >
            <div className='m-12'>
               <h1 className='text-5xl font-bold md:text-left'>One Step <br /> Closer To Your <br /> <span className='text-indigo-400'>Dream Jobs</span></h1>
               <p className='md:text-left pt-2'>It's a particular project or task, or the opportunity <br /> to work with a particular colleague or team, <br /> let your passion for that aspect of your <br /> job fuel your motivation.</p>
               <button className=' text-white bg-indigo-400 rounded p-3 m-3'>Get Started</button>
            </div>
            <div>
               <img src={img} alt="" />
            </div>
         </section>
         {/* section-2 */}

         <section className='mt-24'>
            <h1 className='text-5xl font-bold '>Job Category List </h1>
            <p className='font-normal pt-6'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='mt-8 md:flex  justify-between gap-12  h-44'>
                
                   {
                     datas.map(data => <Data
                         key={data.id}
                         data={data}
                     ></Data>)
                 }
                
            </div>
         </section>
      </header>
   );
};

export default Home;