import React from 'react';
import HeaderWrapper from './Header.style';

const Header = () => {
    return (
        <HeaderWrapper>
            <div className="flex header-container">
                  <img className="user-icon" src="http://via.placeholder.com/30x30" alt="" />
            </div>
        </HeaderWrapper>
    )
}

export default Header;