import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Product.css';
import { useStateValue } from '../stateProvider/StateProvider';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';

const Product = ({ id, title, image, price, category, rating, getProductDetails }) => {
    const [{ cart }, dispatch] = useStateValue();
    // const [isTryItOutOpen, setIsTryItOutOpen] = useState(false);
    // const [uploadedPhoto, setUploadedPhoto] = useState(null);

    const navigate = useNavigate();

    const GotoProductPage = (e) => {
        if (!e.target.classList.contains('add-to-cart-button')) {
            navigate(`/productDetails`);
            getProductDetails({
                id, title, price, image, category, rating
            });
        }
    }

    // const handlePhotoUpload = (event) => {
    //     const file = event.target.files[0];
    //     setUploadedPhoto(URL.createObjectURL(file));
    // };

    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id,
                title,
                price,
                image,
                category,
                rating,
            },
        });
    };

    return (
        <div className='product'>
            <div class="product-card">
                <img class="product-image" src={image} alt="Product Image" onClick={GotoProductPage} />
                <div class="product-details" onClick={GotoProductPage}>
                    <h2 class="product-title">{title}</h2>
                    <h2 class="product-rating">
                        {[...Array(rating)].map((_, index) => (
                            <FaStar className='product__starIcon' key={index} />
                        ))}
                    </h2>
                    <div class="product__price__cat" onClick={GotoProductPage}>
                        <p class="product-price">
                            <small>₹</small>
                            <strong>{price}</strong>
                        </p>
                        <p class="product-category" >{category}</p>
                    </div>
                    <button class="add-to-cart-button" onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default Product;
