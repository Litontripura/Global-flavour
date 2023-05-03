
import React, { useEffect, useState } from 'react';

import ChefsCard from './ChefsCard';

const ChefPage = () => {
    const [chefs, setChefs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res=>res.json())
        .then(data=>setChefs(data))
        .catch(error=>{
            console.log(error);
        })
    },[])
    
   
    return (
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-orange-500'>Abailable <span className='text-blue-600'>Chefs</span></h1>
           
           <div  className='grid md:grid-cols-2 gap-5 p-5'>
           {
                chefs.map(chef=><ChefsCard
                key={chef.id}
                chef={chef}
                ></ChefsCard>)
            }
           </div>
           
           
        </div>
    );
};

export default ChefPage;