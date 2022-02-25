import React, {useState, useEffect} from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';
import SingleLetestDestination from './SingleLetestDestination';
import Spinner from '../../Shared/Spinner/Spinner';
const AllDestinations = () => {
    const [loading, setLoading] = useState(true)
    const [destinations, setDestinations] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/letestdestinations")
        .then(res=>res.json())
        .then(data=> {
            const newArray = data.slice(-6);
            setDestinations(newArray)
            setLoading(false);
        })
    })
    return ( 
        <>
            <Navigation />
            <div className='container mb-36'>
                <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">All Travel Destinations</h1>
                {loading ? <div className='w-full flex justify-center'><Spinner /></div>:
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 mt-5">
                    {
                        destinations.map(desti => <SingleLetestDestination desti={desti} />)
                    }
                </div>
                }
            </div>
            <Footer />
        </>
     );
}
 
export default AllDestinations;