import React from "react";
import { Tabs } from "antd";
import BookListing from "./Books/BookListing";
import UsersListing from "./Users/UsersListing";
import AuthorListing from "./Authors/AuthorListing";
import RolesListing from "./Roles/RolesListing";

const { TabPane } = Tabs;

function callback(key) {
  // console.log(key);
}

const AdminDashboard = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={callback} className="tabsData">
      <TabPane tab="Users" key="1">
        <UsersListing />
      </TabPane>
      <TabPane tab="Authors" key="2">
        <AuthorListing />
      </TabPane>
      <TabPane tab="Books" key="3">
        <BookListing />
      </TabPane>
      <TabPane tab="Roles" key="4">
        <RolesListing />
      </TabPane>
    </Tabs>
  );
};

export default AdminDashboard;
