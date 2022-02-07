import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router';

import Navigation from './../../Shared/Navigation/Navigation';
import TicketBanner from './../TicketBanner';
import Footer from './../../Shared/Footer/Footer'
import './validation.css';
import { useState } from 'react';
import { useEffect } from 'react';
import TrainCard from '../../Shared/TrainCard/TrainCard';
// import { useStripe } from '@stripe/react-stripe-js';

const Validation = () => {
    const [tickeNo, setTicketNo] = useState();
    // const [clientsecret, setClientsecret] = useState("");
    // const stripe = useStripe();
    const navigate = useNavigate();
    const {state} = useLocation();
    const parseticket = parseInt(state.userData.passengers);
    const parseprice = parseInt(state.train.price);
    const newUpdatePrice = parseprice * parseticket;
    // console.log(parseprice, parseticket);
    console.log("validation state", state);

    // const onSubmit = data =>console.log(data);
    const handleBuyTicket = async () =>{
        navigate('/ticketsuccess')
    }

    const handleBack = ()=>{
        navigate("/payment", {state:state});
    }

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return ( 
        <div>
            <Navigation />
            <TicketBanner />
            <div className="flex overflow-hidden">
                <Link to="" className="ticket-switch-left-btn bg-gray-500 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white"><i class="fas fa-check correct-sign"></i></span>TICKETS</Link>
                <Link to="" className="ticket-switch-btn bg-gray-500 py-3 ticket-btn  flex justify-center items-center"><span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white"><i class="fas fa-check correct-sign"></i></span>PASSENGERS</Link>
                <Link to="" className="ticket-switch-btn bg-gray-500 py-3 ticket-btn flex justify-center items-center"><span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white"><i class="fas fa-check correct-sign"></i></span>PAYMENT</Link>
                <Link to="" className="ticket-switch-right-btn bg-gray-500 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm font-bold">4</span>VALIDATION</Link>
            </div>
            <div className='container mb-32'>
                <div className='flex justify-center items-center'>
                    <div className='w-11/12 flex'>
                        <div className='w-1/4 mt-5'>
                            <h3 className='text-2xl'>Train</h3>
                            <TrainCard state={state} />
                        </div>
                        <div className='w-3/4 mt-5 ml-5'>
                            <div>
                                <h1 className='text-2xl'>Passenger Information</h1>
                                    <div className='flex border-1 border-gray-200 hover:border-red-600'>
                                        <div className='w-1/3 p-4 border-r border-gray-200'>
                                            <h3 className='text-lg m-0'>Name</h3>
                                            <h5 className='text-base'>{state.passInfo.name}</h5>
                                            <h3 className='text-lg m-0'>Email</h3>
                                            <h5 className='text-base break-words'>{state.passInfo.email}</h5>
                                            <h3 className='text-lg m-0'>Age</h3>
                                            <h5 className='text-base'>{state.passInfo.age}</h5>
                                        </div>
                                        <div className='w-1/3 p-4 border-r border-gray-200'>
                                            <h3 className='text-lg m-0'>NID Number</h3>
                                            <h5 className='text-base'>{state.passInfo.nid}</h5>
                                            <h3 className='text-lg m-0'>Date</h3>
                                            <h5 className='text-base'>{today}</h5>
                                            <h3 className='text-lg m-0'>Number of Tickets</h3>
                                            <h5 className='text-base'>{state.userData.passengers}</h5>
                                        </div>
                                        <div className='w-1/3 p-4'>
                                            <h3 className='text-lg m-0'>Total Cost</h3>
                                            <h5 className='text-2xl text-red-600 font-semibold'>${newUpdatePrice}</h5>                                            
                                            {/* <Link to="" class="update-btn mt-3"><span class="text">Update</span><span class="icon"><i class="fas fa-pen-fancy"></i></span></Link> */}
                                        </div>
                                    </div>
                                    <h1 className='text-2xl mt-4'>Payment Information</h1>
                                    <div className='flex border-1 border-gray-200 hover:border-red-600 mt-3'>
                                        <div className='w-2/3 p-4 border-r border-gray-200'>
                                            <h3 className='text-lg m-0'>Card Brand</h3>
                                            <h5 className='text-base'>{state.paymentMethod.card.brand}</h5>
                                            <h3 className='text-lg m-0'>Payment ID</h3>
                                            <h5 className='text-base'>{state.paymentMethod.id}</h5>
                                        </div>
                                        <div className='w-1/3 p-4'>
                                            <h3 className='text-lg m-0'>Payment Status</h3>
                                            <h5 className='text-base text-green-600 font-semibold'>Successfully paid</h5>                                            
                                            
                                        </div>
                                    </div>     
                                    {/* <Link  to=""> */}
                                    <div className='flex items-center justify-between mt-3'>
                                        <button onClick={handleBack} className='back-btn'>
                                            <div className='flex items-center justify-center'>
                                                <i class="fas fa-angle-double-left left-arrow"></i>
                                                <span>Back</span>
                                            </div>
                                        </button>
                                        <button onClick={handleBuyTicket}type="submit" className='buy-now-btn'>
                                            <span>Done</span>
                                        </button>
                                        {/* <button type='submit' className='buy-now-btn'>
                                            <span>Next</span>
                                        </button> */}
                                    </div>
                                    {/* </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Validation;