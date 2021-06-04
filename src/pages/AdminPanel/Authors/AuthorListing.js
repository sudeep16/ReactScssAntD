import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllAuthors } from "../../../redux/authors/actions";
import AuthorComponent from "./AuthorComponent";

const AuthorListing = () => {
  const { allAuthors } = useSelector((state) => state.authorsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAuthors());
  }, []);

  console.log("All Authors:", allAuthors);

  return (
    <div className="mainContainer">
      <AuthorComponent />
    </div>
  );
};

export default AuthorListing;
