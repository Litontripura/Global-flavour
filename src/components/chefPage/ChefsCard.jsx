import React from 'react';

const ChefsCard = ({chef}) => {
    const {id,name,years_of_experience,num_recipes,likes,picture_url,recipes}= chef;
    return (
        <div className="card lg:card-side bg-base-100 shadow-2xl">
  <figure><img className='w-full h-full' src={picture_url} alt="Album"/></figure>
  <div className="card-body p-5 bg-orange-500 text-wh">
    <h2 className="card-title">{name}</h2>
    <p>{years_of_experience}</p>
    <p>Recipiecs {num_recipes}</p>

    <div className="card-actions justify-center">
      <button className="btn btn-primary">Vew Recipies</button>
    </div>
  </div>
</div>
    );
};

export default ChefsCard;