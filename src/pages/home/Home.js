import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2023/D11_HeroPC_3000x1200_rev._CB589422742_.jpg" alt="" />

                {/* now we have 3 rows to create and each one have different number of product cards */}

                <div className="home__row">
                    {/* product */}
                    {/* product */}
                </div>

                <div className="home__row">
                    {/* product */}
                    {/* product */}
                    {/* product */}
                </div>

                <div className="home__row">
                    {/* product */}
                </div>

            </div>
        </div>
    )
}

export default Home
