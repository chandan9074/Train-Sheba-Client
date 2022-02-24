import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleTrains from './SingleTrains';

const ManageTrains = () => {
    const [trains, setTrains] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate();
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = () =>{
        fetch("http://localhost:5000/trains")
        .then(res=>res.json())
        .then(data=> {
            setLoading(false)
            setTrains(data)
        })
    }

    const handleNavigate = () =>{
        navigate("/dashboard/addtrain", {state:{pageTitle:"Add"}})
    }

    return ( 
        <div className='container mb-36'>
            <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">Trains</h1>
            {loading ? <div className='flex justify-center'><Spinner /></div>:
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className='flex justify-center items-center'>
                    <div onClick={handleNavigate} className='py-4 px-5 border-2 border-gray-200 shadow-sm rounded-md cursor-pointer'>
                        <i class="fas fa-folder-plus text-9xl text-gray-300"></i>
                    </div>
                </div>
                {
                    trains.map(train => <SingleTrains train={train} fetchData={fetchData} />)
                }
            </div>}
        </div>
     );
}
 
export default ManageTrains;