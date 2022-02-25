import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleLetestNews = ({news, fetchData}) => {
    const navigate = useNavigate();
    const {_id, img, title, created, postDate, des, } = news;

    const handleNavigate = () =>{
        if(fetchData){
            fetchData();
        }
        navigate("/news", {state:{news:news}})
    }

    return ( 
        <div className="flex justify-evenly shadow-md border-2 border-gray-200 p-4 rounded-md">
            <img src={img} alt="" className="w-60 h-auto rounded-md"/>
            <div className="px-4">
                <h1 className="text-2xl font-semibold mb-0 mt-1 elipsis-after-2-line" title={title}>{title}</h1>
                <span className="text-sm italic font-medium elipsis-after-1-line">By {created}, {postDate}</span>
                <p className="text-base mt-1 font-medium text-justify elipsis-after-4-line mb-0">{des}</p>
                <button onClick={handleNavigate} className='accounts-btn mt-3'>
                    <span>Read More</span>
                </button>
            </div>
        </div>
     );
}
 
export default SingleLetestNews;