import React, { useState } from "react";
import "./App.css";

const App = () => {
	const [users, setUsers] = useState([]);
  const loadUsers = async () => {
    const response = await fetch ("https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  return (
    <div className = "App">
      <h1> Hello Everyone !!!</h1>
      <button className = "getbutton" onClick = {loadUsers}>Get Data</button>
      <h2>Flipkart Users</h2>
      <ul>
        <div className="card">
        {users.map(({ id, first_name, last_name, email,avatar}) => (
          <li key={id}>
            <div className="image">
            <img src = {avatar} ></img><br/>
            <div className="info">
            First Name : {first_name} <br/>
            Last Name : {last_name} <br/>
            email : {email}<br/>
            </div>
            </div>
          </li>
          
        ))}
        </div>
      </ul>
    </div>
    );
};


export default App;