import React, { useState } from "react";

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

  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorited(true);
  };

  return (
    <div className="relative text-left md:grid grid-cols-2 gap-3 mt-5">
      <img
        className="md:w-[500px] h-[250px] rounded w-full  "
        src={photo_url}
        alt=""
      />
      <div className=" bg-orange-500 p-5 rounded">
        <h2 className="font-bold text-white ">{name}</h2>

        <div className="">
          <h1 className="text-xl font-bold text-white">ingredients</h1>
          {ingredients.map((ingre, index) => (
            <p className="text-sm font-bold uppercase">
              {index + 1}..{ingre}
            </p>
          ))}
        </div>
        <div className="">
          <div className="">
            <span className="text-lg font-bold text-white">
              Cooking method
            </span>{" "}
            {cooking_method.length < 50 ? (
              <p className="text-white">{cooking_method}</p>
            ) : (
              <p className="text-white">{cooking_method.slice(0, 50)}...</p>
            )}
          </div>
        </div>
      </div>
      <button
  className={`absolute right-0 bottom-0 py-2 px-3 font-bold rounded-lg ${
    isFavorited ? 'bg-green-500 hover:bg-green-700' : 'bg-slate-400 hover:bg-orange-700'
  } text-white`}
  onClick={handleFavoriteClick}
  disabled={isFavorited}
>
  {isFavorited ? "Favorited" : "Favorite"}
</button>
    </div>
  );
};

export default RecipiesCard;
