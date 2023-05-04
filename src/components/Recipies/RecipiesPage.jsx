
import { useParams } from 'react-router-dom';
import SingleRecipies from './SingleRecipies';
import { useEffect, useState } from 'react';

const RecipiesPage = () => {
    const [chefsRecipi, setChefsRecipi]= useState([])

    const {id}= useParams()
   

    useEffect(()=>{
      fetch(`https://assignment-10-server-litontripura.vercel.app/chefs/${id}`)
      .then(res=>res.json())
      .then(data=>setChefsRecipi(data))
    },[])

   
  console.log(chefsRecipi);

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