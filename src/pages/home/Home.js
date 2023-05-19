import React from 'react'
import './Home.css'
import Product from '../../components/product/Product'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2023/D11_HeroPC_3000x1200_rev._CB589422742_.jpg" alt="" />

                {/* now we have 3 rows to create and each one have different number of product cards */}

                <div className="home__row">
                    <Product
                        title={'SanDisk Cruzer Blade 32GB USB Flash Drive'}
                        price={'279.00'}
                        image={'https://m.media-amazon.com/images/I/51W-jxYvHGL._SL1200_.jpg'}
                        rating={5}
                    />
                    <Product
                        title={'Logitech M221 Wireless Mouse, Silent Buttons, 2.4 GHz with USB Mini Receiver, 1000 DPI Optical Tracking, 18-Month Battery Life, Ambidextrous PC/Mac/Laptop - Charcoal Grey'}
                        price={'881.00'}
                        image={'https://m.media-amazon.com/images/I/61sskFEsc0L._SX466_.jpg'}
                        rating={4}
                    />

                </div>

                <div className="home__row">
                    <Product
                        title={'Samsung 860 EVO 500GB SATA 2.5" Internal Solid State Drive (SSD)'}
                        price={'25225.00'}
                        image={'https://m.media-amazon.com/images/I/61m1LYBVQiL._AC_UY327_FMwebp_QL65_.jpg'}
                        rating={4}
                    />

                    <Product
                        title={'Apple AirPods Pro'}
                        price={'25000.00'}
                        image={'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg'}
                        rating={4.5}
                    />

                    <Product
                        title={'Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones'}
                        price={'29990.00'}
                        image={'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg'}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        title={'Samsung Galaxy S21 Ultra 5G'}
                        price={'74998.00'}
                        image={'https://m.media-amazon.com/images/I/71drm2+hb4L._AC_UY327_FMwebp_QL65_.jpg'}
                        rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home