import { message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import FileBase64 from 'react-file-base64';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Message from '../../Shared/Message/Message';
import Spinner from '../../Shared/Spinner/Spinner';
import { useLocation } from 'react-router';


const AddTravelDestination = () => {
    const { register, handleSubmit, reset } = useForm();
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const {user, error, setError} = useAuth();
    const {state} = useLocation();
    const districts = ["Dhaka", "Chittagong", "Barisal", "Khulna", "Mymensingh", "Rajshahi", "Rangpur", "Sylhet"]
    const times = ["Daily", "Weekly", "Vacation"]

    let fromStationData = "";
    let toStationData = ""
    let priceData = "";
    let fromDistrictData = "";
    let toDistrictData = "";
    let travelTimeData = ""
    // let imgData = "";
    
    if(state.destiData){
        fromStationData = state.destiData.fromStation;
        toStationData = state.destiData.toStation
        priceData = state.destiData.price;
        fromDistrictData = state.destiData.fromDistrict;
        toDistrictData = state.destiData.toDistrict;
        travelTimeData = state.destiData.travelTime
        // imgData = state.destiData.img;
        // setImage(state.destiData.img)
    }

    const onSubmit = data => {
        // if(image){
        //     setError("");
        //     setLoading(true)
        //     data.img = image;
        //     axios.post('http://localhost:5000/letestdestinations', data)
        //         .then(res=>{
        //             reset();
        //             setLoading(false);
        //             message.success('Successfully submitted!');
        //         })
        //         .catch((error)=>{
        //             reset();
        //             setLoading(false);
        //         })
        // }
        // else{
        //     setError("Please upload a image!")
        // }
        console.log("data....", data);
    };

    return ( 
        <div className='container mb-24'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">{state.pageTitle} Travel Destination</h1>
            <div className='container mt-5 flex'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
                    <label className='text-lg font-semibold mb-1'>Destination Image</label>
                    {image ? <img src={image} alt="travel" className='w-48 h-44 travel-img-border mb-2 mt-1' />:null}
                    {state.destiData.img && !image ? <img src={state.destiData.img} alt="travel" className='w-48 h-44 travel-img-border mb-2 mt-1' />:null}
                    <FileBase64
                        multiple={ false }
                        onDone={({base64})=>setImage(base64)} />
                    <div className='flex items-center w-11/12 mt-3'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>From District</label>
                            {/* <input value={user.email} {...register("email")} className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" readOnly /> */}
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
                                    {/* <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Vacation">Vacation</option> */}
                                    {travelTimeData ? <option value={travelTimeData}>{travelTimeData}</option>:null}
                                    {times.map(time=>
                                        time !== travelTimeData ? (<option value={time}>{time}</option>):(null)
                                    )}
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>Price</label>
                            <input defaultValue={priceData}  {...register("price")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='100..' />
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
 
export default AddTravelDestination;