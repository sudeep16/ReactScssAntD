import React, { useState, useEffect } from "react";
import { Drawer, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getAllAuthors } from "../../../redux/authors/actions";
import AddAuthorComponent from "./AddAuthorComponent";
import AuthorComponent from "./AuthorComponent";

const AuthorListing = () => {
  const { allAuthors } = useSelector((state) => state.authorsData);
  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);

  console.log("All Authors:", allAuthors);

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
            <AddAuthorComponent />
          </p>
        </Drawer>
      </div>
      <div>
        <AuthorComponent />
      </div>
    </div>
  );
};

export default AuthorListing;
