import React, { Component } from 'react';
import LogoWrapper from './Logo.style';
class Logo extends Component {
    render() {
        return (

            <LogoWrapper>
                {/* <img src="https://mordorintelligence.com:81/mordorlabs/img/home_image/logo.png" alt="" srcset=""/> */}
                <h3>Intelligence Center <sub><small>CMS</small></sub></h3>
            </LogoWrapper>
        )
    }
}

export default Logo;