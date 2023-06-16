import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Home.css';
import Product from '../../components/product/Product';

const Home = ({ searchQuery }) => {

    const [products, setProducts] = useState([]);

    const [selectedValue, setSelectedValue] = useState('')

    const [selectedCategory, setSelectedCategory] = useState('');

    const [loading, setLoading] = useState(true);

    const [visible, setVisible] = useState(4);

    useEffect(() => {

        const fetchedProducts = [
            {
                id: uuidv4(),
                title: 'Samsung 860 EVO 500GB SATA 2.5" Internal Solid State Drive (SSD)',
                price: '25225.10',
                image: 'https://m.media-amazon.com/images/I/61m1LYBVQiL._AC_UY327_FMwebp_QL65_.jpg',
                category: 'electronics',
                rating: 4,
            },
            {
                id: uuidv4(),
                title: 'Jordan Mens Air',
                price: '41000.00',
                image: 'https://m.media-amazon.com/images/I/61lHu4-ESDS._AC_UL600_FMwebp_QL65_.jpg',
                category: 'footwear',
                rating: 3,
            },
            {
                id: uuidv4(),
                title: 'Allen Solly Mens Plain Regular fit T- Shirt',
                price: '739.00',
                image: 'https://m.media-amazon.com/images/I/41AuKMYzx4L._AC_SR480,600_.jpg',
                category: 'clothing',
                rating: 4,
            },
            {
                id: uuidv4(),
                title: 'Apple AirPods Pro',
                price: '25000.00',
                image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg',
                category: 'electronics',
                rating: 5,
            },
            {
                id: uuidv4(),
                title: 'Mens Carrot Stretchable Jeans',
                price: '970.00',
                image: 'https://m.media-amazon.com/images/I/71HQSrFtntL._AC_UL600_FMwebp_QL65_.jpg',
                category: 'clothing',
                rating: 5,
            },
            {
                id: uuidv4(),
                title: 'Acer EK220Q 21.5 Inch (54.61 cm) Full HD (1920x1080) VA Panel LCD Monitor with LED Back Light I 1 MS VRB',
                price: '6700.00',
                image: 'https://m.media-amazon.com/images/I/81xHjVQPwAL._AC_UL480_QL65_.jpg',
                category: 'electronics',
                rating: 3,
            },
            {
                id: uuidv4(),
                title: 'Nike Jordan Play Slide',
                price: '2546.00',
                image: 'https://m.media-amazon.com/images/I/51qB2r7eg8L._UY625_.jpg',
                category: 'footwear',
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
        setVisible(prevState => prevState + 4)
    }

    return (
        <>

            <div className='home'>
                <div className="home__container">
                    <div className="home__row__first">

                        <h4>Filter</h4>

                        <select
                            className="select-box"
                            style={{
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                color: '#333',
                                backgroundColor: '#fff',
                            }}
                            value={selectedValue}
                            onChange={e => setSelectedValue(e.target.value)}
                        >
                            <option value="">Sort By Price</option>
                            <option value="LowToHigh">Low To High</option>
                            <option value="HighToLow">High To Low</option>
                        </select>

                        <select
                            className="select-box"
                            style={{
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '14px',
                                color: '#333',
                                backgroundColor: '#fff',
                                marginTop: '16px',
                            }}
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
                            <p>No products found.</p>
                        ) : (
                            products.slice(0, visible).map(product => (
                                <Product
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    image={product.image}
                                    rating={product.rating}
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