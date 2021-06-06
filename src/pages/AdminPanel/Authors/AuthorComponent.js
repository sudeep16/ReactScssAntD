import React from "react";
import { useSelector } from "react-redux";
import { Table, Space } from "antd";
import { Button } from "antd";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    width: 200,
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
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

const AuthorComponent = () => {
  const { allAuthors } = useSelector((state) => state.authorsData);
  //   console.log(allBooks);
  return <Table columns={columns} dataSource={allAuthors} />;
};

export default AuthorComponent;
