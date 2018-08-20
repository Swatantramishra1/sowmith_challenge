import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import MainWrapper from './Main.style';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import UpdateUser from '../Users/UpdateUser/UpdateUser';

class Main extends React.Component {
    render() {
        return (
            <MainWrapper>
                <Header />
                <div className="content">
                    <Route exact path='/home' component={UpdateUser} />
                </div>
                <Footer />
            </MainWrapper>
        )
    }
}

function mapToStateProps(state) {
    return state;
}

const mapDispatchToProps = {

}

export default connect(mapToStateProps, mapDispatchToProps)(Main);