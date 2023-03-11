import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);

  const handleDelete = (user) => {
    const agree = window.confirm(`Are you sure to delete ${user.name} ?`);
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert(`User : ${user.name} deleted successfully`);
            const remaining = displayUsers.filter((usr) => usr._id !== user.id);
            setDisplayUsers(remaining);
          }
        });
      // console.log(agree);// console.log(user);deletedCount
    }
  };
  return (
    <div>
      <h3>Home Users :{displayUsers.length}</h3>
      <div>
        {displayUsers.map((user) => (
          <p key={user._id}>
            {user.name} {"#"}
            {user.email}
            {"#"}
            {user.phone} {"#"}
            {user?.namee}
            <Link to={`/update/${user._id}`}>
              <button>Update</button>
            </Link>
            <button onClick={() => handleDelete(user)}>Delete</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Home;
