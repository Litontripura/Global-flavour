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
// Each recipe info should contain the recipe name, ingredients (at least 5), cooking method, rating, and a Favorite button. Show at least 3 recipes. for each chef. If needed, you can have duplicate recipes for each chef
  return (
    <div className="relative text-left md:grid grid-cols-2 gap-3">
        <img className="md:w-[500px] h-[250px] rounded w-full  " src={photo_url} alt="" />
      <div className=" bg-orange-500 p-5 rounded">
        <h2 className="font-bold text-white ">{name}</h2>
        
     <div className="">
      <h1 className="text-xl font-bold text-white">ingredients</h1>
         {ingredients.map((ingre, index)=><p className="text-sm font-bold uppercase">{index+1}..{ingre}</p>)}
     </div>
        <div className="">
          <div className=""><span className="text-lg font-bold text-white">Cooking method</span> {cooking_method.length < 50 ? <p className="text-white">{cooking_method}</p> :
                        <p className="text-white">{cooking_method.slice(0, 50)}...</p>
                    }</div>
         
        </div>
      </div>
      <button className="absolute left-0 bottom-0 py-2 px-3 bg-orange-500 hover:bg-orange-700 text-white font-bold rounded-lg">Favorite</button>
    </div>
  );
};

export default RecipiesCard;
