import React from 'react';
import './applied.css'

const JobSingleDt = ({ job }) => {
   
    const { img, name, title, location, Working_zone, time_zone } = job;
    return (
        <div className=' gap-3'>
            <div className='border bg-indigo-50 flex justify-between mt-18 '>
            <div className='flex p-2'>
                <img className='img' src={img} alt="" />
                <div className='pl-8 text-left pt-6'>
                    <h1>{title}</h1>
                    <p>{name}</p>
                    <div className='flex gap-4'>
                        <h1 className='rounded text-white bg-indigo-400 p-1'>{Working_zone}</h1>
                        <h1 className='rounded text-white bg-indigo-400 p-1'>{time_zone}</h1>
                    </div>
                    <p>{location}</p>
                </div>
            </div>
            <div className='mx-8 my-16'>
                <button className='border rounded text-white bg-indigo-500 align-center px-8 py-2 '>Details</button>
                </div>
        </div>
        <br />
        </div>
    );
};

export default JobSingleDt;