import React from 'react'
import './Checkout.css'
import Subtotal from '../../components/Subtotal/Subtotal';
import CheckoutProduct from '../../components/product/CheckoutProduct'

import { useStateValue } from '../../components/stateProvider/StateProvider';


const Checkout = () => {

    const [{ cart }] = useStateValue();

    return (
        <div className='checkout' >
            <div className="checkout__left">
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg" alt="" />

                <div>
                    <h2 className='checkout__title'>
                        Your Shopping Cart
                    </h2>
                    {
                        cart.map(product => <CheckoutProduct key={product.id} id={product.id} image={product.image} price={product.price} rating={product.rating} title={product.title} />)
                    }
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
