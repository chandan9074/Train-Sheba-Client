import axios from 'axios';
import React, { useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';

const SingleNews = ({newsData, fetchData}) => {

    const {_id, img, title, created, postDate, des, } = newsData;
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    
    const handleDelete = () =>{
        setLoading(true)
        console.log()
        axios.delete(`http://localhost:5000/letestnews/${_id}`)
                .then(res=>{
                    setLoading(false)
                    fetchData();
                })
                .catch((error)=>{
                })
    }

    const handleUpdate = () =>{
        navigate("/dashboard/addnews", {state:{pageTitle:"Update", newsData:newsData}})
    }

    return ( 
        <>
            {loading ? 
            <div className='flex justify-center items-center w-full'>
                <Spinner />
            </div>:
            <div className="flex justify-evenly shadow-md border-2 border-gray-200 p-4 rounded-md">
                <img src={img} alt="" className="w-60 h-auto rounded-md"/>
                <div className='flex flex-col'>
                    <div className="px-4">
                        <h1 className="text-2xl font-semibold mb-0 mt-1 elipsis-after-2-line" title={title}>{title}</h1>
                        <span className="text-sm italic font-medium elipsis-after-1-line">By {created}, {postDate}</span>
                        <p className="text-base mt-1 font-medium text-justify elipsis-after-4-line mb-0">{des}</p>
                    </div>
                    <div className='px-4'>
                        <hr className='w-full mt-3 mb-0'/>
                    </div>
                    <div className='flex justify-between mt-3 px-4'>
                        <button class="noselect" onClick={handleDelete}><span class="text text-sm">Delete</span><span class="icon"><i class="fas fa-trash-alt text-white ml-2 text-sm"></i></span></button>
                        <button class="update" onClick={handleUpdate}><span class="text text-sm">Update</span><span class="icon"><i class="fas fa-highlighter text-white ml-2 text-sm"></i></span></button>
                    </div>
                </div>
            </div>}
        </>
     );
}
 
export default SingleNews;