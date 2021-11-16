import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner';
import EmargencyContact from './EmargencyContact';
import './homepage.css'


const Homepage = () => {
    return ( 
        <div>
            <Navigation />
            <Banner />
            <EmargencyContact />
        </div>
     );
}
 
export default Homepage;