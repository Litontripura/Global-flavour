import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipies from './SingleRecipies';

const RecipiesPage = () => {
    const [chefsRecipi, setChefsRecipi]= useState([])
    const {id}= useParams()

    useEffect(()=>{
      fetch(`http://localhost:5000/chefs/${id}`)
      .then(res=>res.json())
      .then(data=>setChefsRecipi(data.recipes))
    },[])

   
  

    return (
        <div >
            <h1>All recipies</h1>
            <div className='grid grid-cols-3'>
                        
        {
            chefsRecipi.map(resi=> <SingleRecipies
            key={resi.id}
            resi={resi}
            ></SingleRecipies>)
        }
            </div>
    
        </div>
    );
};

export default RecipiesPage;