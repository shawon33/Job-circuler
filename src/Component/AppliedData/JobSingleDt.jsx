import React from 'react';

const JobSingleDt = ({jobs}) => {
    const{img,name,title,location,Working_zone,time_zone} =jobs;
    return (
        <div>
           <h1>{title}</h1>
        </div>
    );
};

export default JobSingleDt;