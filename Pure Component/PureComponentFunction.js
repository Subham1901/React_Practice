import React, { useState } from "react";

const PureComponentFunction = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {console.log("inside functional component")}
      <h2>{counter}</h2>
      <button
        style={{ padding: "2px", width: "5rem" }}
        onClick={() => setCounter(0)}
      >
        ADD
      </button>
    </div>
  );
};
const PureComponentFn = React.memo(PureComponentFunction);
export default PureComponentFn;
