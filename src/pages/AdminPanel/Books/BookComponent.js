import React from "react";
import { Table, Space } from "antd";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../../redux/books/actions";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 200,
  },
  {
    title: "ISBN",
    dataIndex: "isbn",
    key: "isbn",
  },

  {
    title: "Number of Copies",
    dataIndex: "numberOfCopies",
    key: "numberOfCopies",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Author",
    dataIndex: "author.firstName",
    key: "author",
    width: 200,
  },
  {
    title: "Action",
    key: "action",

    render: (text, record) => (
      <Space size="middle">
        <Button type="primary">Edit</Button>
        <Button
          type="primary"
          danger
          //   onClick={(e) => console.log(record._id)}
          //   onClick={(e) => useDispatch(deleteBook(record.id))}
        >
          Delete
        </Button>
      </Space>
    ),
  },
];

const BookComponent = () => {
  const { allBooks } = useSelector((state) => state.booksData);
  console.log(allBooks);
  return <Table columns={columns} dataSource={allBooks} />;
};

export default BookComponent;
