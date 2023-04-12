import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import '../../../public/Job.json'
import { addToDb } from '../Utilites/Utils';

const JobDetails = () => {
    const { jobId } = useParams()
    const [jobs, setJobData] = useState({});
    const data = useLoaderData();
    useEffect(() => {
        if(jobId){
            console.log(typeof jobId)
            const jobDetail = data.find(jobD => jobD.id === parseInt(jobId))
            setJobData(jobDetail)
        }
     
    }, [jobId,data]);

    const handleAddToStore =(id)=>{
        addToDb(id)
    }

   const {id,Job_Description,phone,email,experience,education,title,salary,location,job_Responsibilities}= jobs;
    return (
        <section className='mt-8 '>
            <h1 className='bg-indigo-100 mb-12 text-center text-5xl font-bold p-12'>Job Details</h1>
            <div className='flex justify-between gap-16 w-12/12'>
                <div className='text-left w-50%'>
                    <p className='pb-4'><span className='text-2xl font-bold'>Job-Description:</span><span className='pl-4'>{Job_Description}</span></p>
                    <p className='pb-4'><span className='text-2xl font-bold'>Job-Responsibility:</span><span className='pl-4'>{job_Responsibilities}</span></p>
                    <p className='pb-4'><span className='text-2xl font-bold'>Education:</span><span className='pl-4'>{education}</span></p>
                    <p className='pb-4'><span className='text-2xl font-bold'>Experience:</span><span className='pl-4'>{experience}</span></p>
                </div>

               <div>
               <div className=' p-4 mr-8 '>
                    <div className='p-4 bg-indigo-200 text-left'>
                        <h1 className='pb-4 text-2xl font-bold'>Job-Details</h1>
                        <hr  className='border-2'/>
                        <p className='pb-3 font-bold'>Salary:${salary}K.</p>
                        <p className='pb-3 font-bold'>Job-Title:{title}</p>
                    </div>
                    <div className='p-8 bg-indigo-200 text-left'>
                        <h1 className='pb-4 font-bold text-2xl'>Contact Information</h1>
                        <hr  className='border-2'/>
                        <p><span className='font-bold '>Phone:</span><span className='pl-4'>+880{phone}</span></p>
                        <p><span className='font-bold'>Email:</span><span className='pl-4'>{email}</span></p>
                        <p><span className='font-bold'>Address:</span><span className='pl-4' >{location}</span></p>
                    </div>
                    <button  onClick={()=>handleAddToStore(id)} className='bg-indigo-500 text-white rounded mt-4 py-3 px-24'>Applied Now</button>
                </div>
               </div>
            </div>
        </section>
    );
};


export default JobDetails;