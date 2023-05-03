import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipies from './SingleRecipies';

const RecipiesPage = () => {
    const [chefsRecipi, setChefsRecipi]= useState([])

    const {id}= useParams()
    const alldata = useLoaderData()
    console.log(alldata);
     

    useEffect(()=>{
      fetch(`http://localhost:5000/chefs/${id}`)
      .then(res=>res.json())
      .then(data=>setChefsRecipi(data))
    },[])

   
  

    return (
        <>
       
       
            <SingleRecipies
              key={chefsRecipi.id}
              chefsRecipi={chefsRecipi}
              
               ></SingleRecipies>
         
       
        
            </>
    
       
    );
};

export default RecipiesPage;