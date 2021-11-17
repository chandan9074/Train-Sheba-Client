import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner';
import EmargencyContact from './EmargencyContact';
import './homepage.css'
import LetestNews from './LetestNewspart/LetestNews';
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
            <LetestNews />
            <OnlineTicketing />
            <Review />
            <Footer />
        </div>
     );
}
 
export default Homepage;