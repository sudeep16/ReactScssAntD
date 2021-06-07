import React from "react";
import { Form, Input, Button } from "antd";
import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addAuthor } from "../../../redux/authors/actions";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AddAuthorComponent = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(addAuthor(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please input author first name !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please input author last name !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddAuthorComponent;
