import React from "react";
import Card from "../UI/Card";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <header>
        <h2>List of users</h2>
      </header>
      <hr />

      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name}({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
