import React from 'react';
import {Router,Switch,Route,Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import MainWrapper from './Main.style';
import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import AddUser from '../Users/AddUser/AddUser';
import UpdateUser from '../Users/UpdateUser/UpdateUser';
import NotFound from '../../components/NotFound/NotFound';
class Main extends React.Component {
    render() {
        console.log(this.props)
        let dynamicRoutes = ["","user/add","user/update"].map((tab, i) => {
            switch (tab) {
              case '':
                return <Route exact path={`/home/` + tab} key={i + 1} component={Dashboard} />
              case 'user/add':
                return <Route exact path={`/home/` + tab} key={i + 1} component={AddUser} />
              case 'user/update':
                return <Route exact path={`/home/` + tab} key={i + 1} component={UpdateUser} />
              default:
                return <Route component={NotFound} />
            }
          });
        return (
            <MainWrapper>
                <Header />
                <div className="content">
                        <Switch>
                            {dynamicRoutes}
                        </Switch>
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