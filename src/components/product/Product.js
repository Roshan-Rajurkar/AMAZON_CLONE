import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'
import { useStateValue } from '../stateProvider/StateProvider'


const Product = ({ id, title, image, price, rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<StarIcon className='product__startIcon' key={i} />)
        }
        return stars;
    }

    const [{ cart }, dispatch] = useStateValue();
    console.log('this is the basket', cart)

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
                <p>
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
