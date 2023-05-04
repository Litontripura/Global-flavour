import React from 'react';
import Banner from './Banner';
import ChefPage from '../chefPage/ChefPage';
import SecondBanner from './SeccondBanner/SecondBanner';
import ThirdBanner from './ThirdBanner/ThirdBanner';

const Home = () => {
    return (
        <div>
          
            <Banner></Banner>
            <ChefPage></ChefPage>
            <SecondBanner></SecondBanner>
            <ThirdBanner></ThirdBanner>
        </div>
    );
};

export default Home;