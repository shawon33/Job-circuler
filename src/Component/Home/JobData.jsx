import React from 'react';
import "./../css/Job.css"
import { Link } from 'react-router-dom';

const JobData = ({ job }) => {
   const { img, name, Working_zone, time_zone, location, title, id, salary } = job;
   return (
      <div className=' text-left mb-4 border'>
         <div className='p-4' >
            <img className='img' src={img} alt="" />
            <p className='text-3xl font-bold'>{title}</p>
            <p>{name}</p>
            <div className=' flex  text-white '>
               <p className='  rounded bg-indigo-400 p-2' > {Working_zone}</p>
               <p className='ml-4   rounded bg-indigo-400 p-2'> {time_zone}</p>
            </div>
            <div className='flex justify-between'>
               <p>Location:  <span className='text-3xl font-bold'>{location}</span></p>
               <p>salary:{salary}$</p>
            </div>
            <button className='border rounded text-white bg-indigo-500 p-2'><Link to={`/job/${id}`}>Show Details</Link></button>
         </div>
      </div>
   );
};

export default JobData;