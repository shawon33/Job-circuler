import React from 'react';
import '../css/Data.css'

const Data = ({ data }) => {
    const { image, name, number } = data;
    return (
        <div className='bg-indigo-100 rounded pl-4  w-80 md:text-left'>
            <div className='mt-4'>
                <img className='img rounded' src={image} alt="" />
                <div className='text-left'>
                    <h1 className=' text-2xl font-bold pt-3'>{name}</h1>
                    <p className=' text-golden-200 pt-2'>{number} Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default Data;