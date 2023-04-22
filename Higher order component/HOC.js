import React, { useEffect, useState } from "react";

const HOC = (Component, source) => {
  return function HOC() {
    // console.log(props);
    const [data, setData] = useState([]);
    const [term, setTerm] = useState("");
    useEffect(() => {
      const getData = async () => {
        const data = await fetch(
          `https://jsonplaceholder.typicode.com/${source}`
        );
        const json = await data.json();
        setData(json);
      };
      getData();
    }, []);
    console.log(data);
    const renderAllData = data.filter((data) => {
      if (source === "users") {
        const { name } = data;
        return name.indexOf(term) >= 0;
      }
      if (source === "todos") {
        const { title } = data;
        return title.indexOf(term) >= 0;
      }
    });
    return (
      <div>
        <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
        <Component info={renderAllData} />
      </div>
    );
  };
};

export default HOC;
