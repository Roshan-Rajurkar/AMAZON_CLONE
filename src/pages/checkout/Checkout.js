import React from 'react'
import './Checkout.css'
import Subtotal from '../../components/Subtotal/Subtotal';

const Checkout = () => {
    return (
        <div className='checkout' >
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="" />

                <div>
                    <h2 className='checkout__title'>
                        Your Shopping Cart
                    </h2>

                    {/* cartItem */}
                    {/* cartItem */}
                    {/* cartItem */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
