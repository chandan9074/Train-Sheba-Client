import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Message from '../../Shared/Message/Message';
import Spinner from '../../Shared/Spinner/Spinner';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

const AddTrain = () => {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const {user, error, setError} = useAuth();
    const {state} = useLocation();
    const navigate = useNavigate();

    const districts = ["Dhaka", "Chittagong", "Barisal", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"]
    const times = ["Daily", "Weekly", "Vacation"];
    const classes = ["Air Conditioned Class", "First Class", "Shovon Chair", "Shovon"]

    let fromStationData = "";
    let toStationData = ""
    let priceData = "";
    let fromDistrictData = "";
    let toDistrictData = "";
    let travelTimeData = ""
    let trainNameData = "";
    let classnameData = "";
    let sitData = "";
    let arrivalTimeData = "";
    let departureTimeData = "";
    let idData = "";

    if(state.trainData){
        fromStationData = state.trainData.fromStation;
        toStationData = state.trainData.toStation
        priceData = state.trainData.price;
        fromDistrictData = state.trainData.fromDistrict;
        toDistrictData = state.trainData.toDistrict;
        travelTimeData = state.trainData.travelTime;
        trainNameData = state.trainData.trainName;;
        classnameData = state.trainData.classname;
        sitData = state.trainData.sit;
        arrivalTimeData = state.trainData.araivelTime;
        departureTimeData = state.trainData.departureTime;
        idData = state.trainData._id;
        // setImage(state.destiData.img)
    }

    const onSubmit = data => {
        console.log("data....", data);
    }
    return ( 
        <div className='container mb-24'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2"> {state.pageTitle} Trains</h1>
            <div className='container mt-4 flex'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
                    <div className='flex items-center w-11/12 mt-3'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>From District</label>
                            <div className='flex items-center p-3 border-2 border-blue-300 outline-none mb-3 w-full'>
                                <select defaultValue="chandan"  type="text" className="bg-transparent w-full appearance-none outline-none font-semibold " {...register("fromDistrict")} placeholder="From" required>
                                    {fromDistrictData ? <option value={fromDistrictData}>{fromDistrictData}</option>:null}
                                    {districts.map(district=>
                                        district !== fromDistrictData ? (<option value={district}>{district}</option>):(null)
                                    )}
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>To District</label>
                            <div className='flex items-center p-3 border-2 border-blue-300 outline-none mb-3 w-full'>
                                <select  type="text" className="bg-transparent w-full appearance-none outline-none font-semibold" {...register("toDistrict")} placeholder="To" required>
                                    {toDistrictData ? <option value={toDistrictData}>{toDistrictData}</option>:null}
                                    {districts.map(district=>
                                        district !== toDistrictData ? (<option value={district}>{district}</option>):(null)
                                    )}
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-11/12'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>From Station</label>
                            <input defaultValue={fromStationData} {...register("fromStation")} className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='xyz station' required />
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>To Station</label>
                            <input defaultValue={toStationData} {...register("toStation")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='abc station' />
                        </div>
                    </div>
                    <div className='flex items-center w-11/12'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>Travel Time</label>
                            <div className='flex items-center p-3 border-2 border-blue-300 outline-none mb-3 w-full'>
                                <select  type="text" className="bg-transparent w-full appearance-none outline-none font-semibold" {...register("travelTime")} placeholder="Time" required>
                                    {travelTimeData ? <option value={travelTimeData}>{travelTimeData}</option>:null}
                                    {times.map(time=>
                                        time !== travelTimeData ? (<option value={time}>{time}</option>):(null)
                                    )}
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>Classname</label>
                            <div className='flex items-center p-3 border-2 border-blue-300 outline-none mb-3 w-full'>
                            <select  type="text" className="bg-transparent w-full appearance-none outline-none font-semibold" {...register("classname")} placeholder="Time" required>
                                    {classnameData ? <option value={classnameData}>{classnameData}</option>:null}
                                    {classes.map(classes=>
                                        classes !== classnameData ? (<option value={classes}>{classes}</option>):(null)
                                    )}
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-11/12'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>Departure Time</label>
                            <input defaultValue={departureTimeData} type="time"  {...register("departureTime")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='100..' />
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>Arrival Time</label>
                            <input defaultValue={arrivalTimeData} type="time"  {...register("araivelTime")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='100..' />
                        </div>
                    </div>
                    <div className='flex items-center w-11/12'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>Sit</label>
                            <input defaultValue={sitData} type="number"  {...register("sit")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='100..' />
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>Price</label>
                            <input defaultValue={priceData} type="number"  {...register("price")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='100..' />
                        </div>
                    </div>
                    <div className='w-1/2 mx-auto mt-4'>
                        {error && <Message errormessage={error} />}
                    </div>
                    {loading ? <div className='mx-auto'><Spinner /></div>:
                    <button type='submit' className='send-btn rounded mx-auto mt-4'>
                        <div class="svg-wrapper-1">
                            <div class="svg-wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                            </svg>
                            </div>
                        </div>
                        <span>Send</span>
                    </button>}
                </form>
                <div className='w-1/2'>
                    <img src="https://i.ibb.co/hByzxxk/icon-train-39071.png" alt="train-image" className='w-full opacity-5' />
                </div>
            </div>
        </div>
     );
}
 
export default AddTrain;