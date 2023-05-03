import React from "react";

const RecipiesCard = ({ resi }) => {
  const {
    id,
    name,
    ingredients,
    cooking_method,
    rating,
    is_favorite,
    photo_url,
  } = resi;

  return (
    <div className="">
        <img className="md:w-[500px] md:h-[350px] md:ml-14" src={photo_url} alt="" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default RecipiesCard;
