import React from 'react';


const OnlineTicketing = () => {
    return ( 
        <div className="online-ticket">
            <div className="bg-gray-300 bg-opacity-70">
                <div className="container py-5">
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-2xl mt-3 border-l-4 border-gray-700 font-bold pl-2">Facilities Of E-Ticketing</h1>
                        <button class="learn-more">
                            <span aria-hidden="true" class="circle">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">Explore More</span>         
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <i class="fas fa-business-time text-5xl mb-2"></i>
                                <p className="text-center text-base font-bold">Time is so much important for us, everyday we have to do many things. Between them if we need to buy any ticket, it is quite impossible to go station for buy ticket. So online ticket save our valuable time.</p>
                            </div>
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <i class="fas fa-globe-asia text-5xl mb-2"></i>
                                <p className="text-center text-base font-bold">For using this online service don't need to suffer for losing your ticket. You can get your ticket anywhere in the country.By this you can save your money and time. Besides you can easily share your online ticket anywhere.</p>
                            </div>
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <i class="fas fa-concierge-bell text-5xl mb-2"></i>
                                <p className="text-center text-base font-bold">Online train ticket is the best in emargency case. When we go to the station for buying our ticket sometimes we need more then one hours for long line. Whice is we have not face when we useing E-ticket.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default OnlineTicketing;