import React, { Component } from 'react';
import LogoWrapper from './Logo.style';
class Logo extends Component {
    render() {
        return (
            <LogoWrapper>
                <div className="logo-container">
                    <h3 className="main-heading">MI CMS</h3>
                </div>
            </LogoWrapper>
        )
    }
}

export default Logo;