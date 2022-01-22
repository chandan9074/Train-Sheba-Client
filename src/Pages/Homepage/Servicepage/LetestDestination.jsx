import React, {useEffect, useState} from 'react';
import SingleLetestDestination from './SingleLetestDestination';


const LetestDestination = () => {
    // const sample = [1,2,3,4,5,6]
    const [destinations, setDestinations] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/letestdestinations")
        .then(res=>res.json())
        .then(data=> {
            const newArray = data.slice(-6);
            setDestinations(newArray)
        })
    })

    return ( 
        <div className="container pt-5 pb-24">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl mt-3 border-l-4 border-gray-700 font-bold pl-2">Letest Travel Destination</h1>
                <button class="learn-more">
                    <span aria-hidden="true" class="circle">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Explore More</span>         
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10">
                {
                    destinations.map(desti => <SingleLetestDestination desti={desti} />)
                }
            </div>
        </div>
     );
}
 
export default LetestDestination;