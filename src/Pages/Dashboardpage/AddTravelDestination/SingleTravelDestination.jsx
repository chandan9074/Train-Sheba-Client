import React from 'react';

const SingleTravelDestination = ({desti}) => {
    const {_id, img, fromDistrict, toDistrict, fromStation, toStation, travelTime, price} = desti;
    return ( 
        <div className='singleTravelcard py-3'>
            <div className='border-2 border-gray-200 shadow-sm rounded w-4/5 mx-auto px-3 mt-10'>
                <img src={img} alt="travel" className='w-48 h-44 mx-auto travel-img-border -mt-8' />
                <div className='flex justify-between mt-3'>
                    <div>
                        <h3 className='text-lg font-semibold mb-0'>{fromDistrict}</h3>
                        <h5 className='text-sm font-semibold w-3/4'>{fromStation}</h5>
                        {/* <h5 className='text-xl font-semibold w-3/4'>{travelTime}</h5> */}
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-0 text-right'>{toDistrict}</h3>
                        <h5 className='text-sm font-semibold  text-right w-3/4 ml-auto'>{toStation}</h5>
                        {/* <h5 className='text-xl font-semibold w-3/4 ml-auto text-right text-red-500'>${price}/=</h5> */}
                    </div>
                </div>
                    <hr className='w-full mb-2 mt-0' />
                    <div className='flex justify-between mb-1'>
                        <h5 className='text-xl font-semibold w-3/4'>{travelTime}</h5>
                        <h5 className='text-xl font-semibold w-3/4 ml-auto text-right text-red-500'>${price}/=</h5>
                    </div>
            </div>
            
            <div className='w-4/5 mx-auto flex justify-between mt-4 singleTravelCardBtn'>
                <button class="noselect"><span class="text text-sm">Delete</span><span class="icon"><i class="fas fa-trash-alt text-white ml-2 text-sm"></i></span></button>
                <button class="update"><span class="text text-sm">Update</span><span class="icon"><i class="fas fa-highlighter text-white ml-2 text-sm"></i></span></button>
            </div>
        </div>
     );
}
 
export default SingleTravelDestination;