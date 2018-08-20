import React from 'react';
import { connect } from 'react-redux';
import HomeWrapper from './Home.style';
import SideMenu from '../SideMenu/SideMenu';
import Main from '../Main/Main';

class Home extends React.Component {
    render() {
        return (
            <HomeWrapper>
                <div className="flex home-container">
                    <SideMenu />
                    <Main />
                </div>
            </HomeWrapper>
        )
    }
}

function mapToStateProps(state) {
    return state;
}

const mapDispatchToProps = {

}

export default connect(mapToStateProps, mapDispatchToProps)(Home);