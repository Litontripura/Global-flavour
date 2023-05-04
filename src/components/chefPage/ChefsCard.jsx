import React from "react";
import { Link } from "react-router-dom";
import "./ChefsCard.css";

const ChefsCard = ({ chef }) => {
  const {
    id,
    name,
    years_of_experience,
    num_recipes,
    likes,
    picture_url,
   
  } = chef;
  console.log(chef);
  
  return (
    <div className="grid md:grid-cols-3 gap-1">
      <div className="md:col-span-2">
        <img className="rounded-lg h-full" src={picture_url} alt="Album" />
      </div>
      <div className="relative rounded-lg p-3 bg-orange-500 md:ml-5 md:col-span-1 text-left">
        <div className="">
          <h2 className="font-bold text-white text-2xl whitespace-nowrap mt-12">
            {name}
          </h2>
          <p className="font-bold text-white whitespace-nowrap ">
            Experience : {years_of_experience} years
          </p>
          <p className=" text-white font-bold text-xl">
            Recipiecs : {num_recipes}
          </p>
          <p className="text-white font-bold">Likes : {likes}</p>
        </div>

        <div className=" absolute ms-[220px] md:mb-0 md:ms-0 bottom-2 mx-auto">
          <Link to={`/chefs/${id}`}>
            <button className="bg-orange-700 py-2 px-4 rounded-lg w-full mx-auto whitespace-nowrap recipibutton hover:bg-orange-400">
              Vewe Recipies
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefsCard;
