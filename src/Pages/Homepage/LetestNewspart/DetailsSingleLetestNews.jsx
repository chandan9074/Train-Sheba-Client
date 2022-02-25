import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import { useLocation, Link } from 'react-router-dom';
import SingleLetestNews from './SingleLetestNews';
import Spinner from '../../Shared/Spinner/Spinner';

const DetailsSingleLetestNews = () => {
    const {state} = useLocation();
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetchData();
    }, [news])

    const fetchData = () =>{
        fetch("http://localhost:5000/letestnews")
        .then(res=>res.json())
        .then(data=> {
            while(news.length !== 2){
                let number = data[Math.floor(Math.random() * data.length)];
                if(news.indexOf(number) == -1 && number._id !== state.news._id)  
                {  
                    news.push(number);
                }  
            } 
            setLoading(false)
            // console.log("newss...", news);
        })
    }
    const vai = () =>{
        setNews([]);
        setLoading(true)
    }
    return ( 
        <>
            <Navigation />
            <div className=' bg-gray-100'>
                <div className='container pt-16 pb-20'>
                    <h1 className="text-2xl  border-l-4 border-gray-700 font-bold pl-2">News</h1>
                    <div className='mt-5 flex container'>
                        <img src={state.news.img} alt="" className='w-2/5 rounded' />
                        <div className='w-3/5 ml-8'>
                            <h3 className='text-2xl font-semibold'>{state.news.title}</h3>
                            <span className="text-base italic font-semibold">By {state.news.created}, {state.news.postDate}</span>
                            <p className="text-lg text-justify font-medium text-justify mt-3">{state.news.des}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-16 pb-20 container">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-2xl mt-3 border-l-4 border-gray-700 font-bold pl-2">Other News</h1>
                    <Link to="/allnews" class="learn-more">
                        <span aria-hidden="true" class="circle">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Older News</span>         
                    </Link>
                </div>
                {loading ? <div className='w-full flex justify-center'><Spinner /></div>:
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        news.map(news => <SingleLetestNews news={news} fetchData={vai} />)
                    }
                </div>
                }
            </div>
            <div className='bg-gray-100'>
                <Footer />
            </div>
        </>
     );
}
 
export default DetailsSingleLetestNews;