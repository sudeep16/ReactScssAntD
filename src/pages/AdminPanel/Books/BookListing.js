import React, { useEffect, useState } from "react";
import { Drawer, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks } from "../../../redux/books/actions";
import BookComponent from "./BookComponent";
import AddBookComponent from "./AddBookComponent";
import { getAllAuthors } from "../../../redux/authors/actions";

const BookListing = () => {
  const { allBooks } = useSelector((state) => state.booksData);
  const { allAuthors } = useSelector((state) => state.authorsData);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);

  console.log("All Author", allAuthors);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="mainContainer">
      <div className="site-drawer-render-in-current-wrapper">
        <div>
          <Button
            type="primary"
            onClick={showDrawer}
            style={{ marginBottom: "20px" }}
          >
            Add Books
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          width={600}
          onClose={onClose}
          visible={visible}
          getContainer={true}
          style={{ position: "absolute" }}
        >
          <p>
            <AddBookComponent />
          </p>
        </Drawer>
      </div>

      <div>
        <BookComponent />
      </div>
    </div>
  );
};

export default BookListing;
