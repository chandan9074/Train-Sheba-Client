import { Rate } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Message from '../../Shared/Message/Message';

const AddReview = () => {
    const [rating, setRating] = useState();
    const {user, error, setError} = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const anony = document.getElementById("cbx");
    const onSubmit = data => {
        if(rating){
            if(anony.checked == true){
                data.anony = true;
            }
            else{
                data.anony = false;
            }
            data.user_img = user.photoURL;
            data.rating = rating;
            axios.post('http://localhost:5000/review', data)
                .then(res=>{
                    reset();
                    setError("")
                })
                .catch((error)=>{
                    reset()
                })
        }
        else{
            setError("Please fill up the rating part")
        }
    };

    const handleRating = (value) =>{
        setRating(value)
    }
    return ( 
        <div className='container mb-36'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">Add Reviews</h1>
            <div className='container mt-5 flex'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
                    <label className='text-lg font-semibold mb-1'>Name</label>
                    <input value={user.displayName}  {...register("name")} className="p-3 border-2 border-blue-300 outline-none mb-3 w-11/12 font-semibold" readOnly />
                    <label className='text-lg font-semibold mb-1'>Email</label>
                    <input value={user.email} {...register("email")} className="p-3 border-2 border-blue-300 outline-none mb-3 w-11/12 font-semibold" readOnly />
                    <label className='text-lg font-semibold mb-1'>Review</label>
                    <textarea  {...register("review")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-11/12 h-40 resize-none font-semibold" placeholder='Give us a feedback' />
                    <label className='text-lg font-semibold mb-1'>Rate us</label>
                    <Rate allowHalf onChange={(value)=>handleRating(value)} required />
                    <div className='flex mt-4 ml-10'>
                        <div class="cntr">
                            <input type="checkbox" id="cbx" class="hidden-xs-up" />
                            <label for="cbx" class="cbx"></label>
                        </div>
                        <p className='font-semibold ml-4'>Post as an Anonymous</p>
                    </div>
                    <div className='w-1/2 mx-auto mt-4'>
                        {error && <Message errormessage={error} />}
                    </div>
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
                    </button>
                </form>
                <div className='w-1/2'>
                    <img src="https://i.ibb.co/hByzxxk/icon-train-39071.png" alt="train-image" className='w-full opacity-5' />
                </div>
            </div>
        </div>
     );
}
 
export default AddReview;