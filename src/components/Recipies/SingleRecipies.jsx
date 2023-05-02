import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleRecipies = ({resi}) => {
    const {id,cooking_method,name}=resi
    console.log(resi);
  
  
    return (
        <div className='recipiesCard'>
            <h1>{name}</h1>
            <h2>{id}</h2>
        </div>
    );
};

export default SingleRecipies;