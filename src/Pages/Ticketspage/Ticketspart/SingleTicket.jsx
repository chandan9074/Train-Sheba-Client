import React from 'react';
import { Link} from 'react-router-dom';

const SingleTicket = () => {
    return ( 
        <div className='flex border-1 border-gray-200 hover:border-red-600'>
            <div className='w-1/4 p-4 flex flex-col justify-center items-center border-r border-gray-200'>
                <i class="fas fa-train text-4xl"></i>
                <h4 className='text-lg font-bold text-gray-500'>North Express</h4>
            </div>
            <div className='w-2/4 flex justify-between items-center p-4 border-r border-gray-200'>
                <div className='w-1/3'>
                    <h3 className='text-xl font-semibold m-0'>07:30p</h3>
                    <h6 className='text-sm m-0 text-gray-500'>Feb 14 SUN</h6>
                    <h5 className='text-base m-0'>New York</h5>
                    <h6 className='text-sm m-0 text-gray-500'>Penn Station, NY</h6>
                </div>
                <div className='w-1/3 flex flex-col justify-center items-center'>
                    <h5 className='text-lg text-gray-500 m-0'>07:30</h5>
                    <i class="fas fa-long-arrow-alt-right text-lg text-gray-500"></i>
                </div>
                <div className='w-1/3'>
                    <h3 className='text-xl font-semibold m-0'>07:30p</h3>
                    <h6 className='text-sm m-0 text-gray-500'>Feb 14 SUN</h6>
                    <h5 className='text-base m-0'>New York</h5>
                    <h6 className='text-sm m-0 text-gray-500'>Penn Station, NY</h6>
                </div>
            </div>
            <div className='w-1/4 p-4'>
                <p><span className='text-red-600 text-3xl font-semibold'>$40</span><span className='text-base font-semibold text-gray-500'>/person</span></p>
                <div className='flex'>
                    <i class="fas fa-wifi text-sm text-gray-500"></i>
                    <i class="far fa-moon text-sm text-gray-500 mx-2"></i>
                    <i class="fas fa-coffee text-sm text-gray-500 mr-2"></i>
                    <i class="fas fa-hamburger text-sm text-gray-500"></i>
                </div>
                <Link to="" className='buy-now-btn mt-3'>
                    <span>Buy Now</span>
                </Link>
            </div>
        </div>
     );
}
 
export default SingleTicket;