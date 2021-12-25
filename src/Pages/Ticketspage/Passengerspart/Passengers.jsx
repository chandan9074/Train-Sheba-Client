import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import TicketBanner from '../TicketBanner';

const Passengers = () => {
    return ( 
        <div>
            <Navigation />
            <TicketBanner />
            <div className="flex">
                <Link to="/tickets" className="ticket-switch-left-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">1</span>TICKETS</Link>
                <Link to="/passengers" className="ticket-switch-btn bg-gray-500 py-3 ticket-btn  flex justify-center items-center"><span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">2</span>PASSENGERS</Link>
                <Link to="/payment" className="ticket-switch-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"><span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">3</span>PAYMENT</Link>
                <Link to="/validation" className="ticket-switch-right-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">4</span>VALIDATION</Link>
            </div>
        </div>
    );
}
 
export default Passengers;