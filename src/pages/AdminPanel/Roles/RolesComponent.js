import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space } from "antd";
import { Button } from "antd";

const RolesComponent = () => {
  const dispatch = useDispatch();
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
          <Button
            type="primary"
            danger
            onClick={(e) => dispatch(deleteBook(record._id))}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const { allRoles } = useSelector((state) => state.rolesData);
  //   console.log(allBooks);
  return <Table columns={columns} dataSource={allRoles} />;
};

export default RolesComponent;
