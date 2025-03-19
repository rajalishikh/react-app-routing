import React, { useEffect, useState } from 'react';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const Temperature = () => {
    const[temperature,setTemperature]=useState([])
    useEffect(()=>{
        fetch("temperature.json")
        .then(res=>res.json())
        .then(data=>setTemperature(data))
    },[])
  console.log("More Details",temperature)
    
    
    return (
        <div>
            <h1>Here is the highest temperature </h1>
            <AreaChart
          width={1200}
          height={900}
          data={temperature}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="high_temp_celsius" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
            
            
        </div>
    );
};

export default Temperature;