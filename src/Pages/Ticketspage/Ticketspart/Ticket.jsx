import React from 'react';
import { useLocation } from 'react-router';
import TicketBanner from '../TicketBanner';
import Navigation from './../../Shared/Navigation/Navigation'
import { Link} from 'react-router-dom';
import './ticket.css';

const Ticket = () => {
    const {state} = useLocation();
    console.log(state)
    return ( 
        <div>
            <Navigation />
            <TicketBanner />
            <div className="flex">
                <Link to="" className="ticket-switch-left-btn bg-gray-500 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">1</span> TICKETS</Link>
                <Link to="" className="ticket-switch-btn bg-gray-800 py-3 ticket-btn  flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">2</span> PASSENGERS</Link>
                <Link to="" className="ticket-switch-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">3</span> PAYMENT</Link>
                <Link to="" className="ticket-switch-right-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">4</span> VALIDATION</Link>
            </div>
        </div>
     );
}
 
export default Ticket;