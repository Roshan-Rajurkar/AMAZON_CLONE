import React, { useEffect, useState } from 'react'
import './ProductDetail.css'
import { FaStar } from 'react-icons/fa';

import { useStateValue } from '../stateProvider/StateProvider';

const ProductDetail = ({ data }) => {

    const [{ cart }, dispatch] = useStateValue();

    const [qty, setQty] = useState(1)

    const addToCart = () => {
        for (let i = 0; i < qty; i++) {
            dispatch({
                type: 'ADD_TO_CART',
                item: data,
            });
        }
    };

    return (
        <div className='ProductDetail__container'>
            <div className="ProductDetail__image">
                <img className='ProductDetail__product__image' src={data.image} alt="" />
            </div>
            <div className="productsDetail_info">
                <p className='productsDetail__title'>
                    {data.title}
                </p>

                <strong className='productsDetail__price'>
                    ₹ {data.price}
                </strong>

                <p className='productsDetail__rating'>
                    {[...Array(data.rating)].map((_, index) => (
                        <FaStar className='rating__star' key={index} />
                    ))}
                </p>


                <p className="productsDetail__category">
                    {data.category}
                </p>

                <div className="productsDetail__quantity">
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min='1'
                        value={qty}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setQty(e.target.value)
                        }}
                    />
                </div>


                <button onClick={addToCart}>
                    Add To card
                </button>

            </div>
        </div>
    )
}

export default ProductDetail