import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleBookings from './SingleBookings';

const AllBookings = () => {

    const [bookings, setBookings ] = useState([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = () =>{
        fetch("http://localhost:5000/user-train-bookings")
        .then(res=>res.json())
        .then(data=> {
            setLoading(false)
            setBookings(data)
        })
    }
    return ( 
        <div className='container mb-36'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">All Bookings</h1>
            {loading ? <div className='flex justify-center'><Spinner /></div>:
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-4'>
                {
                    bookings.map(bookingsData => <SingleBookings bookings={bookingsData} fetchData={fetchData} />)
                }
            </div>
            }
        </div>
     );
}
 
export default AllBookings;