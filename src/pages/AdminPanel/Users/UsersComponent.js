import React from "react";
import { Table, Space } from "antd";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../redux/users/actions";

const UsersComponent = () => {
  const dispatch = useDispatch();
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
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={(e) => dispatch(deleteUser(record._id))}
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

  const { allUsers } = useSelector((state) => state.usersData);
  //   console.log(allBooks);
  return <Table columns={columns} dataSource={allUsers} />;
};

export default UsersComponent;
