import React from 'react';
import LetestDestination from '../../Homepage/Servicepage/LetestDestination';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import TicketInstruction from './TicketInstruction';
import TicketSuccessBanner from './TicketSuccessBanner';

const TicketSuccess = () => {
    return ( 
        <div className='bg-gray-50'>
            <Navigation />
            <TicketSuccessBanner />
            <TicketInstruction />
            <LetestDestination />
            <Footer />
        </div>
     );
}
 
export default TicketSuccess;