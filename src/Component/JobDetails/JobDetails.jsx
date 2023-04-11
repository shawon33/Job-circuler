import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import '../../../public/Job.json'

const JobDetails = () => {
    const {jobId} = useParams()
    // const jobString = parseInt(jobId);
    // console.log(typeof jobString)
    
    const [jobs, setJobData] = useState({});

    useEffect(() => {
        fetch('./../../../public/Job.json')
         .then(res => res.json())
         .then(data => {
            const jobDetail = data.find(jobD => jobD.id === parseInt(jobId))
            setJobData(jobDetail)
         });
    }, []);

    return (
        <div>
            <h1>sha:{jobs.name} </h1>
        </div>
    );
};

export default JobDetails;