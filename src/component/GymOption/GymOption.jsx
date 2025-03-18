import { useEffect, useState } from "react";
import GymDetails from "../GymDetails/GymDetails";

const GymOption = () => {
    const[gym,setGym]=useState([])
    useEffect(()=>{
        fetch('gym.json')
        .then(res=>res.json())
        .then(data=>setGym(data))
    },[])
    return (
        <div className="mt-7 max-w-7xl mx-auto grid grid-cols-3 gap-3">
            
            {
                gym.map(item=><GymDetails key={item.id} item={item}></GymDetails>)
            }

            
        </div>
    );
};

export default GymOption;