import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRoles } from "../../../redux/roles/actions";
import RolesComponent from "./RolesComponent";

const RolesListing = () => {
  const { allRoles } = useSelector((state) => state.rolesData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoles());
  }, []);

  console.log("All Roles: ", allRoles);

  return (
    <div className="mainContainer">
      <RolesComponent />
    </div>
  );
};

export default RolesListing;
