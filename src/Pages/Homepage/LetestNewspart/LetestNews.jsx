import React from 'react';
import SingleLetestNews from './SingleLetestNews';

const LetestNews = () => {
    const sample = [1, 2, 3, 4]
    return ( 
        <div className="bg-gray-100">
            <div className="container pt-16 pb-20 ">
                <div className="flex justify-between items-center mb-5">
                    <h1 className="text-2xl mt-3 border-l-4 border-gray-700 font-bold pl-2">Letest News</h1>
                    <button class="learn-more">
                        <span aria-hidden="true" class="circle">
                        <span class="icon arrow"></span>
                        </span>
                        <span class="button-text">Older News</span>         
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        sample.map(sam => <SingleLetestNews />)
                    }
                </div>
            </div>
        </div>
     );
}
 
export default LetestNews;