import React, { useRef } from "react";

const Uncontrolled = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const getName = nameRef.current.value;
    const getEmail = emailRef.current.value;
    console.log(getName, getEmail);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Name" type="text" />
        <input ref={emailRef} placeholder="Email" type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
