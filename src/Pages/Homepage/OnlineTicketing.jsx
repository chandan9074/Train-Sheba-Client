import React from 'react';


const OnlineTicketing = () => {
    return ( 
        <div className="container py-5">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl mt-3 border-l-4 border-gray-700 font-bold pl-2">Facilities Of E-Ticketing</h1>
                <button class="learn-more">
                    <span aria-hidden="true" class="circle">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Explore More</span>         
                </button>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    <div>
                        <div>
                            
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OnlineTicketing;