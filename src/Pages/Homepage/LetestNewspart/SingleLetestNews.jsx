import React from 'react';

const SingleLetestNews = ({news}) => {

    const {_id, img, title, created, postDate, des, } = news;

    return ( 
        <div className="flex justify-evenly shadow-md border-2 border-gray-200 p-4 rounded-md">
            <img src={img} alt="" className="w-60 h-60 rounded-md"/>
            <div className="px-4">
                <h1 className="text-2xl font-semibold mb-0 mt-1 elipsis-after-2-line" title={title}>{title}</h1>
                <span className="text-sm italic font-medium elipsis-after-1-line">By {created}, {postDate}</span>
                <p className="text-base mt-1 font-medium text-justify elipsis-after-6-line mb-0">{des}</p>
            </div>
        </div>
     );
}
 
export default SingleLetestNews;