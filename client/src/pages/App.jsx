import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      setListOfUsers(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map(({ id, name, age, username }) => {
          return (
            <div>
              <h1>Id: {id}</h1>
              <h1>Name: {name}</h1>
              <h1>Age: {age}</h1>
              <div>Username: {username}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
