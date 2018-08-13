import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainWrapper from './Main.style';
import Header from './Header/Header.component';
import MainContent from '../Main/MainContent/MainContent.component';
import ShortCuts from '../Main/ShortCuts/ShortCuts.component';
import RecentActivities from '../Main/RecentActivities/RecentActivities.component';
class Main extends Component {
    render() {
        return (
            <MainWrapper>
                <div className="flex main-container">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="content">
                        <MainContent />

                        <div className="flex second-half-content">

                            <RecentActivities />
                            <ShortCuts />

                        </div>

                    </div>
                    <div className="footer">
                    </div>
                </div>
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