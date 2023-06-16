import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from '../stateProvider/StateProvider'
import { useNavigate } from 'react-router-dom'

const Subtotal = () => {
    const [{ cart }] = useStateValue();
    const [subTotal, setSubTotal] = useState(0)

    const navigate = useNavigate();

    const calculateSubTotal = () => {
        const sum = cart?.reduce((amount, value) => {
            return amount + parseFloat(value.price)
        }, 0) // initially amount was zero then we are keep adding price of each item
        setSubTotal(sum.toFixed(2));
    }

    useEffect(() => {
        calculateSubTotal();
    }, [cart])

    const handlePayment = () => {
        navigate('/payment')
    }

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items) :
                            <strong>{value}</strong>
                        </p>
                    </>
                )}
                value={subTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₹"}
            />

            <button onClick={handlePayment}>Proceed to Checkout</button>
            {/* <button>Proceed to Checkout</button> */}
        </div>
    )
}

export default Subtotal
