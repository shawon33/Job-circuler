import React from 'react';

const JobSingleDt = ({sala}) => {
    const{img,name,title,location,Working_zone,time_zone} = sala;
    return (
        <div >
           <h1>{title}</h1>
        </div>
    );
};

export default JobSingleDt;