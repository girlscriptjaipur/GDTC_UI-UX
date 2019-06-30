import React from 'react';
import '../stylesheets/Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
        <nav className = "navbar navbar-expand-lg navbar-light bg-light">
           <h1 className="navbar-brand"><a href="index.html">Some Logo Here</a></h1>
           <button className = "navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className = "navbar-toggler-icon"></span>
         </button>

      <div className = "collapse navbar-collapse" id="navbarSupportedContent">
       <ul className = "navbar-nav ml-auto justify-content-end">
         <li className = "nav-item">
           <a className = "nav-link" href="#Home"> Home </a>
         </li>
         <li className = "nav-item">
           <a className = "nav-link" href="#About"> About Us </a>
        </li>
        <li className = "nav-item">
          <a className = "nav-link" href="#Profile"> Profile </a>
        </li>
        <li className = "nav-item">
          <a className = "nav-link" href="#Contact"> Contact </a>
        </li>
        <li className = "nav-item start">
          <a className = "nav-link btn" href="#Start"> Get Started </a>
        </li>
     </ul>
  </div>
</nav>
        );
    }
}

export default Navbar;
