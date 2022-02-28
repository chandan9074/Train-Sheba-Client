import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router';
import TicketBanner from '../TicketBanner';
import Navigation from './../../Shared/Navigation/Navigation'
import SingleTicket from './SingleTicket';
import './ticket.css';

import { Link} from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';


const Ticket = () => {
    const {state} = useLocation();
    const [trains, setTrains] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [search, setSearch] = useState(false);
    const [trainData, setTrainData] = useState([]);
    const [recentTickets, setRecentTickets] = useState([]);
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;

    useEffect(()=>{
        fetch("http://localhost:5000/trains")
        .then(res=>res.json())
        .then(data=> {
            if(trains.length===0){
                while(trains.length !== 2){
                        let number = data[Math.floor(Math.random() * data.length)];
                        if(trains.indexOf(number) == -1)  
                        {
                            trains.push(number);
                        }
                    }
            }

            const newArray = data.slice(-6);
            setRecentTickets(newArray)
        })

        if(state){
            const from = state.from;
            const to = state.to;
            const classname = state.class;
            const departure = state.departure;
            setSearch(true)
    
            const bodyData = {from, to, classname};
    
            fetch("http://localhost:5000/trains", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(bodyData)
            })
            .then(res=>res.json())
            .then(res=>{
                setTrains(res);
            })

            const searchData = {from, to , classname, departure};
            fetch("http://localhost:5000/search-train-tickets-manage", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(searchData)
            })
            .then(res=>res.json())
            .then(res=>{
                if(res){
                    setSearchResult(res);
                }
                console.log("search result", res);
            })
        }
        else{
            const Data = {today};
    
            fetch("http://localhost:5000/all/search-train-tickets-manage", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(Data)
            })
            .then(res=>res.json())
            .then(res=>{
                setSearchResult(res);
            })
        }
    }, [state, trains])
    
    
    return ( 
        <div>
            <Navigation />
            <TicketBanner />
            <div className="flex overflow-hidden">
                <Link to="" className="cursor-auto ticket-switch-left-btn bg-gray-500 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">1</span>TICKETS</Link>
                <Link to="" className="cursor-auto ticket-switch-btn bg-gray-800 py-3 ticket-btn  flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">2</span>PASSENGERS</Link>
                <Link to="" className="cursor-auto ticket-switch-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">3</span>PAYMENT</Link>
                <Link to="" className="cursor-auto ticket-switch-right-btn bg-gray-800 py-3 ticket-btn flex justify-center items-center"> <span className="px-2 py-0.5 mr-2 rounded-full border-2 border-white text-sm">4</span>VALIDATION</Link>
            </div>
            <div className='container mb-32'>
                <div className='flex justify-center items-center'>
                    <div className='w-11/12 flex'>
                        <div className='w-1/4 mt-5'>
                            <h3 className='text-2xl'>Recent Tickets</h3>
                            {recentTickets.map(tickets=>(
                            <div className='border-1 border-gray-400 hover:border-red-600 px-4 py-3 mb-2 bg-gray-200'>    
                                <div className='flex justify-between'>
                                    <div>
                                        <h5 className='text-lg m-0 font-medium'>{tickets.fromDistrict}</h5>
                                        <h6 className='text-sm text-gray-500'>{tickets.fromStation}</h6>
                                    </div>
                                    <div>
                                        <h5 className='text-lg m-0 font-medium text-right'>{tickets.toDistrict}</h5>
                                        <h6 className='text-sm text-gray-500 text-right'>{tickets.toStation}</h6>
                                    </div>
                                </div>
                                <div className='flex justify-between items-end'>
                                    <div className='flex'>
                                        <i class="fas fa-wifi text-sm text-gray-500"></i>
                                        <i class="far fa-moon text-sm text-gray-500 mx-2"></i>
                                        <i class="fas fa-coffee text-sm text-gray-500"></i>
                                    </div>
                                    <div className='flex'>
                                        <h3 className='m-0'><span className='text-sm text-gray-500'>From</span><span className='text-2xl text-red-600'>${tickets.price}</span></h3>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className='w-3/4 mt-5 ml-5'>
                            <div className='w-full'>
                                <div className='flex justify-between'>
                                    {state?.departure ?
                                    <p className='m-0 font-semibold text-gray-500'>{trains.length} tickets found</p>:
                                    <p className='m-0 font-semibold text-gray-500'>Recomended todays tickets</p>}
                                    <div className='flex'>
                                        <p className='mb-0 font-semibold text-gray-500 flex items-center cursor-pointer mr-5'><span>Short by time</span><span className='ml-2'><i class="fas fa-sort-down"></i></span></p>
                                        <p className='m-0 font-semibold text-gray-500 cursor-pointer'><span>Show populer 5 tickets </span><span className='ml-2'><i class="fas fa-sort-down"></i></span></p>
                                    </div>
                                </div>
                            </div>
                            {trains.map(train=>(
                                <div className='mt-3'>
                                    {search ? 
                                    <SingleTicket train={train} searchResult={searchResult} state={state} departure={state?.departure} />
                                    :
                                    <SingleTicket train={train} searchResult={searchResult} state={state} departure={today} />
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Ticket;