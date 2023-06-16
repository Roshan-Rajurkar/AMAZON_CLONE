import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import './Payment.css';
import { useStateValue } from '../stateProvider/StateProvider';
import CheckoutProduct from '../product/CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';

const Payment = () => {
    const navigate = useNavigate();
    const [{ cart, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        // Generate the client secret for Stripe payment
        const getClientSecret = async () => {
            // const response = await axios.post(`/payments/create?total=${getCartTotal(cart) * 100`);
            // setClientSecret(response.data.clientSecret);
        };

        getClientSecret();
    }, [cart]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
            },
        });

        if (payload.error) {
            setError(`Payment failed: ${payload.error.message}`);
            setProcessing(false);
            setSucceeded(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);

            // Clear the cart and navigate to the orders page
            dispatch({
                type: 'EMPTY_CART',
            });

            navigate('/orders');
        }
    };

    const handleChange = (event) => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    };

    const getCartTotal = (cart) => {
        return cart?.reduce((amount, item) => {
            return amount + item.price;
        }, 0);
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{cart?.length} items</Link>)
                </h1>

                {/* Delivery address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 Main Street</p>
                        <p>City, State</p>
                    </div>
                </div>

                {/* Review items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {cart?.map((item) => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            {/* <CardElement onChange
                                ={handleChange} /> */}

                            <div className="payment__priceContainer">
                                {/* <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCartTotal(cart)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                /> */}

                                {/* <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button> */}
                            </div>

                            {/* {error && <div className="payment__error">{error}</div>} */}

                            <p style={{ "color": "red" }}>Under Development</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
