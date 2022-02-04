import React from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js"

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

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
        }
    }
    return (
        <div className='border-1 border-gray-200 p-4'>
            <form onSubmit={handleSubmitPayment}>
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
                <button type='submit' className='buy-now-btn'>
                    <span>Pay</span>
                </button>
            </form>
        </div> 
    );
}
 
export default CheckoutForm;