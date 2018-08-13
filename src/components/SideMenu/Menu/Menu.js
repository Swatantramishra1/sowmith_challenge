import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Button } from 'antd';
import MenuWrapper from './Menu.style';

const SubMenu = Menu.SubMenu;

class MenuComponent extends Component {
    render() {
        return (
            <MenuWrapper>            
                <div className="menu-container">
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        inlineCollapsed={false}
                    >
                        {/* <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="inbox" />
                            <span>Option 3</span>
                        </Menu.Item> */}
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>IC</span></span>}>
                            <Menu.Item key="9">Add IC</Menu.Item>
                            <Menu.Item key="10">Edit IC</Menu.Item>
                            {/* <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu> */}
                        </SubMenu>
                        <SubMenu key="sub3" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub4" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub5" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub6" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub7" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub8" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>User</span></span>}>
                            <Menu.Item key="5">Add User</Menu.Item>
                            <Menu.Item key="6">Edit User</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </MenuWrapper>
        )
    }
}
export default MenuComponent; 