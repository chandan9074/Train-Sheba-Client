import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer'
import '.././accounts.css';

import { useForm } from "react-hook-form";

const Registration = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => console.log(data);
    return ( 
        <div className='bg-gray-50'>
            <Navigation />
            <div className='flex container mt-20 mb-40 items-center'>
                <div className='w-1/2 flex justify-center'>
                    <div className='w-3/4'>
                        <h1 className='text-2xl font-semibold'>Hello there!</h1>
                        <h1 className='text-2xl font-semibold text-gray-500'>Welcome to our website</h1>
                        <p className='text-sm font-semibold border-l-4 border-gray-700 pl-2'>Register for grabbing all kinds of facilities</p>
                        <div class="main_div mt-5 mx-auto">
                            <button><i class="fab fa-google mr-1 text-red-400"></i> Sign in with Google</button>
                        </div>
                        <p className='text-center font-bold mt-4 mb-3'>--------------- or --------------- </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                            <label className='text-lg font-semibold mb-1' >Name</label>
                            <input type="text"  {...register("name", {required: true})} className="p-3 border-2 border-blue-300 mb-3" placeholder='Mr./Mrs. xyz' />
                            <label className='text-lg font-semibold mb-1' >Email</label>
                            <input type="text"  {...register("email", {required: true})} className="p-3 border-2 border-blue-300 mb-3" placeholder='abc@xyz.com' />
                            <label className='text-lg font-semibold mb-1' >Password</label>
                            <input type="password" {...register("password", {required: true})} className="p-3 border-2 border-blue-300 mb-3" placeholder='xxxxxxxx' />
                            <label className='text-lg font-semibold mb-1' >Confirm Password</label>
                            <input type="password" {...register("password", {required: true})} className="p-3 border-2 border-blue-300" placeholder='xxxxxxxx' />
                            <div className='flex justify-between mt-2'>
                                <p className='text-sm font-semibold'>Already have an account?<span className='ml-1'>Login</span></p>
                            </div>
                            <div class="main_div mt-4 mx-auto">
                                <button>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src="https://i.ibb.co/H2GMvp8/train.gif" alt="train" className='w-full' />
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Registration;