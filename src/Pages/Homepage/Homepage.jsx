import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner';
import EmargencyContact from './EmargencyContact';
import './homepage.css'
import OnlineTicketing from './OnlineTicketing';
import Review from './Reviewpart/Review';
// import Letest from './Servicepage/LetestDestination';
import LetestDestination from './Servicepage/LetestDestination';


const Homepage = () => {
    return ( 
        <div className="bg-gray-50">
            <Navigation />
            <Banner />
            <EmargencyContact />
            <LetestDestination />
            <OnlineTicketing />
            <Review />
        </div>
     );
}
 
export default Homepage;