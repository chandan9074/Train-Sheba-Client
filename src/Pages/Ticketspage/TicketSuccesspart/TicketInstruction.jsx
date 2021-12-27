import React from 'react';

const TicketInstruction = () => {
    return ( 
        <div>
            <div className="">
                <div className="container py-5">
                    <div className="flex justify-between items-center mb-5">
                        <h1 className="text-2xl mt-3 border-l-4 border-gray-700 font-bold pl-2">E-Ticket Instructions</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3">
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <i class="fas fa-envelope-open-text text-5xl mb-2"></i>
                                <h1 className='text-xl font-bold'>Your will receive an E-mail</h1>
                                <hr className='w-40 m-0'/>
                                <p className="text-center text-gray-800 text-base font-semibold mt-2">After completing the total procedure of the buying e-ticket, you will get an email on your given email which you provide in the payment procedure.</p>
                            </div>
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <i class="fas fa-print text-5xl mb-2"></i>
                                <h1 className='text-xl font-bold'>Print your E-Ticket</h1>
                                <hr className='w-40 m-0'/>
                                <p className="text-center text-gray-800 text-base font-semibold mt-2">When you get an email from our website, you can see the ticket which is provided from our site, and then you have to print it out for further activities.</p>
                            </div>
                            <div className="w-10/12 mx-auto flex flex-col justify-center items-center">
                                <i class="fas fa-user-tie text-5xl mb-2"></i>
                                <h1 className='text-xl font-bold'>On check-in show your E-Ticket</h1>
                                <hr className='w-40 m-0'/>
                                <p className="text-center text-gray-800 text-base font-semibold mt-2">After printing the E-Ticket you have to carry it when you travel. Because without your ticket, you can not check-in. So for the check-in procedure, you have to carry your ticket.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default TicketInstruction;