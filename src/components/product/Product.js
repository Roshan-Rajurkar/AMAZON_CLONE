import React from 'react'
import { FaStar } from 'react-icons/fa'
import './Product.css'
import { useStateValue } from '../stateProvider/StateProvider'
import 'bootstrap/dist/css/bootstrap.css';


const Product = ({ id, title, image, price, rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<FaStar className='product__startIcon' key={i} />)
        }
        return stars;
    }

    const [{ cart }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch action addToBasket
        // const id = Math.random().toString(36).substr(2, 9);
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                image,
                price,
                rating,
            }
        })
    }


    return (
        <div className='product'>

            <div className="product_info">
                <p className='product__title'>
                    {title}
                </p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {renderStars()}
                </div>
            </div>

            {/* img and add to card button */}
            <img src={image} alt="product cam" />
            {/* add to cart button */}
            <button className='addButton' onClick={addToBasket}>Add To Cart</button>

        </div>
    )
}

export default Product
