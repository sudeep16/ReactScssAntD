import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getAllAuthors } from "../../../redux/authors/actions";
import { addBook } from "../../../redux/books/actions";

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
  const { allAuthors } = useSelector((state) => state.authorsData);
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(addBook(values));
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
        label="ISBN Number"
        name="isbn"
        rules={[
          {
            required: true,
            min: 15,
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
        <Select defaultValue="Select an Author" style={{ width: 370 }}>
          {allAuthors.map((authors) => {
            const { _id, firstName, lastName } = authors;
            return <Option value={_id}>{firstName + " " + lastName}</Option>;
          })}
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
