import React, { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState();
  const handleAddUser = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknwledged) {
          alert("user added");
          e.target.reset();
        }
      });
  };
  const handleInputBlur = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    // console.log("va-", value, "fi-", field);
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(newUser);
  };
  return (
    <div>
      <h2>Please add a new user</h2>

      <form onSubmit={handleAddUser}>
        <input
          onBlur={handleInputBlur}
          type="text"
          name="name"
          placeholder="type a name"
          required
        />{" "}
        <br />
        <input
          onBlur={handleInputBlur}
          type="email"
          name="email"
          placeholder="type a email"
          required
        />{" "}
        <br />
        <input
          onBlur={handleInputBlur}
          type="number"
          name="phone"
          placeholder="type a phone"
          required
        />{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
