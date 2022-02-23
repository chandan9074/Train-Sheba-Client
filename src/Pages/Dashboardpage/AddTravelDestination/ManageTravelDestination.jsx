import React, { useEffect, useState } from 'react';
import SingleTravelDestination from './SingleTravelDestination';
import Spinner from '../../Shared/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
const ManageTravelDestination = () => {
    const [destinations, setDestinations] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = () =>{
        fetch("http://localhost:5000/letestdestinations")
        .then(res=>res.json())
        .then(data=> {
            setLoading(false)
            setDestinations(data)
            console.log("shjfdjl")
            
        })
    }

    const handleNavigate = () =>{
        navigate("/dashboard/addtraveldestination", {state:{pageTitle:"Add New"}})
    }

    return ( 
        <div className='container mb-24'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">Travel Destinations</h1>
            {loading ? <div className='flex justify-center'><Spinner /></div>:
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4">
                <div className='flex justify-center items-center'>
                    <div onClick={handleNavigate} className='py-4 px-5 border-2 border-gray-200 shadow-sm rounded-md cursor-pointer'>
                        <i class="fas fa-folder-plus text-9xl text-gray-300"></i>
                    </div>
                </div>
                {
                    destinations.map(desti => <SingleTravelDestination desti={desti} fetchData={fetchData} />)
                }
            </div>}
        </div>
     );
}
 
export default ManageTravelDestination;