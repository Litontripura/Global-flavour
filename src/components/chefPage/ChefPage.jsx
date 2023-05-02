
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
        <div className='grid grid-cols-3 gap-4'>
           
            {
                chefs.map(chef=><ChefsCard
                key={chef.id}
                chef={chef}
                ></ChefsCard>)
            }
           
           
        </div>
    );
};

export default ChefPage;