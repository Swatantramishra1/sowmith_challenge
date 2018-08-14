import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContentWrapper from './MainContent.style';
import { Card, Col, Row } from 'antd';

class MainContent extends Component {
    render() {
        return (
            <MainContentWrapper>
                <Row gutter={0}>
                    <Col span={8}>
                        <Card title="No Of IC" bordered={false}>10</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="No Of User" bordered={false}>50</Card>
                    </Col>
                    <Col span={8}>
                        <Card title="No Of IC Sold" bordered={false}>10</Card>
                    </Col>
                </Row>
            </MainContentWrapper>
        )
    }
}

function mapToStateProps(state) {
    return state;
}

const mapDispatchToProps = {

}

export default connect(mapToStateProps, mapDispatchToProps)(MainContent);