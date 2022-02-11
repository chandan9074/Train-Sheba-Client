import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Message from '../../Shared/Message/Message';
import Navigation from '../../Shared/Navigation/Navigation';
import '.././accounts.css';
import {
  Link
} from "react-router-dom";

const Registration = () => {
    const [verifyPassword, setVerifyPassword] = useState();
    const {setEmail,setName, setPassword, createSingInWithEmail, error, password, setError, googleSignIn} = useAuth();

    const handleName = (e) =>{
        setName(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleVarifyPass = (e) =>{
        setVerifyPassword(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(password === verifyPassword){
            createSingInWithEmail(e)
            setError("")
        }
        else{
            setError("Password dose not match!")
        }
    }

    return ( 
        <div className='bg-gray-50'>
            <Navigation />
            <div className='flex container mt-20 mb-40 items-center'>
                <div className='w-1/2 flex justify-center'>
                    <div className='w-3/4'>
                        <h1 className='text-2xl font-semibold mb-0'>Hello there!</h1>
                        <h1 className='text-2xl font-semibold text-gray-500'>Welcome to our website</h1>
                        <p className='text-sm font-semibold border-l-4 border-gray-700 pl-2'>Register for grabbing all kinds of facilities</p>
                        <div class="main_div mt-5 mx-auto">
                            <button onClick={googleSignIn}><i class="fab fa-google mr-1 text-red-400"></i> Sign in with Google</button>
                        </div>
                        <p className='text-center font-bold mt-4 mb-3'>--------------- or --------------- </p>
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <label className='text-lg font-semibold mb-1' >Name</label>
                            <input type="text" name='name' required className="p-3 border-2 border-blue-300 outline-none mb-3" onChange={handleName} placeholder='Mr./Mrs. xyz' />
                            <label className='text-lg font-semibold mb-1' >Email</label>
                            <input type="email" name='email' required className="p-3 border-2 border-blue-300 outline-none mb-3" onChange={handleEmail} placeholder='abc@xyz.com' />
                            <label className='text-lg font-semibold mb-1' >Password</label>
                            <input type="password" name='password' required className="p-3 border-2 border-blue-300 outline-none mb-3" onChange={handlePassword} placeholder='xxxxxxxx' />
                            <label className='text-lg font-semibold mb-1' >Confirm Password</label>
                            <input type="password" name="verifyPassword" required className="p-3 border-2 border-blue-300 outline-none" onChange={handleVarifyPass} placeholder='xxxxxxxx' />
                            <div className='flex justify-between mt-2'>
                                <p className='text-sm font-semibold'>Already have an account?<Link to="/login" className='ml-1 text-red-600 cursor-pointer log-reg-switch-btn' >Login</Link></p>
                            </div>
                            <div className='mx-auto' >
                                {error && <Message errormessage={error} />}
                            </div>
                            
                            <div class="main_div mt-4 mx-auto">
                                <button type='submit'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src="https://i.ibb.co/H2GMvp8/train.gif" alt="train" className='w-full' />
                </div>
            </div>
            <Footer />
        </div>
     );
}
 
export default Registration;