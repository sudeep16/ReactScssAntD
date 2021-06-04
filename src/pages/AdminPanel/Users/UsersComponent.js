import React from "react";
import { Table, Space } from "antd";
import { Button } from "antd";
import { useSelector } from "react-redux";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 200,
  },
  {
    title: "Username",
    dataIndex: "username",
    width: 200,
  },

  {
    title: "Email",
    dataIndex: "email",
    width: 200,
  },
  {
    title: "Gender",
    dataIndex: "gender",
    width: 200,
  },

  {
    title: "Action",
    key: "action",

    render: (text, record) => (
      <Space size="middle">
        <Button type="primary" danger>
          Delete
        </Button>
      </Space>
    ),
  },
];

const UsersComponent = () => {
  const { allUsers } = useSelector((state) => state.usersData);
  //   console.log(allBooks);
  return <Table columns={columns} dataSource={allUsers} />;
};

export default UsersComponent;
