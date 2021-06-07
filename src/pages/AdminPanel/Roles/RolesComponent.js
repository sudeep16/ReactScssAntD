import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Space } from "antd";
import { Button } from "antd";
import { deleteRole } from "../../../redux/roles/actions";

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
          <Popconfirm
            title="Are you sure to delete this task?"
            onConfirm={(e) => dispatch(deleteRole(record._id))}
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

  const { allRoles } = useSelector((state) => state.rolesData);
  //   console.log(allBooks);
  return <Table columns={columns} dataSource={allRoles} />;
};

export default RolesComponent;
