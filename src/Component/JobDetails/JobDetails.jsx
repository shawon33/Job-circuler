import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
 const jobDetails = useLoaderData()
 console.log(jobDetails)
    return (
        <div>
            <h1>this is details</h1>
        </div>
    );
};

export default JobDetails;