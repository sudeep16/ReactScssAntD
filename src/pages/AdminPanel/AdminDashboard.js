import React from "react";
import { Tabs } from "antd";
import BookListing from "./Books/BookListing";

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const AdminDashboard = () => {
  return (
    <Tabs defaultActiveKey="1" onChange={callback} className="tabsData">
      <TabPane tab="Users" key="1">
        Content of Tab Pane 1
      </TabPane>
      <TabPane tab="Authors" key="2">
        Content of Tab Pane 2
      </TabPane>
      <TabPane tab="Books" key="3">
        <BookListing />
      </TabPane>
      <TabPane tab="Roles" key="4">
        Content of Tab Pane 3
      </TabPane>
    </Tabs>
  );
};

export default AdminDashboard;
