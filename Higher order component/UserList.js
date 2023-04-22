import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UserList = ({ info }) => {
  console.log(info);
  const renderAllData = info.map((data) => {
    return (
      <div key={data.id}>
        <h3>{data.name}</h3>
      </div>
    );
  });

  return <div>{renderAllData}</div>;
};
const SearchUser = HOC(UserList, "users");
export default SearchUser;
