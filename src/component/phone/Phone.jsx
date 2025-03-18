import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';


const Phone = () => {
    const[phone_data,setPhoneData]=useState([])
   useEffect(()=>{
    axios("https://openapi.programming-hero.com/api/phones?search=iphone")
    .then(data=>{
        console.log(data.data.data)
        const my_Phone_data=data.data.data
        const phone_with_fake_data=my_Phone_data.map(item=>{
            const obj={
                name:item.phone_name,
                price:parseInt(item.slug.split("-")[1])
            }
            return obj
        })
        setPhoneData(phone_with_fake_data)
    })
   
    },[])
    console.log(phone_data)
    return (
        <div>
            <BarChart
          width={1200}
          height={300}
          data={phone_data}
         
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="name" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="price" fill="#82ca9d" />
        </BarChart>
            
        </div>
    );
};

export default Phone;