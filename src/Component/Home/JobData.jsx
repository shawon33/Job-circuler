import React from 'react';
import "./../css/Job.css"

const JobData = ({job}) => {
    const {img,name,Working_zone,time_zone,location,title,id} =job;
    return (
        <div className=' text-left mb-4 border'>
           <div >
           <img className='img' src={img} alt="" />
            <p className='text-3xl font-bold'>{title}</p>
            <p>{name}</p>
            <div className=' flex  text-white '>
               <p className='  rounded bg-indigo-400' > {Working_zone}</p>
               <p className='ml-4   rounded bg-indigo-400'> {time_zone}</p>
            </div>
              <p>Location:  <span className='text-3xl font-bold'>{location}</span></p>
           </div>
        </div>
    );
};

export default JobData;