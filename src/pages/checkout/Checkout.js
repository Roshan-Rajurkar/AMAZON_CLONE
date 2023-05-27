import React from 'react'
import './Checkout.css'
import Subtotal from '../../components/Subtotal/Subtotal';
import CheckoutProduct from '../../components/product/CheckoutProduct'

import { useStateValue } from '../../components/stateProvider/StateProvider';


const Checkout = () => {

    const [{ cart, user }] = useStateValue();

    return (
        <div className='checkout' >
            <div className="checkout__left">

                <div>
                    <h4>Hey, {user?.email}</h4>
                    {/* we are adding optional chaining just because it should no break app when it value not available bcz it can be a async  */}
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
