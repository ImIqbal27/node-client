import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Update = () => {
  const storedUser = useLoaderData();

  const [user, setUser] = useState(storedUser); //default  babe  agerta rakha hoise  ar update 'user' ase jeta body te kore patano hoise
  const handleUpdateUser = (event) => {
    event.preventDefault();
    console.log(user);
    fetch(`https://node-server-taupe.vercel.app/users/${user._id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert(`${user.name} updated successfully`);
        }
      });
  };
  const handleInputChange = (event) => {
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
      <p>Please Update:{storedUser.name}</p>
      <p>{storedUser._id}</p>

      <form onSubmit={handleUpdateUser}>
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.name}
          type="text"
          name="name"
          placeholder="type a name"
          required
        />{" "}
        <br />
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.email}
          type="email"
          name="email"
          placeholder="type a email"
          required
        />{" "}
        <br />
        <input
          onChange={handleInputChange}
          defaultValue={storedUser.phone}
          type="number"
          name="phone"
          placeholder="type a phone"
          required
        />{" "}
        <br />
        <button type="submit">Update User</button>
        <Link to={`/`}>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Update;
