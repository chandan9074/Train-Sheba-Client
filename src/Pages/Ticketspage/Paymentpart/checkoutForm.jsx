import React, { useEffect, useState } from 'react';
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
// import { message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import Message from "../../Shared/Message/Message";

const CheckoutForm = ({state, ticketPrice}) => {
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
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
        setLoading(true)
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

                const availableSit = state.sitResult - state.passInfo.ticket;
                const fromDistrict = state.train.fromDistrict;
                const toDistrict = state.train.toDistrict;
                const classname = state.train.classname;
                const departure = state.userData.departure;
                const name = state.passInfo.name;
                const email = state.passInfo.email;
                const trainName = state.train.trainName;
                const ticket = state.passInfo.ticket;
                const cardName = paymentMethod.card.brand;
                const tranID = paymentMethod.id;
                const last4 = paymentMethod.card.last4
                
                const searchTrainData = {trainName, fromDistrict, toDistrict, classname, departure, availableSit};
                fetch("http://localhost:5000/search-train-tickets-manage", {
                        method: "PUT",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(searchTrainData)
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        if(res){
                            // setSearchResult(res);
                        }
                        console.log("search result", res);
                    })

                const bookingData = {name, email, trainName, fromDistrict, toDistrict, classname, departure, ticketPrice, ticket, cardName, tranID, last4}

                fetch("http://localhost:5000/user-train-bookings", {
                        method: "POST",
                        headers: {
                            "content-type": "application/json"
                        },
                        body: JSON.stringify(bookingData)
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        if(res){
                            // setSearchResult(res);
                        }
                        console.log("search result", res);
                    })

                navigate("/validation", {state:{ paymentMethod: paymentMethod , passInfo: state.passInfo, train:state.train, userData: state.userData, sitResult:state.sitResult}})
                setLoading(false)
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
                {loading? 
                <div className='flex justify-center mt-3'>
                    <Spinner />
                </div>:
                <div className='flex items-center justify-between mt-3'>
                    <button onClick={handleBack} className='back-btn'>
                        <div className='flex items-center justify-center'>
                            <i class="fas fa-angle-double-left left-arrow"></i>
                            <span>Back</span>
                        </div>
                    </button>
                    <button type='submit' className='buy-now-btn'>
                        <span>Checkout</span>
                    </button>
                </div>}
            </form>
        </div> 
    );
}
 
export default CheckoutForm;