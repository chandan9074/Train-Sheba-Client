import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Spinner from '../../Shared/Spinner/Spinner';
import SingleLetestNews from './SingleLetestNews';

const AllNews = () => {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch("http://localhost:5000/letestnews")
        .then(res=>res.json())
        .then(data=> {
            setNews(data);
            setLoading(false)
        })
    }, [])
    return ( 
        <>
            <Navigation />
            <div className='container mb-36'>
                <h1 className="text-2xl mt-5 border-l-4 border-gray-700 font-bold pl-2">All News</h1>
                {loading ? <div className='w-full flex justify-center'><Spinner /></div>:
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
                    {
                        news.map(news => <SingleLetestNews news={news} />)
                    }
                </div>
                }
            </div>
            <Footer />
        </>
     );
}
 
export default AllNews;