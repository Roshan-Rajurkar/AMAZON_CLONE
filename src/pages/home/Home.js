import React from 'react'
import './Home.css'
import Product from '../../components/product/Product'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">


                <div className="home__row">
                    <Product
                        id={6598324}
                        title={'Samsung 860 EVO 500GB SATA 2.5" Internal Solid State Drive (SSD)'}
                        price={'25225.10'}
                        image={'https://m.media-amazon.com/images/I/61m1LYBVQiL._AC_UY327_FMwebp_QL65_.jpg'}
                        rating={4}
                    />

                    <Product
                        id={5258963}
                        title={'Apple AirPods Pro'}
                        price={'25000.00'}
                        image={'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY327_FMwebp_QL65_.jpg'}
                        rating={4.5}
                    />

                    <Product
                        id={2154878}
                        title={'Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones'}
                        price={'29990.00'}
                        image={'https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg'}
                        rating={4}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home