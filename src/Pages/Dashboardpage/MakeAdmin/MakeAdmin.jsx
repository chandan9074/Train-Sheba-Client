import { message } from 'antd';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Message from '../../Shared/Message/Message';
import Spinner from '../../Shared/Spinner/Spinner';


const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user, error, setError} = useAuth();
    const [loading, setLoading] = useState(false)
    const validation = document.getElementById("cbx");
    const onSubmit = data => {
        if (validation.checked === true){
            setError("");
            setLoading(true);
            axios.put('http://localhost:5000/users/admin', data)
                .then(res=>{
                    reset();
                    setLoading(false);
                    if(res.data.matchedCount < 1){
                        message.error("Invalid email address!")
                    }
                    else {
                        message.success('Successfully submitted!');
                    }
                })
                .catch((error)=>{
                    reset();
                    setLoading(false);                    
                })
        }
        else {
            setError("Please accept all conditions!")
        }

    }

    return ( 
        <div className='container mb-36'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">Make Admin</h1>
            <div className='container mt-5 flex'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-1/2">
                    <div className='flex flex-col w-11/12'>
                        <label className='text-lg font-semibold mb-1 mt-3'>Email</label>
                        <input {...register("email")} className="p-3 border-2 border-blue-300 outline-none w-full font-semibold" placeholder='Enter new admin email...' required />
                        <div className='p-3 border-2 border-red-700 bg-red-50 w-3/4 mx-auto mt-4 rounded-md'>
                            <h3 className='text-xl text-red-900 mb-2.5'>Terms & Conditions</h3>
                            <div>
                                <p className='text-base text-red-700 mb-1.5'><i class="fas fa-hand-point-right"></i> An admin can add content to all pages</p>
                                <p className='text-base text-red-700 mb-1.5'><i class="fas fa-hand-point-right"></i> An admin can add page without restriction</p>
                                <p className='text-base text-red-700 mb-1.5'><i class="fas fa-hand-point-right"></i> An admin can publish content to all pages</p>
                                <p className='text-base text-red-700 mb-1.5'><i class="fas fa-hand-point-right"></i> Full access to Admin settings</p>
                            </div>
                        </div>
                        <div className='flex mt-4 w-3/4 mx-auto'>
                            <div class="cntr">
                                <input type="checkbox" id="cbx" class="hidden-xs-up" />
                                <label for="cbx" class="cbx"></label>
                            </div>
                            <p className='font-semibold ml-4'>I accept all tems and conditions</p>
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
                    </div>
                </form>
                <div className='w-1/2 flex items-center justify-center'>
                    {/* <img src="https://i.ibb.co/hByzxxk/icon-train-39071.png" alt="train-image" className='w-full opacity-5' /> */}
                    <i className="fas fa-user-shield admin-icon opacity-5"></i>
                </div>
            </div>
        </div>
     );
}
 
export default MakeAdmin;