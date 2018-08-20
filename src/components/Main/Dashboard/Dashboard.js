import React from 'react';
import MainContent from '../MainContent/MainContent';
import ShortCuts from '../ShortCuts/ShortCuts';
import RecentActivities from '../RecentActivities/RecentActivities';
import { Row, Col } from 'antd';
import DashboardWrapper from './Dashboard.style';

class Dashboard extends React.Component {
  render() {
    return(
      <DashboardWrapper>
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
      </DashboardWrapper>
    )
  }
}

export default Dashboard;