import React from 'react';


const SingleLetestDestination = ({desti}) => {
    const {_id, img, fromDistrict, toDistrict, fromStation, toStation, travelTime, price} = desti;
    return ( 
        <div className="mx-auto">
            <img src={img} alt=""  className="service-card-img w-80 h-60"/>
            <div className="shadow-lg service-details-part bg-gray-400 w-80 -mt-14 ">
                <div className="flex justify-between mt-4 pt-5 pb-2 px-4">
                    <div className="">
                        <h1 className="text-xl font-bold">{fromDistrict}</h1>
                        <p className="text-sm w-3/4">{fromStation}</p>
                    </div>
                    <div className="">
                        <h1 className="text-xl text-end font-bold">{toDistrict}</h1>
                        <p className="text-sm text-end ml-auto w-3/4">{toStation}</p>
                    </div>
                </div>
                <div className="w-full py-2 border-t-2 border-b-2 border-gray-500 container flex justify-between items-center" >
                    <p className="m-0 text-base font-medium ">{travelTime}</p>
                    <p className="m-0 text-2xl font-medium">$ {price} Tk</p>
                </div>
            </div>
        </div>
     );
}
 
export default SingleLetestDestination;