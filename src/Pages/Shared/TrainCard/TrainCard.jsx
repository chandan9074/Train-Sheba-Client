import React from 'react';

const TrainCard = ({state}) => {
    return ( 
        <div className='border-1 border-gray-400 hover:border-red-600 px-4 py-3 mb-2 bg-gray-200'>    
            <div className='flex flex-col items-center'>
                <i class="fas fa-train text-4xl"></i>
                <h4 className='text-lg font-bold text-gray-600'>{state.train.trainName}</h4>
            </div>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-xl font-semibold m-0'>{state.train.departureTime}</h3>
                    <h6 className='text-sm m-0 text-gray-500'>Feb 14 SUN</h6>
                    <h5 className='text-base m-0'>{state.train.fromDistrict}</h5>
                    <h6 className='text-sm m-0 text-gray-500'>{state.train.fromStation}</h6>
                </div>
                <div>
                    <h3 className='text-xl font-semibold m-0 text-right'>{state.train.araivelTime}</h3>
                    <h6 className='text-sm m-0 text-gray-500 text-right'>Feb 14 SUN</h6>
                    <h5 className='text-base m-0 text-right'>{state.train.toDistrict}</h5>
                    <h6 className='text-sm m-0 text-gray-500 text-right'>{state.train.toStation}</h6>
                </div>
            </div>
            <hr className='mb-0' />
            <div className='flex justify-between items-end'>
                <div className='flex'>
                    <i class="fas fa-wifi text-sm text-gray-500"></i>
                    <i class="far fa-moon text-sm text-gray-500 mx-2"></i>
                    <i class="fas fa-coffee text-sm text-gray-500"></i>
                </div>
                <div className='flex'>
                    <h3 className='m-0'><span className='text-sm text-gray-500'>From</span><span className='text-2xl text-red-600'>${state.train.price}</span></h3>
                </div>
            </div>
        </div>
     );
}
 
export default TrainCard;