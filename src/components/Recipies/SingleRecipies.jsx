import { useEffect, useState } from 'react';
import RecipiesCard from './RecipiesCard';

const SingleRecipies = (props) => {
    const [allRecipi, setAllRecipi]=useState([])
    const {name, id, picture_url, all_recipes} = props.chefsRecipi
    useEffect(()=>{
        fetch(`http://localhost:5000/resi/${id}`)
        .then(res=>res.json())
        .then(data=>setAllRecipi(data))
    },[])
    
    
  
    return (
        <div className='mx-center'>
            <h1 className='text-xl font-bold'>{name}</h1>
            <img className='w-[300px]' src={picture_url} alt="" />
       <div className='grid grid-cols-3'>
       {
        allRecipi?.map(resi=><RecipiesCard
        key={resi.id}
        resi={resi}
        ></RecipiesCard>)
       }
       </div>
        </div>
    );
};

export default SingleRecipies;