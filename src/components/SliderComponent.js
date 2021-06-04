import React, { Component } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;

class SliderComponent extends Component {
  state = {
    collapsed: true,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <SubMenu key="sub1" s title="Users">
            <Menu.Item key="2">
              <Link to="/allUsers">All Users</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Books">
            <Menu.Item key="3">
              <Link to="/allBooks">List Books</Link>
            </Menu.Item>
            <Menu.Item key="4">Add Books</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title="Role">
            <Menu.Item key="5">List Roles</Menu.Item>
            <Menu.Item key="6">Add Roles</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title="Author">
            <Menu.Item key="7">List Author</Menu.Item>
            <Menu.Item key="8">Add Author</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default SliderComponent;
