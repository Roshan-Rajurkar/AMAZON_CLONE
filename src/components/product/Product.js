import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import './Product.css'

const Product = ({ title, image, price, rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<StarIcon className='product__startIcon' key={i} />)
        }
        return stars;
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
            <img src={image} alt="product-image" />
            {/* add to cart button */}
            <button className='addButton'>Add To Cart</button>

        </div>
    )
}

export default Product
