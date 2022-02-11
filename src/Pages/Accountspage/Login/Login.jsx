import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer'
import '.././accounts.css';
import useAuth from '../../../hooks/useAuth';

import { useForm } from "react-hook-form";
import Message from '../../Shared/Message/Message';

const Login = () => {
    const {setEmail, setPassword, signInWithEmail, googleSignIn, error} = useAuth() 

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    return ( 
        <div className='bg-gray-50'>
            <Navigation />
            <div className='flex container mt-20 mb-40 items-center'>
                <div className='w-1/2 flex justify-center'>
                    <div className='w-3/4'>
                        <h1 className='text-2xl font-semibold mb-0'>Hello there!</h1>
                        <h1 className='text-2xl font-semibold text-gray-500'>Welcome back</h1>
                        <p className='text-sm font-semibold border-l-4 border-gray-700 pl-2'>Login with your data that you are entered during registration</p>
                        <div class="main_div mt-5 mx-auto">
                            <button onClick={googleSignIn} ><i class="fab fa-google mr-1 text-red-400"></i> Sign in with Google</button>
                        </div>
                        <p className='text-center font-bold mt-4 mb-3'>--------------- or --------------- </p>
                        <form onSubmit={(e)=>signInWithEmail(e)} className="flex flex-col">
                            <label className='text-lg font-semibold mb-1' >Email</label>
                            <input type="text" name='email' onChange={handleEmail} required className="p-3 border-2 border-blue-300 mb-3 outline-none" placeholder='abc@xyz.com' />
                            <label className='text-lg font-semibold mb-1' >Password</label>
                            <input type="password" name='password' onChange={handlePassword} required className="p-3 border-2 border-blue-300 outline-none" placeholder='xxxxxxxx' />
                            <div className='flex justify-between mt-2'>
                                <p className='text-sm font-semibold'>Don't have any account?<span className='ml-1'>Register</span></p>
                                <p className='text-sm font-semibold'>Forget password?</p>
                            </div>
                            <div className='mx-auto' >
                                {error && <Message errormessage={error} />}
                            </div>
                            <div class="main_div mt-4 mx-auto">
                                <button type='submit'>Login</button>
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
 
export default Login;