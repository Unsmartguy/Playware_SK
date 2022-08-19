import Axios from "axios"
import React from "react";
import { Link } from "react-router-dom"
import { useState } from "react";

const User_Register = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [gamertag, setGamertag] = useState("");


const addUser = () => {
  Axios.post("http://localhost:3001/auth", {
    name:name,
    email: email,
    password: password,
    gamer_tag:gamertag,
    
  }).then(() => {

    console.log("User Added")
   
  });
};
  return (

    <div className="container">

      <div className="py-4">
        <div className="row ">
          <div className="col"></div>
          <div className="col border shadow rounded p-3">
            <div className="row">
              <div className="col"><Link class="btn btn-secondary mb-3 container-fluid" to="/User_Login">Login</Link></div><div className="col"><Link class="btn btn-secondary container-fluid" to="/User_Register">Register</Link></div>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                setName(event.target.value);
              }}></input>
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                setGamertag(event.target.value);
              }}></input>
              <label for="floatingInput">Gamertag</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => {
                setEmail(event.target.value);
              }}></input>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(event) => {
                setPassword(event.target.value);
              }}></input>
              <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
              <label for="floatingPassword">Password</label>
            </div>

            <div className="row">
                    <div className="col"><button type="submit" className="btn btn-secondary container-fluid"  onClick={addUser}>Submit</button></div> <div className="col"><Link className="btn btn-secondary mb-3 container-fluid" to="/">Back</Link></div>
                    </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>

  );
};

export default User_Register;