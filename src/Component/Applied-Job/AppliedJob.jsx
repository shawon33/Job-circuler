import React, { useEffect, useState } from 'react';
import { addToDb,getShoppingCart } from '../Utilites/Utils';
import '../../../public/Job.json'
import JobSingleDt from '../AppliedData/JobSingleDt';

const AppliedJob = () => {
    const [cart, setCart] = useState([])
    const [jobSala, setAppliedJob] = useState([]);

    useEffect(() => {
       fetch('Job.json')
          .then(res => res.json())
          .then(data => setAppliedJob(data));
    }, []);

    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart =[];
        for(const id in storedCart){
            const savedProduct = jobSala.find(job=> job.id === parseInt(id))
            if(savedProduct){
                const quantity = storedCart[id];
                savedProduct.quantity=quantity
                savedCart.push(savedProduct)
            }
            
        }
        setCart(savedCart);
    },[jobSala])
 

    return (
        <div>
            <h1>Applied job: {cart.length}</h1>
        </div>
    );
};

export default AppliedJob;