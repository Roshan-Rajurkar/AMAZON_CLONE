import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStateValue } from '../stateProvider/StateProvider'

const Subtotal = () => {
    const [{ cart }] = useStateValue();
    const [subTotal, setSubTotal] = useState(0)
    const calculateSubTotal = () => {
        const sum = cart?.reduce((amount, value) => {
            return amount + parseFloat(value.price)
        }, 0) // initlaly ammount was zero then we are keep adding price of each item
        setSubTotal(sum.toFixed(2));
    }

    useEffect(() => {
        calculateSubTotal();
    }, [cart])

    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({cart.length} items) :
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                value={subTotal}
                displayType={'text'}
                thousandSeparator={true}
                prefix={"₹"}
            />


            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
