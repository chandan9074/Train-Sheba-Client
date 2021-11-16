import React from 'react';
import SingleLetestDestination from './SingleLetestDestination';


const LetestDestination = () => {
    const sample = [1,2,3,4,5,6]
    return ( 
        <div className="container py-5">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl mt-3 border-l-4 border-gray-700 font-bold pl-2 mb-5">Letest Travel Destination</h1>
                <button class="learn-more">
                    <span aria-hidden="true" class="circle">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Explore More</span>         
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10">
                {
                    sample.map(sam => <SingleLetestDestination />)
                }
            </div>
        </div>
     );
}
 
export default LetestDestination;