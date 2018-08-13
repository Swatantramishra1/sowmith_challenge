import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderWrapper from './Header.style';
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <div className="flex header-container">
                      <img className="user-icon" src="http://via.placeholder.com/30x30" alt="" />
                </div>
            </HeaderWrapper>
        )
    }
}

function mapToStateProps(state) {
    return state;
}

const mapDispatchToProps = {

}

export default connect(mapToStateProps,mapDispatchToProps)(Header);