import React from 'react';

import './footer.css';

const Footer = () => {
    return ( 
        <div className=" bg-gray-700 pb-3 pt-5 mt-20">
            <div className="container">
                <div className="flex px-auto -mt-32 footer-part py-10">
                    <div className="flex justify-evenly w-2/5">
                        <div className="flex flex-col">
                            <h6 className="text-base font-semibold text-gray-100">Menu</h6>
                            <span className="text-sm font-semibold text-gray-300 hover:text-gray-200 cursor-pointer">Home</span>
                            <span className="text-sm font-semibold text-gray-300 hover:text-gray-200 cursor-pointer">Dashboard</span>
                            <span className="text-sm font-semibold text-gray-300 hover:text-gray-200 cursor-pointer">About Us</span>
                        </div>
                        <div className="flex flex-col">
                            <h6 className="text-base font-semibold text-gray-100">Contact Us</h6>
                            <span className="text-sm font-semibold text-gray-300"><i class="fas fa-phone-square-alt mr-2 text-gray-400"></i>(+88) 01833039074</span>
                            <span className="text-sm font-semibold text-gray-300"><i class="fas fa-envelope mr-2 text-gray-400"></i>chandankumardas.ckd.bd@gmail.com</span>
                            <span className="text-sm font-semibold text-gray-300"><i class="fas fa-map-marker-alt mr-2 text-gray-400"></i>Dhaka, Airport - 1229</span>
                        </div>
                    </div>
                    <div className="flex justify-evenly w-3/5">
                        <div className="flex flex-col w-1/2">
                            <h6 className="text-base font-semibold text-gray-100">News</h6>
                            <div className='flex mb-2'>
                                <img src="https://i.ibb.co/DG2s8b4/pexels-photo-3650428.jpg" alt="" className="w-16 h-16 rounded-md mr-2" />
                                <div  className="w-3/4">
                                    <p className=" m-0 text-sm font-semibold text-gray-300 elipsis-after-2-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore.</p>
                                    <span className="text-sm font-semibold text-gray-300 m-0">1 day ago</span>
                                </div>
                            </div>
                            <div className='flex'>
                                <img src="https://i.ibb.co/DG2s8b4/pexels-photo-3650428.jpg" alt="" className="w-16 h-16 rounded-md mr-2" />
                                <div  className="w-3/4">
                                    <p className=" m-0 text-sm font-semibold text-gray-300 elipsis-after-2-line">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, tempore.</p>
                                    <span className="text-sm font-semibold text-gray-300 m-0">1 day ago</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h6 className="text-base font-semibold text-gray-100 mb-2">Subscribe</h6>
                            <div className="flex">
                                <input type="text" className="bg-gray-200 outline-none px-2 py-1" placeholder="abc@xyz.com" />
                                <button className="subcribe-btn ml-1">Subscribe</button>
                            </div>
                            <h6 className="text-base font-semibold text-gray-100 mt-4 mb-1">Follow Us</h6>
                            <div className="flex">
                                <i class="fab fa-linkedin mr-3 text-2xl text-gray-300 cursor-pointer hover:text-gray-400"></i>
                                <i class="fab fa-facebook-square mr-3 text-2xl text-gray-300 cursor-pointer hover:text-gray-400"></i>
                                <i class="fab fa-twitter-square  mr-3 text-2xl text-gray-300 cursor-pointer hover:text-gray-400"></i>
                                <i class="fab fa-youtube-square text-2xl text-gray-300 cursor-pointer hover:text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="footer-bottom-underline w-full border-t-2 border-gray-500 mt-3"></div>
            <div className="flex justify-between w-full mt-1">
                <p className="text-base font-extrabold flex items-center m-0"><i class="fas fa-subway text-yellow-500 mr-1"></i> <span className="text-gray-300">TRAIN</span><span className="text-gray-400">SHEBA</span></p>
                <p className="m-0 text-gray-300 text-base font-semibold">Copyright © 2021 TRAIN SHEBA</p>
            </div>
            </div>
        </div>
     );
}
 
export default Footer;