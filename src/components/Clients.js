import { useState } from "react";
import classes from "./Client.module.css";
const Clients = ({ UserData, editHandler, deleteHandler }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {UserData.map((user, index) => (
            <tr key={index}>
              <td>{user.userName}</td>
              <td>{user.userLastName}</td>
              <td>{user.useremail}</td>
              <td>{user.userphoneno}</td>
              <td>{user.userProject}</td>
              <td>
                <button
                  className={classes.customButton}
                  editHandler={editHandler}
                  user={user}
                >Edit</button>

                <button
                  className={classes.customButton}
                  onClick={() => deleteHandler(user.useremail)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clients;
