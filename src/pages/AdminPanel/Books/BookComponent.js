import React from "react";
import { Table, Space } from "antd";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../../redux/books/actions";

const BookComponent = () => {
  const dispatch = useDispatch();

  // const handleDelete = (e) => {
  //   console.log(record._id);
  //   // dispatch(deleteBook(record._id));
  // };
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
      width: 200,
    },

    {
      title: "Number of Copies",
      dataIndex: "numberOfCopies",
      key: "numberOfCopies",
      width: 200,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      width: 200,
    },
    {
      title: "Author",
      width: 200,
      key: "author",
      render: (record) => <span> {record?.author?.firstName}</span>,
      // render: (record) => <span> {console.log(record)}</span>,
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
            onClick={(e) => dispatch(deleteBook(record._id))}
            // onClick={handleDelete}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const { allBooks } = useSelector((state) => state.booksData);
  //   console.log(allBooks);
  return <Table columns={columns} dataSource={allBooks} />;
};

export default BookComponent;
