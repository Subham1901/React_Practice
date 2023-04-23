import React, { useState } from "react";

const Controlled = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  console.log(formData);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={formData.name}
          placeholder="Name"
          name="name"
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <input
          value={formData.email}
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Controlled;
