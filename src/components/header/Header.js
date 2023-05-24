import React from 'react'
import './Header.css'
import logo from '../../assets/amazon_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider/StateProvider';

const Header = () => {
    const [{ cart }, dispatch] = useStateValue()
    return (
        <div className='header'>
            {/* logo */}
            <Link to='/'>
                <img src={logo} alt="amazon_logo" className='header__logo' />
            </Link>

            {/* header search Bar */}
            <div className="header__search">
                <input className='header__searchInput' type="text" />
                <SearchIcon className='header_searchIcon' />
            </div>

            {/* header navigation */}
            <div className="header__nav">
                {/* all tav options */}
                <Link to='/login'>
                    <div className="header__option">
                        <span className='header__optionOne'>Hello Guest</span>
                        <span className='header__optionTwo'>Sign In</span>
                    </div>
                </Link>

                <div className="header__option">
                    <span className='header__optionOne'>Returns</span>
                    <span className='header__optionTwo'>& Orders</span>
                </div>

                <div className="header__option">
                    <span className='header__optionOne'>Your</span>
                    <span className='header__optionTwo'>Prime</span>
                </div>


                <Link to='/checkout'>
                    <div className="header_shoppingCart">
                        <ShoppingCartIcon className='header__shoppingCartIcon' />
                        <span className='header__optionTwo header__basketCount'>{cart?.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header
