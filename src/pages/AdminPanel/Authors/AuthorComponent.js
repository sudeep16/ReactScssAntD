import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space } from "antd";
import { Button } from "antd";
import { deleteAuthor } from "../../../redux/authors/actions";

const AuthorComponent = () => {
  const dispatch = useDispatch();
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
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={(e) => dispatch(deleteAuthor(record._id))}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const { allAuthors } = useSelector((state) => state.authorsData);
  //   console.log(allBooks);
  return <Table columns={columns} dataSource={allAuthors} />;
};

export default AuthorComponent;
