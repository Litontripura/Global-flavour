import React from 'react';
import Banner from './Banner';
import ChefPage from '../chefPage/ChefPage';

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <ChefPage></ChefPage>
        </div>
    );
};

export default Home;