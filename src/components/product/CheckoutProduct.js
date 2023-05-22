import React from 'react'
import './CheckoutProduct.css'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';

import { useStateValue } from '../stateProvider/StateProvider';


const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ cart }, dispatch] = useStateValue()
    const removeFromCart = () => {
        // removing element from the basket
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id
        })
    }

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<StarIcon className='product__startIcon' key={i} />)
        }
        return stars;
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__img' src={image} alt='product_pic' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutProduct__rating'>
                    {renderStars()}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct