import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import TicketBanner from '../TicketBanner';

const Passengers = () => {
    return ( 
        <div>
            <Navigation />
            <TicketBanner />
            <div className="flex overflow-hidden">
                <Link to="" className="ticket-switch-left-btn bg-gray-500 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">1</span>TICKETS</Link>
                <Link to="" className="ticket-switch-btn bg-gray-500 py-3 ticket-btn  flex justify-center items-center"><span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">2</span>PASSENGERS</Link>
                <Link to="" className="ticket-switch-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"><span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">3</span>PAYMENT</Link>
                <Link to="" className="ticket-switch-right-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">4</span>VALIDATION</Link>
            </div>
            <div className='container mb-32'>
                <div className='flex justify-center items-center'>
                    <div className='w-11/12 flex'>
                        <div className='w-1/4 mt-5'>
                            <h3 className='text-2xl'>Ticket</h3>
                            <div className='border-1 border-gray-200 hover:border-red-600 px-4 py-3 mb-2'>    
                                <div className='flex flex-col items-center'>
                                    <i class="fas fa-train text-4xl"></i>
                                    <h4 className='text-lg font-bold text-gray-500'>North Express</h4>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <h3 className='text-xl font-semibold m-0'>07:30p</h3>
                                        <h6 className='text-sm m-0 text-gray-500'>Feb 14 SUN</h6>
                                        <h5 className='text-base m-0'>New York</h5>
                                        <h6 className='text-sm m-0 text-gray-500'>Penn Station, NY</h6>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold m-0'>07:30p</h3>
                                        <h6 className='text-sm m-0 text-gray-500'>Feb 14 SUN</h6>
                                        <h5 className='text-base m-0'>New York</h5>
                                        <h6 className='text-sm m-0 text-gray-500'>Penn Station, NY</h6>
                                    </div>
                                </div>
                                <div className='flex justify-between items-end'>
                                    <div className='flex'>
                                        <i class="fas fa-wifi text-sm text-gray-500"></i>
                                        <i class="far fa-moon text-sm text-gray-500 mx-2"></i>
                                        <i class="fas fa-coffee text-sm text-gray-500"></i>
                                    </div>
                                    <div className='flex'>
                                        <h3 className='m-0'><span className='text-sm text-gray-500'>From</span><span className='text-2xl text-red-600'>$400</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-3/4 mt-5 ml-5'>
                            <div className='w-full'>
                                <div className='flex justify-between'>
                                    <p className='m-0 font-semibold text-gray-500'>12 tickets found</p>
                                    <div className='flex'>
                                        <p className='mb-0 font-semibold text-gray-500 flex items-center cursor-pointer mr-5'><span>Short by time</span><span className='ml-2'><i class="fas fa-sort-down"></i></span></p>
                                        <p className='m-0 font-semibold text-gray-500 cursor-pointer'><span>Show populer 5 tickets </span><span className='ml-2'><i class="fas fa-sort-down"></i></span></p>
                                    </div>
                                </div>
                            </div>
                            {/* {loop.map(loops=>(
                                <div className='mt-3'>
                                    <SingleTicket />
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Passengers;