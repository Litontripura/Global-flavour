import { useParams } from 'react-router-dom';
import SingleRecipies from './SingleRecipies';
import { useEffect, useState } from 'react';

const RecipiesPage = () => {
  const [chefsRecipi, setChefsRecipi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://assignment-10-server-litontripura.vercel.app/chefs/${id}`)
      .then(res => res.json())
      .then(data => {
        setChefsRecipi(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <div className='text-4xl font-bold text-orange-600'>Loading...</div>;
  }

  return <SingleRecipies key={chefsRecipi.id} chefsRecipi={chefsRecipi} />;
};

export default RecipiesPage;
