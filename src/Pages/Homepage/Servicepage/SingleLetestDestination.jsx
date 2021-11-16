import React from 'react';


const SingleLetestDestination = () => {
    return ( 
        <div className="mx-auto">
            <img src="https://i.ibb.co/DG2s8b4/pexels-photo-3650428.jpg" alt=""  className="service-card-img w-80 h-60"/>
            <div className="shadow-lg service-details-part bg-gray-400 w-80 -mt-14 ">
                <div className="flex justify-between mt-4 pt-5 pb-2 px-4">
                    <div className="">
                        <h1 className="text-xl font-bold">Dhaka</h1>
                        <p className="text-sm w-3/4">Airport, Bimanbondor</p>
                    </div>
                    <div className="">
                        <h1 className="text-xl text-end font-bold">Kumilla</h1>
                        <p className="text-sm text-end ml-auto w-3/4">Airport, Bimanbondor</p>
                    </div>
                </div>
                <div className="w-full py-2 border-t-2 border-b-2 border-gray-500 container flex justify-between items-center" >
                    <p className="m-0 text-base font-medium ">Week Days</p>
                    <p className="m-0 text-2xl font-medium">$ 240 Tk</p>
                </div>
            </div>
        </div>
     );
}
 
export default SingleLetestDestination;