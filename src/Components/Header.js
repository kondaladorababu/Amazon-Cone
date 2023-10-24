import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasketSharp } from '@mui/icons-material';


function Header() {
    return (
        <nav className='header'>
            {/* Logo on the Left:image */}
            <Link to='/login'>
                <img
                    className="header_logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon"
                />
            </Link>

            {/* Search Box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className='header_searchIcon' />
            </div>

            {/* 3 Links */}
            <div className="header_nav">

                {/* 1st link */}
                <Link to='/login' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Hello Dora</span>
                        <span className='header_optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Returns</span>
                        <span className='header_optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='/' className='header_link'>
                    <div className="header_option">
                        <span className='header_optionLineOne'>Your</span>
                        <span className='header_optionLineTwo'>Prime</span>
                    </div>
                </Link>

                {/* 4th link */}
                <Link to='/checkout' className='header_link'>
                    <div className="header_optionBasket">
                        {/* shopping basket icon */}
                        <ShoppingBasketSharp />
                        <span className='header_optionLineTwo header_basketCount'>0</span>
                        {/* No itemsicon */}
                    </div>
                </Link>
            </div>
            {/* \Basket Icon with count */}
        </nav>
    )
}

export default Header