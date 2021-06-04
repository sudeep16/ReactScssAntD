import React from "react";
import { useSelector } from "react-redux";
import { Table, Space } from "antd";
import { Button } from "antd";

const columns = [
  {
    title: "Display Name",
    dataIndex: "displayName",
    width: 200,
  },
  {
    title: "System Name",
    dataIndex: "systemName",
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

const RolesComponent = () => {
  const { allRoles } = useSelector((state) => state.rolesData);
  //   console.log(allBooks);
  return <Table columns={columns} dataSource={allRoles} />;
};

export default RolesComponent;
