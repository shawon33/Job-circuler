import React, { useEffect, useState } from 'react';
import { addToDb,getShoppingCart } from '../Utilites/Utils';
import '../../../public/Job.json'
import JobSingleDt from '../AppliedData/JobSingleDt';

const AppliedJob = () => {
    const [cart, setCart] = useState([])
    const [jobSal, setAppliedJob] = useState([]);

    useEffect(() => {
       fetch('Job.json')
          .then(res => res.json())
          .then(data => setAppliedJob(data));
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart =[];
        for(const id in storedCart){
            const savedProduct = jobSal.find(job=> job.id === parseInt(id))
            if(savedProduct){
                const quantity = storedCart[id];
                savedProduct.quantity=quantity;
                savedCart.push(savedProduct);
            }
            
        }
        setCart(savedCart);
    },[jobSal])
 
    // console.log(cart)

    return (
        <div className='mt-24  p-4 mb-8 gap-3'>
           
            {
                    cart.map(job => <JobSingleDt
                           key={job.id}
                           job={job}
                        ></JobSingleDt>)
                     }
        </div>
    );
};

export default AppliedJob;