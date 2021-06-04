import React from "react";
import { Form, Input, Button } from "antd";
import { Select } from "antd";

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

const AddBookComponent = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="ISBN Number"
        name="isbn"
        rules={[
          {
            required: true,
            message: "Please input book isbn number !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input book title !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Number of Copies"
        name="numberOfCopies"
        rules={[
          {
            required: true,
            message: "Please input number of copies !",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Stock"
        name="stock"
        rules={[
          {
            required: true,
            message: "Please input stock available!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Author" name="author">
        <Select
          defaultValue="Select an Author"
          style={{ width: 370 }}
          onChange={handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddBookComponent;
