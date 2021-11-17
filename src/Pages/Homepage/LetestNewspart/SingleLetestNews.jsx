import React from 'react';

const SingleLetestNews = () => {
    return ( 
        <div className="flex justify-evenly shadow-md border-2 border-gray-200 p-4 rounded-md">
            <img src="https://i.ibb.co/DG2s8b4/pexels-photo-3650428.jpg" alt="" className="w-60 h-60 rounded-md"/>
            <div className="px-4">
                <h1 className="text-2xl font-semibold mb-0 mt-1">News Title</h1>
                <span className="text-sm italic font-medium">By Admin, 1 min ago</span>
                <p className="text-base mt-1 font-medium text-justify elipsis-after-6-line">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad cumque deserunt, excepturi laboriosam alias maiores, modi nam adipisci porro quia in libero sequi quibusdam fugiat mollitia. Magni facere odit quas.</p>

            </div>
        </div>
     );
}
 
export default SingleLetestNews;