import React from 'react';
import logo from '../../assets/images/logo.png';
import Menu from './Menu';
import Aside from './Aside';
import Link from 'next/link';


const Header = ({ children }) => {

    return (
        <div>
            <Aside />
            <header id="header" className="header">
                <div className="header__top">
                    <div className="header__top-left">
                        <span>
                            <p>2020</p>
                            <p>Jul 29 - Aug 02</p>
                        </span>
                    </div>
                    <div className="header__top-middle">
                        <Link href='/index' as="/index">
                            <img src={logo} alt='Elysium Island Festival' className='header__top-middle--logo' />
                        </Link>
                    </div>
                    <div className="header__top-right">
                        <span>
                            <p>Serbia</p>
                            <p>Koh Chang Island</p>
                        </span>
                    </div>
                </div>
            </header>
            <Menu />

        </div>
    )
}

export default Header;