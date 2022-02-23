import React from 'react';

const SingleBookings = ({bookings, fetchData}) => {

    const {_id, name, email, trainName, fromDistrict, toDistrict, classname, departure, ticketPrice, ticket, cardName, tranID, last4} = bookings;

    return ( 
        <div className='border-2 border-gray-200 hover:border-red-500 rounded-md shadow-md flex'>
            <div className='w-1/3 flex flex-col justify-center items-center bg-gray-100 border-r border-gray-200'>
                <i class="fas fa-train text-3xl"></i>
                <h4 className='text-base font-bold text-gray-500'>{trainName}</h4>
            </div>
            <div className='w-2/3'>
                <div className='px-3 py-3 border-b border-gray-200'>
                    <label htmlFor="" className='text-base font-semibold'>Name:</label>
                    <h5 className='text-base'>{name}</h5>
                    <label htmlFor="" className='text-base font-semibold'>Email:</label>
                    <h5 className='text-base m-0'>{email}</h5>
                </div>
                {/* <hr className='w-full text-gray-500'/> */}
                <div className='px-3 py-3 border-b border-gray-200 flex justify-between'>
                    <div>
                        <label htmlFor="" className='text-base font-semibold'>Transection ID:</label>
                        <h5 className='text-base'>{tranID}</h5>
                    </div>
                    <div>
                        <label htmlFor="" className='text-base font-semibold w-full text-right'>Card Name:</label>
                        <h5 className='text-base text-right'>{cardName}</h5>
                    </div>
                </div>
                <div className='px-3 py-3 border-b border-gray-200 flex justify-between'>
                    <div>
                        <label htmlFor="" className='text-base font-semibold'>From:</label>
                        <h5 className='text-base'>{fromDistrict}</h5>
                        <label htmlFor="" className='text-base font-semibold'>Classname:</label>
                        <h5 className='text-base'>{classname}</h5>
                        <label htmlFor="" className='text-base font-semibold'>Tickets:</label>
                        <h5 className='text-base'>{ticket}</h5>
                    </div>
                    <div>
                        <label htmlFor="" className='text-base font-semibold'>To:</label>
                        <h5 className='text-base'>{toDistrict}</h5>
                        <label htmlFor="" className='text-base font-semibold'>Departure:</label>
                        <h5 className='text-base'>{departure}</h5>
                        <label htmlFor="" className='text-base font-semibold'>Price:</label>
                        <h5 className='text-base'>$ {ticketPrice}/=</h5>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default SingleBookings;