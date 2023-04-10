import React, { useEffect, useState } from 'react';
import img from './img.jpg'
import { useLoaderData } from 'react-router-dom';
import Data from './Data';
import "../../../public/Job.json"
import JobData from './JobData';

const Home = () => {
   const datas = useLoaderData();

   const [jobs, setJbData] = useState([]);

   useEffect(() => {
      fetch('Job.json')
         .then(res => res.json())
         .then(data => setJbData(data));
   }, []);



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
            <div className='sm:mb-8 mt-8 md:flex  justify-between gap-12  h-44 '>

               {
                  datas.map(data => <Data
                     key={data.id}
                     data={data}
                  ></Data>)
               }

            </div>
            <section className='m-auto md:pt-24'>
               <div className='pl-8'>
                  <div>
                     <h1 className='text-5xl font-bold '>Featured Jobs</h1>
                     <p className=' pt-8'>You will try your best this section</p>
                  </div>
                  <div className='md:grid grid-cols-2 gap-6 pt-6 pl-8'>
                     {
                        jobs.map(job => <JobData
                           key={job.id}
                           job={job}
                        ></JobData>)
                     }
                  </div>
               </div>
            </section>
         </section>
      </header>
   );
};

export default Home;