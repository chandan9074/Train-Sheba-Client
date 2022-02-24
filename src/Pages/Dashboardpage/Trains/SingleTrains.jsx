import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTrains = ({train, fetchData}) => {
    const {_id, classname, fromDistrict, fromStation, toDistrict, toStation, trainName, sit, availableSit, araivelTime, departureTime, travelTime, available, price} = train;
    const navigate = useNavigate();

    const handleDelete = () =>{

    }

    const handleUpdate = () =>{
        navigate("/dashboard/addtrain", {state:{pageTitle:"Update", trainData:train}})
    }

    return ( 
        <div className='border-2 border-gray-200 hover:border-red-500 rounded-md shadow-md flex'>
            <div className='w-1/3 flex flex-col justify-center items-center bg-gray-100 border-r border-gray-200'>
                <i class="fas fa-train text-3xl"></i>
                <h4 className='text-base font-bold text-gray-500'>{trainName}</h4>
            </div>
            <div className='w-2/3'>
                <div className='px-3 py-3 border-b border-gray-200 flex justify-between'>
                    <div>
                        <label htmlFor="" className='text-base font-semibold'>From:</label>
                        <h5 className='text-base m-0'>{fromDistrict}</h5>
                        <h5 className='text-sm m-0'>{fromStation}</h5>
                    </div>
                    <div>
                        <label htmlFor="" className='text-base font-semibold'>To:</label>
                        <h5 className='text-base m-0'>{toDistrict}</h5>
                        <h5 className='text-sm m-0'>{toStation}</h5>
                    </div>
                </div>
                <div className='px-3 py-3 border-b border-gray-200 flex justify-between'>
                    <div>
                        <label htmlFor="" className='text-base font-semibold'>Classname:</label>
                        <h5 className='text-base'>{classname}</h5>
                        <label htmlFor="" className='text-base font-semibold'>Departure Time:</label>
                        <h5 className='text-base'>{departureTime}</h5>
                        <label htmlFor="" className='text-base font-semibold'>Sit:</label>
                        <h5 className='text-base'>{sit}</h5>

                    </div>
                    <div>
                        <label htmlFor="" className='text-base font-semibold'>Travel Time:</label>
                        <h5 className='text-base'>{travelTime}</h5>
                        <label htmlFor="" className='text-base font-semibold'>Arrival Time:</label>
                        <h5 className='text-base'>{araivelTime}</h5>
                        <label htmlFor="" className='text-base font-semibold'>Price:</label>
                        <h5 className='text-base'>${price}/=</h5>
                    </div>
                </div>
                <div className='px-3 py-3 flex justify-between'>
                    <button class="noselect" onClick={handleDelete}><span class="text text-sm">Delete</span><span class="icon"><i class="fas fa-trash-alt text-white ml-2 text-sm"></i></span></button>
                    <button class="update" onClick={handleUpdate}><span class="text text-sm">Update</span><span class="icon"><i class="fas fa-highlighter text-white ml-2 text-sm"></i></span></button>
                </div>
            </div>
        </div>
     );
}
 
export default SingleTrains;