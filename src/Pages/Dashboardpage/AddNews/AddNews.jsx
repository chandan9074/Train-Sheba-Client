import { Rate, message } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import Message from '../../Shared/Message/Message';
import Spinner from '../../Shared/Spinner/Spinner';
import FileBase64 from 'react-file-base64';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

const AddNews = () => {
    const { register, handleSubmit, reset } = useForm();
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    const {user, error, setError} = useAuth();
    const {state} = useLocation();
    const navigate = useNavigate();

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    let titleData = "";
    let createdData = "";
    let desData = "";
    let imgData = "";
    let idData = "";

   if(state.newsData){
     titleData = state.newsData.title;
     createdData = state.newsData.created;
     desData = state.newsData.des;
     imgData = state.newsData.img;
     idData = state.newsData._id;
   }

    const onSubmit = data => {
        if(image || imgData){
            setError("");
            setLoading(true)
            if(image){
                data.img = image;
            }
            else{
                data.img = imgData;
            }
            if(idData){
                data.lastUpdate = today;
                axios.put(`http://localhost:5000/letestnews/${idData}`, data)
                    .then(res=>{
                        reset();
                        setLoading(false);
                        message.success('Successfully submitted!');
                        navigate("/dashboard/managenews");
                    })
                    .catch((error)=>{
                        reset();
                        setLoading(false);
                    })
            }
            else{
                data.postDate = today;
                axios.post('http://localhost:5000/letestnews', data)
                    .then(res=>{
                        reset();
                        setLoading(false);
                        setImage("");
                        message.success('Successfully submitted!');
                    })
                    .catch((error)=>{
                        reset();
                        setLoading(false);
                    })
            }
        }
        else{
            setError("Please upload a image!")
        }
    };
    return ( 
        <div className='container mb-24'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">{state.pageTitle} News</h1>
            <div className='container mt-5 flex'>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2">
                    <label className='text-lg font-semibold mb-1'>News Cover Image</label>
                    {image ? <img src={image} alt="travel" className='w-48 h-44 travel-img-border mb-2 mt-1' />:null}
                    {imgData && !image ? <img src={imgData} alt="travel" className='w-48 h-44 travel-img-border mb-2 mt-1' />:null}
                    <FileBase64
                        multiple={ false }
                        onDone={({base64})=>setImage(base64)} />
                    <label className='text-lg font-semibold mb-1 mt-3'>News Title</label>
                    <input defaultValue={titleData} {...register("title")} className="p-3 border-2 border-blue-300 outline-none w-11/12 font-semibold" placeholder='Enter news title...' />
                    <label className='text-lg font-semibold mb-1 mt-3'>Author Name</label>
                    <input defaultValue={createdData} {...register("created")} className="p-3 border-2 border-blue-300 outline-none w-11/12 font-semibold" placeholder='Enter author name...' />
                    <label className='text-lg font-semibold mb-1 mt-3'>News Description</label>
                    <textarea defaultValue={desData} {...register("des")} required className="p-3 border-2 border-blue-300 outline-none mb-3 w-11/12 h-40 resize-none font-semibold" placeholder='Write description...' />
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
 
export default AddNews;