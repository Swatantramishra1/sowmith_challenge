import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShortCutsWrapper from './ShortCuts.style';
import { Card, Table, Icon, Divider, Button, Radio } from 'antd';
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Action 一 {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
      <Divider type="vertical" />
      <a href="javascript:;" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}];
class ShortCuts extends Component {
  render() {
    return (
      <ShortCutsWrapper>
        <div className="short-cuts-container">
          <Card title="Frequently Used Options" bordered={false}>
            {/* <Table columns={columns} dataSource={data} /> */}
            <h3 className="users-shortcuts-heading">Users Shortcuts</h3>
            <div className="flex user-shortcuts">
              <Icon type="user-add" />
              <Icon type="edit" />
            </div>
          </Card>
        </div>
      </ShortCutsWrapper>
    )
  }
}

function mapToStateProps(state) {
  return state;
}

const mapDispatchToProps = {

}

export default connect(mapToStateProps, mapDispatchToProps)(ShortCuts);