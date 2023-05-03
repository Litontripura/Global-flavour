import { useEffect, useState } from "react";
import RecipiesCard from "./RecipiesCard";

const SingleRecipies = (props) => {
  const [allRecipi, setAllRecipi] = useState([]);
  const { name, id, picture_url,bio, all_recipes,years_of_experience, num_recipes,likes } = props.chefsRecipi;
  useEffect(() => {
    fetch(`http://localhost:5000/resi/${id}`)
      .then((res) => res.json())
      .then((data) => setAllRecipi(data));
  }, []);

  return (
    <div className="grid justify-center">
      <div className="md:grid grid-cols-2 justify-center items-center p-12 text-left">
        <div>
          <img className="w-[500px] rounded-lg py-6" src={picture_url} alt="" />
        </div>
        <div className="">
          <h1 className="text-4xl font-bold  py-5 ">{name}</h1>
          <p className="font-bold  text-lg">{bio}</p>
          <p className="text-xl font-bold pt-5">Likes : {likes}</p>
          <p className="py-3 text-lg font-bold ">Total Recipies : {num_recipes}</p>
        </div>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-blue-600">{name} Recipies</h1>
        <div className="md:grid grid-cols-2 gap-12 p-12 justify-center">
          {allRecipi?.map((resi) => (
            <RecipiesCard key={resi.id} resi={resi}></RecipiesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipies;
