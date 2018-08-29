import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../../History';
import { GoogleLogout } from 'react-google-login';
import HeaderWrapper from './Header.style';
import { logout } from '../../../redux/actions/Auth/AuthActions';

class Header extends React.Component {
    
    constructor() {
        super();

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.props.logout();
        history.push('/');
    }
    
    render() {
        return (
            <HeaderWrapper>
            <GoogleLogout
                buttonText="Logout"
                onLogoutSuccess={this.handleLogout}
            >
            </GoogleLogout>
            </HeaderWrapper>
        )
    }
}

function mapStateToProps(state) {
    return state;
}

const mapDispatchToProps = {
    logout
};

export default connect (mapStateToProps, mapDispatchToProps)(Header);