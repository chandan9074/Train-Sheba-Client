import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router';

import Navigation from './../../Shared/Navigation/Navigation';
import TicketBanner from './../TicketBanner';
import Footer from './../../Shared/Footer/Footer'
import './validation.css';
import { useState } from 'react';
import { useEffect } from 'react';
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

    // useEffect(()=>{
    //     fetch("http://localhost:5000/create-payment-intent", {
    //         method:"POST",
    //         headers:{
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({newUpdatePrice})
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         setClientsecret(data.clientSecret)
    //         // console.log("client",data.clientSecret);
    //     })
    // }, [state.train.peice]);

    const onSubmit = data =>console.log(data);
    const handleBuyTicket = async () =>{
        // console.log(clientsecret);
        // const {paymentIntent, error} = await stripe.confirmCardPayment(
        //     clientsecret,
        //     {
        //         payment_method: {
        //         card: state.card,
        //         billing_details: {
        //             name: state.passInfo.name,
        //             email: state.passInfo.email
        //         },
        //         },
        //     },
        //     );

        //     if(error){
        //         console.log(error.message)
        //     }
        //     else{
        //         console.log(paymentIntent);
        //     }
        // navigate('/ticketsuccess')
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
                            <div className='border-1 border-gray-400 hover:border-red-600 px-4 py-3 mb-2 bg-gray-200'>    
                                <div className='flex flex-col items-center'>
                                    <i class="fas fa-train text-4xl"></i>
                                    <h4 className='text-lg font-bold text-gray-600'>North Express</h4>
                                </div>
                                <div className='flex justify-between'>
                                    <div>
                                        <h3 className='text-xl font-semibold m-0'>07:30p</h3>
                                        <h6 className='text-sm m-0 text-gray-500'>Feb 14 SUN</h6>
                                        <h5 className='text-base m-0'>New York</h5>
                                        <h6 className='text-sm m-0 text-gray-500'>Penn Station, NY</h6>
                                    </div>
                                    <div>
                                        <h3 className='text-xl font-semibold m-0 text-right'>07:30p</h3>
                                        <h6 className='text-sm m-0 text-gray-500 text-right'>Feb 14 SUN</h6>
                                        <h5 className='text-base m-0 text-right'>New York</h5>
                                        <h6 className='text-sm m-0 text-gray-500 text-right'>Penn Station, NY</h6>
                                    </div>
                                </div>
                                <hr className='mb-0' />
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
                            <div>
                                <h1 className='text-2xl'>Passenger Information</h1>
                                    <div className='flex border-1 border-gray-200 hover:border-red-600'>
                                        <div className='w-1/3 p-4 border-r border-gray-200'>
                                            <h3 className='text-lg m-0'>Name</h3>
                                            <h5 className='text-base'>{state.passInfo.name}</h5>
                                            <h3 className='text-lg m-0'>Email</h3>
                                            <h5 className='text-base'>{state.passInfo.email}</h5>
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
                                            <Link to="" class="update-btn mt-3"><span class="text">Update</span><span class="icon"><i class="fas fa-pen-fancy"></i></span></Link>
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
                                            <h3 className='text-lg m-0'>Total Cost</h3>
                                            <h5 className='text-2xl text-red-600 font-semibold'>${newUpdatePrice}</h5>                                            
                                            <button onClick={handleBuyTicket}type="submit" className='buy-now-btn'>
                                                <span>Buy Ticket</span>
                                            </button>
                                        </div>
                                    </div>     
                                    {/* <Link  to=""> */}
                                    <div className='flex items-center justify-between mt-3'>
                                        <Link to="/payment" className='back-btn'>
                                            <div className='flex items-center justify-center'>
                                                <i class="fas fa-angle-double-left left-arrow"></i>
                                                <span>Back</span>
                                            </div>
                                        </Link>
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