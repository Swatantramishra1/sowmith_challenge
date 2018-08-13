import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainWrapper from './Main.style';
import Header from './Header/Header';
import MainContent from '../Main/MainContent/MainContent';
import ShortCuts from '../Main/ShortCuts/ShortCuts';
import RecentActivities from '../Main/RecentActivities/RecentActivities';

class Main extends Component {
    render() {
        return (
            <MainWrapper>
                <div className="flex main-container">
                    <Header />
                    <div className="content">
                        
                        <MainContent />

                        <div className="flex second-half-content">

                            <RecentActivities />
                            <ShortCuts />

                        </div>

                    </div>
                    <div className="footer">
                        <p style={{margin: 0}}>Footer goes here</p>
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