import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import TicketInstruction from './TicketInstruction';
import TicketSuccessBanner from './TicketSuccessBanner';

const TicketSuccess = () => {
    return ( 
        <div>
            <Navigation />
            <TicketSuccessBanner />
            <TicketInstruction />
        </div>
     );
}
 
export default TicketSuccess;