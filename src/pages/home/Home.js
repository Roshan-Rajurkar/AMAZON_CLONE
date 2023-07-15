import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Home.css';
import Product from '../../components/product/Product';

const Home = ({ searchQuery, getProductDetails }) => {

    const [products, setProducts] = useState([]);

    const [selectedValue, setSelectedValue] = useState('')

    const [selectedCategory, setSelectedCategory] = useState('');

    const [loading, setLoading] = useState(true);

    const [visible, setVisible] = useState(3);

    useEffect(() => {

        const fetchedProducts = [
            {
                id: uuidv4(),
                title: 'Apple 2023 MacBook Pro Laptop M2 Pro chip with 12‑core CPU and 19‑core GPU: 33.74 cm (16.2-inch), 16GB Unified Memory,1TB SSD Storage. Works with iPhone/iPad; Space Grey',
                price: '248980.00',
                image: 'https://m.media-amazon.com/images/I/61Ph34V0YAL._AC_UY327_FMwebp_QL65_.jpg',
                category: 'electronics',
                rating: 4,
            },
            {
                id: uuidv4(),
                title: `White, Pollen, Jordan Point Lane Men's Running Shoes`,
                price: '12491.00',
                image: 'https://m.media-amazon.com/images/I/31cvPoqJt2L._AC_UL600_FMwebp_QL65_.jpg',
                category: 'footwear',
                rating: 5,
            },
            {
                id: uuidv4(),
                title: `Men's Cotton Hooded Neck Hoodies`,
                price: '739.00',
                image: 'https://m.media-amazon.com/images/I/51VmIOwoLDL._AC_UL600_QL65_.jpg',
                category: 'clothing',
                rating: 4,
            },
            {
                id: uuidv4(),
                title: 'boAt Airdopes Atom 81 True Wireless Earbuds with Upto 50H Playtime, Quad Mics ENx™ Tech, 13MM Drivers,Super Low Latency(50ms), ASAP™ Charge, BT v5.3(Opal Black)',
                price: '899.00',
                image: 'https://m.media-amazon.com/images/I/6150vg2i4hL._AC_UY327_QL65_.jpg',
                category: 'electronics',
                rating: 5,
            },
            {
                id: uuidv4(),
                title: 'Men Slim Jeans',
                price: '970.00',
                image: 'https://m.media-amazon.com/images/I/81CCu7aiqXL._AC_UL600_FMwebp_QL65_.jpg',
                category: 'clothing',
                rating: 5,
            },
            {
                id: uuidv4(),
                title: 'LG 23.8 inch (60.45 cm) Borderless LED 1920x1080 Pixels Monitor - Full HD, IPS Panel with VGA, HDMI, Audio in/Out Ports and in-Built Speakers - 24MP88HV (Silver/White)',
                price: '13499.00',
                image: 'https://m.media-amazon.com/images/I/71V4nWYvCoL._AC_UY327_FMwebp_QL65_.jpg',
                category: 'electronics',
                rating: 3,
            },
            {
                id: uuidv4(),
                title: 'Portronics Hydra 10 Mechanical Wireless Gaming Keyboard with Bluetooth 5.0 + 2.4 GHz, RGB Lights 16.8 Million Colors, Type C Charging, Compatible with PCs, Smartphones and Tablets(Red)',
                price: '2799.00',
                image: 'https://m.media-amazon.com/images/I/611EaZOjMOL._AC_UY327_QL65_.jpg',
                category: 'electronics',
                rating: 4,
            },
            {
                id: uuidv4(),
                title: 'Shirt for Men || Opaqu Cotton Shirts for Men',
                price: '789.00',
                image: 'https://m.media-amazon.com/images/I/61Xv6ytnYiL._AC_UL600_FMwebp_QL65_.jpg',
                category: 'clothing',
                rating: 3,
            },
            {
                id: uuidv4(),
                title: 'New Limitless FS1 Smart Watch|Biggest 1.95',
                price: '2295.00',
                image: 'https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SR400,600_.jpg',
                category: 'electronics',
                rating: 4,
            },
            // {
            //     id: uuidv4(),
            //     title: '',
            //     price: '.00',
            //     image: '',
            //     category: '',
            //     rating: 4,
            // },
        ];

        let filteredProducts = [...fetchedProducts];

        if (selectedCategory !== '') {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        if (selectedValue === 'LowToHigh') {
            filteredProducts.sort((a, b) => parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, '')));
        }
        if (selectedValue === 'HighToLow') {
            filteredProducts.sort((a, b) => parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, '')));
        }

        // based on search value
        if (searchQuery) {
            filteredProducts = filteredProducts.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setProducts(filteredProducts);
        setLoading(false);
    }, [selectedValue, selectedCategory, searchQuery]);

    const handleCategoryChange = e => {
        setSelectedCategory(e.target.value);
    };

    const setVisibleProducts = () => {
        setVisible(prevState => prevState + 3)
    }

    return (
        <>

            <div className='home'>
                <div className="home__container">
                    <div className="home__row__first">

                        <h4>Filter</h4>

                        <select
                            className="select-box"
                            value={selectedValue}
                            onChange={e => setSelectedValue(e.target.value)}
                        >
                            <option value="">Sort By Price</option>
                            <option value="LowToHigh">Low To High</option>
                            <option value="HighToLow">High To Low</option>
                        </select>

                        <select
                            className="select-box"
                            value={selectedCategory}
                            onChange={handleCategoryChange}
                        >
                            <option value="">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="footwear">Footwear</option>
                            <option value="clothing">Clothing</option>
                        </select>
                    </div>
                    <div className="home__row">
                        {loading ? (
                            <p>Loading...</p>
                        ) : products.length === 0 ? (
                            <p className="no-products">No product found.</p>
                        ) : (
                            products.slice(0, visible).map(product => (
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    category={product.category}
                                    rating={product.rating}
                                    getProductDetails={getProductDetails}
                                />
                            ))
                        )}
                    </div>

                </div>
            </div>

            <div className='loadingProducts'>
                {
                    visible < products.length && (
                        <button
                            className='loadBtn'
                            onClick={setVisibleProducts}
                            disabled={visible >= products.length}
                        >
                            Load more..
                        </button>
                    )
                }
            </div>
        </>
    );
};

export default Home;