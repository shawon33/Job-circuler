import React, { useEffect, useState } from 'react';
import { addToDb,getShoppingCart } from '../Utilites/Utils';
import '../../../public/Job.json'
import JobSingleDt from '../AppliedData/JobSingleDt';

const AppliedJob = () => {
    const [cart, setCart] = useState([])
    const [jobs, setAppliedJob] = useState([]);

    useEffect(() => {
       fetch('Job.json')
          .then(res => res.json())
          .then(data => setAppliedJob(data));
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart =[];
        for(const id in storedCart){
            const savedProduct = jobs.find(job=> job.id === parseInt(id))
            savedCart.push(savedProduct)
        }
        setCart(savedCart);
    },[jobs])
 
    
 

    return (
        <div>
            {
                cart.map(jobs=><JobSingleDt
                key={jobs.id}
                jobs={jobs}
                ></JobSingleDt>)
            }
        </div>
    );
};

export default AppliedJob;