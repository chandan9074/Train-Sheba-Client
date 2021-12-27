import React from 'react';

const TicketSuccessBanner = () => {
    return ( 
        <div className="ticket-banner-part flex flex-col justify-center items-center">
            <div className='bg-gray-200 px-4 py-8 rounded-full border-8 border-gray-300'>
                <i class="fas fa-handshake text-black text-7xl"></i>
            </div>
            <h1 className='text-gray-200 text-3xl mt-2'>CONGRATULATIONS!</h1>
            <p className='text-xl font-semibold text-gray-300'>YOUR BOOKING PROCESS IS SUCCESSFULLY COMPLETED</p>
        </div>
     );
}
 
export default TicketSuccessBanner;