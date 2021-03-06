import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';
import TicketBanner from '../TicketBanner';
import Footer from '../../Shared/Footer/Footer';
import './passenger.css';
import TrainCard from '../../Shared/TrainCard/TrainCard';

const Passengers = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const {state} = useLocation();
    const {user} = useAuth();
    console.log("train", state);

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    const handleBack = ()=>{
        navigate("/tickets", {state:state});
    }

    const onSubmit = data =>navigate("/payment", {state:{passInfo: data, train:state.train, userData: state.userData, sitResult:state.sitResult}});
    return ( 
        <div>
            <Navigation />
            <TicketBanner />
            <div className="flex overflow-hidden">
                <Link to="" className="ticket-switch-left-btn bg-gray-500 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white"><i class="fas fa-check correct-sign"></i></span>TICKETS</Link>
                <Link to="" className="ticket-switch-btn bg-gray-500 py-3 ticket-btn  flex justify-center items-center"><span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white font-bold text-sm">2</span>PASSENGERS</Link>
                <Link to="" className="ticket-switch-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"><span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white font-bold text-sm">3</span>PAYMENT</Link>
                <Link to="" className="ticket-switch-right-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white font-bold text-sm">4</span>VALIDATION</Link>
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
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className=''>
                                        <div className='flex p-4 border-1 border-gray-200'>
                                            <div className='w-1/3'>
                                                <label htmlFor="" className='text-lg font-semibold'>Name <sup className='text-red-700 text-xl'>*</sup></label><br />
                                                <input value={user.displayName} {...register("name")} className='border-1 border-gray-200 focus:outline-none  focus:border-red-600 py-2 px-3 w-full shadow-md mt-2 rounded' placeholder='Enter Your Name' required readOnly />
                                            </div>
                                            <div className='w-1/3 mx-5'>
                                                <label htmlFor="" className='text-lg font-semibold'>Email<sup className='text-red-700 text-xl'>*</sup></label><br />
                                                <input value={user.email} {...register("email")} className='border-1 border-gray-200 focus:outline-none  focus:border-red-600 py-2 px-3 w-full shadow-md mt-2 rounded' placeholder='Enter Your Email' required readOnly />
                                            </div>
                                            <div className='w-1/3'>
                                                <label htmlFor="" className='text-lg font-semibold'>Age<sup className='text-red-700 text-xl'>*</sup></label><br />
                                                <input type="number"  {...register("age")} className='border-1 border-gray-200 focus:outline-none  focus:border-red-600 py-2 px-3 w-full shadow-md mt-2 rounded' placeholder='Enter your age' required />
                                            </div>
                                        </div>
                                        <div className='flex p-4 border-1 border-gray-200'>
                                            <div className='w-1/3'>
                                                <label htmlFor="" className='text-lg font-semibold'>No of Tickets<sup className='text-red-700 text-xl'>*</sup></label><br />
                                                <input type="number" {...register("ticket")} className='border-1 border-gray-200 focus:outline-none  focus:border-red-600 py-2 px-3 w-full shadow-md mt-2 rounded' placeholder='Enter number of passenger' value={state.userData.passengers} required />
                                            </div>
                                            <div className='w-1/3 mx-5'>
                                                <label htmlFor="" className='text-lg font-semibold'>NID Number<sup className='text-red-700 text-xl'>*</sup></label><br />
                                                <input {...register("nid")} className='border-1 border-gray-200 focus:outline-none  focus:border-red-600 py-2 px-3 w-full shadow-md mt-2 rounded' placeholder='Enter your last name' />
                                            </div>
                                            <div className='w-1/3'>
                                                <label htmlFor="" className='text-lg font-semibold'>Date<sup className='text-red-700 text-xl'>*</sup></label><br />
                                                <input type="text" value={today} {...register("date")} className='border-1 border-gray-200 focus:outline-none  focus:border-red-600 py-2 px-3 w-full shadow-md mt-2 rounded' required />
                                            </div>
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
                                        <button type='submit' className='buy-now-btn'>
                                            <span>Next</span>
                                        </button>
                                    </div>
                                    {/* </Link> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
 
export default Passengers;