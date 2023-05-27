import React from 'react'
import './Header.css'
import logo from '../../assets/amazon_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../stateProvider/StateProvider';
import { auth } from '../../firebase'
const Header = () => {

    const [{ cart, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user)
            auth.signOut();
    }

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
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className='header__optionOne'>Hello {user ? <b>{user?.email}</b> : 'Guest'}</span>
                        <span className='header__optionTwo'>{
                            user ? 'Sign Out' : 'Sign In'
                        }</span>
                    </div>
                </Link>

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
