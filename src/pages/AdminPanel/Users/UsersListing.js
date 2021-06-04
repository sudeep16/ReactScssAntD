import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers } from "../../../redux/users/actions";
import UsersComponent from "./UsersComponent";

const UsersListing = () => {
  const { allUsers } = useSelector((state) => state.usersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  // console.log("All User", allUsers);

  return (
    <div className="mainContainer">
      <UsersComponent />
    </div>
  );
};

export default UsersListing;
