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
    const onSubmit = data => {
        if(image){
            setError("");
            setLoading(true)
            data.img = image;
            axios.post('http://localhost:5000/letestdestinations', data)
                .then(res=>{
                    reset();
                    setLoading(false);
                    message.success('Successfully submitted!');
                })
                .catch((error)=>{
                    reset();
                    setLoading(false);
                })
        }
        else{
            setError("Please upload a image!")
        }
    };

    return ( 
        <div className='container mb-24'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">{state.pageTitle} Travel Destination</h1>
            <div className='container mt-5 flex'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
                    <label className='text-lg font-semibold mb-1'>Destination Image</label>
                    <FileBase64
                        multiple={ false }
                        onDone={({base64})=>setImage(base64)} />
                    <div className='flex items-center w-11/12 mt-3'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>From District</label>
                            {/* <input value={user.email} {...register("email")} className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" readOnly /> */}
                            <div className='flex items-center p-3 border-2 border-blue-300 outline-none mb-3 w-full'>
                                <select  type="text" className="bg-transparent w-full appearance-none outline-none font-semibold " {...register("fromDistrict")} placeholder="From" required>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Barisal">Barisal</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Sylhet">Sylhet</option>
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>To District</label>
                            <div className='flex items-center p-3 border-2 border-blue-300 outline-none mb-3 w-full'>
                                <select  type="text" className="bg-transparent w-full appearance-none outline-none font-semibold" {...register("toDistrict")} placeholder="To" required>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Barisal">Barisal</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Mymensingh">Mymensingh</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Sylhet">Sylhet</option>
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center w-11/12'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>From Station</label>
                            <input {...register("fromStation")} className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='xyz station' required />
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>To Station</label>
                            <input  {...register("toStation")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='abc station' />
                        </div>
                    </div>
                    <div className='flex items-center w-11/12'>
                        <div className='flex flex-col w-1/2'>
                            <label className='text-lg font-semibold mb-1'>Travel Time</label>
                            <div className='flex items-center p-3 border-2 border-blue-300 outline-none mb-3 w-full'>
                                <select  type="text" className="bg-transparent w-full appearance-none outline-none font-semibold" {...register("travelTime")} placeholder="Time" required>
                                    <option value="Daily">Daily</option>
                                    <option value="Weekly">Weekly</option>
                                    <option value="Vacation">Vacation</option>
                                </select>
                                <i class="fas fa-angle-down"></i>
                            </div>
                        </div>
                        <div className='flex flex-col w-1/2 ml-5'>
                            <label className='text-lg font-semibold mb-1'>Price</label>
                            <input  {...register("price")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-full font-semibold" placeholder='100..' />
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