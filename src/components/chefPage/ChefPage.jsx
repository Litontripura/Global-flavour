import React, { useEffect, useState } from 'react';

import ChefsCard from './ChefsCard';

const ChefPage = () => {
    const [chefs, setChefs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://assignment-10-server-litontripura.vercel.app/chefs')
            .then(res => res.json())
            .then(data => {
                setChefs(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='mt-10'>
            <h1 className='font-bold text-2xl text-orange-500'>
                Available <span className='text-blue-600'>Chefs</span>
            </h1>

            {isLoading ? (
                <p className='text-4xl font-bold mt-5 text-orange-500'>Loading...</p>
            ) : (
                <div className='grid md:grid-cols-2 gap-5 p-5'>
                    {chefs.map(chef => (
                        <ChefsCard key={chef.id} chef={chef} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ChefPage;
