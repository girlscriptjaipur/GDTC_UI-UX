import React from 'react';
import {NavLink} from 'react-router-dom';
import '../stylesheets/Navbar.css';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink to="/" className="nav-link">Feed</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Navigation" className="nav-link">Notifications</NavLink>
              </li>
            </ul>
          </div>
                <a className="navbar-brand" href="index.html"><img src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" className="rounded-circle img-fluid" alt="imgpro"/> </a>
        </nav>
    );
}

export default Navbar;
