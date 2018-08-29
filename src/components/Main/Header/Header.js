import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../../History';
import { Button } from 'antd';
import HeaderWrapper from './Header.style';
import { logout } from '../../../redux/actions/Auth/AuthActions';

class Header extends React.Component {
    
    constructor() {
        super();

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        console.log('call logout');
        sessionStorage.clear();
        this.props.logout();
        history.push('/');
    }
    
    render() {
        return (
            <HeaderWrapper>
                <Button type='default' className="logout-btn" onClick={this.handleLogout}>LOGOUT</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);