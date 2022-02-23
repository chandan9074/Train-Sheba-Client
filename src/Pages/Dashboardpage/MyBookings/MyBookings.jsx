import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleBookings from '../AllBookings/SingleBookings';
import useAuth from '../../../hooks/useAuth';

const MyBookings = () => {

    const [bookings, setBookings ] = useState([]);
    const [loading, setLoading] = useState(true)
    const {user} = useAuth();
    
    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = () =>{
        const data = {email:user.email};
        // console.log(data)
        axios.post(`http://localhost:5000/user-train-bookings/my-bookings/`, data)
                .then(res=>{
                    setLoading(false)
                    setBookings(res.data)
                })
                .catch((error)=>{
                })
    }

    return ( 
        <div className='container mb-40'>
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
 
export default MyBookings;