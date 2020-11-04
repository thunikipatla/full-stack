import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Tutor's World</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="nav-item">
        <NavLink class="nav-link" to="/TutorRegister">TutorRegister</NavLink>
      </li>
      <li class="nav-item">
        <NavLink class="nav-link" to="/ParentRegister">ParentRegister</NavLink>
      </li>
      <li class="nav-item">
          <NavLink class="nav-link" to="/Login">Login</NavLink>
      </li>
      <li class="nav-item">
          <NavLink class="nav-link" to="/ParentLogin">ParentLogin</NavLink>
      </li>
      <li class="nav-item">
          <NavLink class="nav-link" to="/Logout">Logout</NavLink> 
      </li>
    </ul>
  </div>
</nav>
            </div>
        )
    }
}

export default Header;