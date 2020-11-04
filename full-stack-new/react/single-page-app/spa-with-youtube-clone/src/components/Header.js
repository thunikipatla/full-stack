import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
 <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">YoutubeApp</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="nav-item">
          <NavLink class="nav-link" to="/Login">Login</NavLink>
    </li>
    <li class="nav-item">
        <NavLink class="nav-link" to="/Register">Register</NavLink>
    </li>
    <li class="nav-item">
        <NavLink class="nav-link" to="/Logout">Logout</NavLink>
    </li>
    {/* <li class="nav-item">
        <NavLink class="nav-link" to="/Products">Products</NavLink>
    </li> */}
    </ul>
  </div>
    </nav>
 </div>
        )
    }
}

export default Header; 