import React from "react";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand" href="#">
          E-Commerce App
        </a>
   
       
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                method 1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                method 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                method 3
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
