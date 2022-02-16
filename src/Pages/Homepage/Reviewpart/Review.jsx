import React, { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from 'swiper';
import SwiperCore from 'swiper';

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './review.css';
import Rating from 'react-rating';
import { useState } from 'react';
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow"
// import "swiper/css/pagination"

// import Swiper core and required modules

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination,Autoplay]);

const Review = () => {
    const sample = [1, 2, 3, 4, 5, 6]
    const [review, setReview] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/review")
        .then(res=>res.json())
        .then(data=> {
            // const newArray = data.slice(-6);
            setReview(data)
        })
    })
    return ( 
        <div className="">
        <div className="container pt-16 pb-20 ">
            <div className="flex justify-between items-center mb-5">
                <h1 className="text-2xl mt-3 border-l-4 border-gray-700 font-bold pl-2">Travellers Feedback</h1>
                <button class="learn-more">
                    <span aria-hidden="true" class="circle">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Give Feedback</span>         
                </button>
            </div>
            <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'}  autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
            }} coverflowEffect={{
            "rotate": 20,
            "stretch": 0,
            "depth": 100,
            "modifier": 1,
            "slideShadows": true
            }} pagination={true} className="mySwiper">
                {review.map(data=>

            <SwiperSlide>
                <div className="bg-gray-500 h-full flex flex-col items-center justify-center p-5">
                    {data.user_img && !data.anony ? <img src={data.user_img} alt="" className="w-24 h-24 rounded-full mb-3"  />: <i className="fas fa-user text-5xl mb-3"></i> }
                    <Rating
                        readonly
                        placeholderRating={data.rating}
                        emptySymbol={<i className="far fa-star text-yellow-400"></i>}
                        placeholderSymbol={<i className="fas fa-star text-yellow-400"></i>}
                        fullSymbol={<i className="fas fa-star text-yellow-400"></i>}
                    />
                    <p className="text-center my-2 text-sm font-medium elipsis-after-4-line w-11/12">{data.review}</p>
                    {data.anony ? <h6 className="mt-3 text-base font-bold">~ Anonymous</h6>: <h6 className="mt-3 text-base font-bold">~ {data.name}</h6>}
                </div>
            </SwiperSlide>)}
            {/* <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
            <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide> */}
            </Swiper>
        </div>
        </div>
     );
}
 
export default Review;