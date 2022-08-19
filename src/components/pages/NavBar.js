import React from "react";
import { Link } from "react-router-dom"


const NavBar = () => {

  return (
    <div className="container-fluid">




      <nav className="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Playware</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item mx-2">
                <Link class="btn btn-outline-success mr-3" to="/User_Login">Login</Link>
              </li>
              <li class="nav-item ">
                <Link class="btn btn-outline-secondary" to="/Admin_Options">Admin_Options</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>








    </div>

  );
};

export default NavBar;