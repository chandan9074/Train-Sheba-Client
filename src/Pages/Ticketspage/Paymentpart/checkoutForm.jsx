import React, { useEffect } from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { Link, useNavigate } from 'react-router-dom';

const CheckoutForm = ({state}) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    useEffect(()=>{
        console.log("state data", state);
    })

    const handleSubmitPayment = async (e) =>{
        e.preventDefault();
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        }
        else {
            console.log("payment method",paymentMethod);
            navigate("/validation", {state:{ paymentMethod: paymentMethod , passInfo: state.passInfo, train:state.train, userData: state.userData}})
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmitPayment}>
                <div  className='border-1 border-gray-200 p-4'>
                    <CardElement
                        options={{
                            style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                            },
                        }}
                    />                                                          
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <Link to="/passengers" className='back-btn'>
                        <div className='flex items-center justify-center'>
                            <i class="fas fa-angle-double-left left-arrow"></i>
                            <span>Back</span>
                        </div>
                    </Link>
                    <button type='submit' className='buy-now-btn'>
                        <span>Next</span>
                    </button>
                </div>
            </form>
        </div> 
    );
}
 
export default CheckoutForm;