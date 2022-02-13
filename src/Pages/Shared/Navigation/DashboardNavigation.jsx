import React from 'react';
import useAuth from '../../../hooks/useAuth';
import {
  Link,
  useLocation
} from "react-router-dom";

import './navigation.css';
import { useState } from 'react';

const DashboardNavigation = () => {
    const {user, logout} = useAuth();
    const [result, setResult] = useState();
    let name = "";
    let firstWord = "";
    // if(user.displayName){
    //     // let name = user.displayName;
    //     let firstWord = user.displayName.split(" ")[0];
    //     setResult(firstWord)
    // }
    return ( 
        <div className='bg-gray-50'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center'>
                    <i class="fas fa-bars border-2 border-gray-200 py-0.5 px-1.5 rounded text-gray-600 hover:shadow-sm text-xl"></i>
                    <div className='flex items-center ml-10 hidden md:block'>
                        <Link to="/" className="nav-btn">Home</Link>
                        <Link to="/dashboard" className="nav-btn mx-3">Dashboard</Link>
                        <Link to="/tickets" className="nav-btn">Booking</Link>
                    </div>
                </div>
                <div className='flex items-center'>
                    {user.email?<>
                    {user.photoURL?<img src={user.photoURL} alt="" className="w-10 rounded-full" />:<i class="fas fa-user"></i>}</>:null}
                    <span className="text-lg text-black hidden md:block mx-3 nav-margin">{user.displayName}</span>
                    {user.displayName && <span className="text-lg text-black md:hidden mx-2 my-3">{user.displayName.split(" ")[0]}</span>}
                    {user.email?
                    <Link to="/" onClick={logout} className='accounts-btn'>
                        <span>Logout</span>
                    </Link>
                    :
                    <span>
                    <Link to="/login" className='accounts-btn mr-3'>
                        <span>Login</span>
                    </Link>
                        <Link to="/registration" className='accounts-btn'>
                        <span>Registration</span>
                        </Link>
                    </span>
                    }
                </div>
            </div>
        </div>
     );
}
 
export default DashboardNavigation;