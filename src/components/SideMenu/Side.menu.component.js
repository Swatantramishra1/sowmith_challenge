import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenuWrapper from './Side.menu.style';
import Logo from './Logo/Logo.component';
import MenuComponent from '../SideMenu/Menu/Menu.component';
class SideMenu extends Component {
    render() {
        return (
            <SideMenuWrapper>
                 <div className="flex side-menu-container">
                    <div className="logo-container">
                            <Logo />
                    </div>
                    <div className="menu-container">
                       <MenuComponent />
                    </div>
                 </div>
            </SideMenuWrapper>
        )
    }
}

function mapToStateProps(state) {
    return state;
}

const mapDispathToProps = {

}

export default connect(mapToStateProps, mapDispathToProps)(SideMenu);

