import React, { useEffect, useState } from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
// import { message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Message from "../../Shared/Message/Message";

const CheckoutForm = ({state}) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [clientsecret, setClientsecret] = useState("");
    const [errormessage, setErromessage] = useState("");
    const parseticket = parseInt(state.userData.passengers);
    const parseprice = parseInt(state.train.price);
    const newUpdatePrice = parseprice * parseticket;

    const handleBack = ()=>{
        navigate("/passengers", {state:state});
    }

    useEffect(()=>{
        fetch("http://localhost:5000/create-payment-intent", {
            method:"POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({newUpdatePrice})
        })
        .then(res => res.json())
        .then(data =>{
            setClientsecret(data.clientSecret)
            console.log("client",data.clientSecret);
        })
    }, [state.train.peice]);

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
            setErromessage(error.message)
            // message.error(error.message);
            console.log("error message", error)
        }
        else {
            console.log("payment method",paymentMethod);
            setErromessage("")
            console.log(card);
            // navigate("/validation", {state:{ paymentMethod: paymentMethod , passInfo: state.passInfo, train:state.train, userData: state.userData}})
        }

        const {paymentIntent, error:errorConfirm} = await stripe.confirmCardPayment(
            clientsecret,
            {
                payment_method: {
                card: card,
                billing_details: {
                    name: state.passInfo.name,
                    email: state.passInfo.email
                },
                },
            },
            );

            if(errorConfirm){
                // message.error(errorConfirm.message);
                setErromessage(error.message)
            }
            else{
                console.log(paymentIntent);
                setErromessage("")
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
                <div className='flex justify-center mt-3'>
                   { errormessage && <Message errormessage={errormessage} />}
                </div>
                <div className='flex items-center justify-between mt-3'>
                    <button onClick={handleBack} className='back-btn'>
                        <div className='flex items-center justify-center'>
                            <i class="fas fa-angle-double-left left-arrow"></i>
                            <span>Back</span>
                        </div>
                    </button>
                    <button type='submit' className='buy-now-btn'>
                        <span>Next</span>
                    </button>
                </div>
            </form>
        </div> 
    );
}
 
export default CheckoutForm;