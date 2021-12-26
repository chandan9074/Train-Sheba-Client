import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate} from 'react-router-dom';

import './ticketPage.css';

const TicketBanner = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log("hello chandan")
        navigate("/tickets", {state: data})

    };

    return ( 
        <div className="ticket-banner-part flex justify-start items-center">
            <div className="container flex flex-col md:flex-row justify-center">
                <div className="bg-gray-800 bg-opacity-70 py-4 px-5 rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className="flex">
                        <div className="flex items-end">
                            <div className="flex flex-col">
                                <label htmlFor="" className="text-xl text-white font-medium mb-2">From</label>
                                <p className="m-0 border-b-2 border-red-700">
                                    <select  type="text" className="bg-transparent w-48 appearance-none py-1 px-2 outline-none text-gray-300" {...register("from")} placeholder="From" required>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="Barisal">Barisal</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Mymensingh">Mymensingh</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Sylhet">Sylhet</option>
                                    </select>
                                    <i class="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                                </p>
                            </div>
                            <button className="text-gray-200 mx-3 text-2xl"><i class="fas fa-retweet"></i></button>
                            <div  className="flex flex-col">
                                <label htmlFor="" className="text-xl text-white font-medium mb-2">To</label>
                                <p className="m-0 border-b-2 border-red-700">
                                    
                                    <select  type="text" className="bg-transparent w-48 appearance-none py-1 px-2 outline-none text-gray-300 " {...register("to")} placeholder="to" required>
                                        <option value="Chittagong">Chittagong</option>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="Barisal">Barisal</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Mymensingh">Mymensingh</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Rangpur">Rangpur</option>
                                        <option value="Sylhet">Sylhet</option>
                                    </select>
                                    <i class="fas fa-map-marker-alt text-gray-400 mr-2"></i>
                                    
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center mt-3 justify-between">
                            <div  className="flex flex-col md:ml-5">
                                <label htmlFor="" className="text-xl text-white font-medium mb-2">Departure</label>
                                <p className="m-0 border-b-2 border-red-700">
                                    
                                    <input type="date" className="bg-transparent w-52 py-1 pl-2 pr-0 outline-none text-gray-300 calander" {...register("departure")} placeholder="MM/DD/YY" required/>
                                    {/* <i class="fas fa-calendar-alt text-gray-400 mr-2"></i> */}
                                    
                                </p>
                            </div>
                            <div  className="flex flex-col md:ml-5">
                                <label htmlFor="" className="text-xl text-white font-medium mb-2">Return</label>
                                <p className="m-0 border-b-2 border-red-700">
                                    
                                    <input type="date" className="bg-transparent w-52 py-1 pl-2 pr-0 outline-none text-gray-300 calander" {...register("return")} placeholder="MM/DD/YY" required/>
                                    {/* <i class="fas fa-calendar-alt text-gray-400 mr-2"></i> */}
                                </p>
                            </div>
                        </div>
                        </div>
                        <div className="flex items-center md:mt-10 justify-center">
                            <div   className="flex flex-col">
                                <label htmlFor="" className="text-xl text-white font-medium mb-2">Passengers</label>
                                <p className="m-0 border-b-2 border-red-700">
                                    
                                    <input type="text" className="bg-transparent w-48 py-1 px-2 outline-none text-gray-300 " {...register("passengers")} placeholder="2 ADUILT + 1 CHILD" required/>
                                    <i class="fas fa-user text-gray-400 mr-2"></i>
                                    
                                </p>
                            </div>
                            <div  className="flex flex-col md:ml-5">
                                <label htmlFor="" className="text-xl text-white font-medium mb-2">Class</label>
                                <p className="m-0 border-b-2 border-red-700">
                                    
                                    <select type="text" className="bg-transparent appearance-none w-48 py-1 px-2 outline-none text-gray-300 " {...register("class")} placeholder="class" required>
                                        <option value="Air Conditioned Class">Air Conditioned Class</option>
                                        <option value="First Class">First Class</option>
                                        <option value="Shovon Chair">Shovon Chair</option>
                                        <option value="Shovon">Shovon</option>
                                        </select>
                                    <i class="fas fa-chair text-gray-400 mr-2"></i>
                                </p>
                            </div>
                        </div>
                        
                        <button type="submit" className="nice mx-auto mt-5">
                            <span><p className="search-ticket"></p></span>
                        </button>
                        {/* <button type="submit">click</button> */}
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default TicketBanner;