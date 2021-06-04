import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AdminNavBar = () => {
  return (
    <>
      <div className="logoContent">
        <img src="images/logo.png" height="50px" width="50px" />
      </div>
      <div className="webpageName">
        <p>Library Management</p>
      </div>
      <div className="nav-items">
        <Avatar size="large" icon={<UserOutlined />} />
      </div>
    </>
  );
};

export default AdminNavBar;
