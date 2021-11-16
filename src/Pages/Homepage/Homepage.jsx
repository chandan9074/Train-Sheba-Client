import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner';
import EmargencyContact from './EmargencyContact';
import './homepage.css'
// import Letest from './Servicepage/LetestDestination';
import LetestDestination from './Servicepage/LetestDestination';


const Homepage = () => {
    return ( 
        <div className="bg-gray-100">
            <Navigation />
            <Banner />
            <EmargencyContact />
            <LetestDestination />
        </div>
     );
}
 
export default Homepage;