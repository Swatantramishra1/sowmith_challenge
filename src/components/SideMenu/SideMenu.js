import React, { Component } from 'react';
import { connect } from 'react-redux';
import SideMenuWrapper from './SideMenu.style';
import Logo from './Logo/Logo';
import MenuComponent from '../SideMenu/Menu/Menu';

class SideMenu extends Component {
    render() {
        return (
            <SideMenuWrapper>
                <Logo />
                <MenuComponent />
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

