import React from 'react';
import { connect } from 'react-redux';
import MainWrapper from './Main.style';
import Header from './Header/Header';
import MainContent from '../Main/MainContent/MainContent';
import ShortCuts from '../Main/ShortCuts/ShortCuts';
import RecentActivities from '../Main/RecentActivities/RecentActivities';
import Footer from '../Main/Footer/Footer';
import { Col, Row } from 'antd';

class Main extends React.Component {
    render() {
        return (
            <MainWrapper>
                <div className="flex main-container">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="content">
                        <div className="major-statistics">
                            <MainContent />
                        </div>
                        <div className="recent-and-shortcuts-wrapper">
                            <Row gutter={20}>
                                <Col span={16}>
                                    <RecentActivities />
                                </Col>
                                <Col span={8}>
                                    <ShortCuts />
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="footer">
                        <Footer />
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