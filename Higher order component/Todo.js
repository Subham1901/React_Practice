import React from "react";
import HOC from "./HOC";

const Todo = ({ info }) => {
  const renderAllData = info.map((data) => {
    return (
      <div key={data.id}>
        <h3>{data?.title}</h3>
      </div>
    );
  });
  return <div>{renderAllData}</div>;
};

const HOCTodo = HOC(Todo, "todos");
export default HOCTodo;
