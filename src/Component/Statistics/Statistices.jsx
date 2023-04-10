import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ScatterChart } from 'recharts';

const Statistices = () => {
    const data = [
        {
            id: 1,
            name: "A-1",
            number: 48,
        },
        {
            id: 2,
            name: "A-2",
            number: 58,
        },
        {
            id: 3,
            name: "A-3",
            number: 56,
        },
        {
            id: 4,
            name: "A-4",
            number: 20,
        },
        {
            id: 5,
            name: "A-5",
            number: 47,
        },
        {
            id: 6,
            name: "A-6",
            number: 42,
        },
        {
            id: 7,
            name: "A-7",
            number: 57,
        }
    ]
    return (
        <div className='mt-12'>
            <h1 className='text-5xl font-bold mb-5'>Area Chart of Assignment</h1>
            <AreaChart
                width={1200}
                height={600}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistices;