import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
  constructor(){
    super();
    this.Loginclick = this.Loginclick.bind(this);
  }
  Loginclick(){
    var loginvalue = localStorage.getItem('IsLoggedIn');
    if(loginvalue){
      // document.getElementById('register').hidden = true,
       <nav class="navbar navbar-inverse">
        <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">YoutubeApp</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="nav-item">
          <NavLink class="nav-link" id="login" to="/Login">Login</NavLink>
    </li>
    <li class="nav-item">
        <NavLink class="nav-link" id="register" to="/Register">Register</NavLink>
    </li>
    <li class="nav-item">
        <NavLink class="nav-link" id="logout" to="/Logout">Logout</NavLink>
    </li>
    {/* <li class="nav-item">
        <NavLink class="nav-link" to="/Products">Products</NavLink>
    </li> */}
    </ul>
  </div>
    </nav>

    }
    // document.getElementById('register').hidden;
  }


    render(){
        return(
//             <div>
//  <nav class="navbar navbar-inverse">
//   <div class="container-fluid">
//     <div class="navbar-header">
//       <a class="navbar-brand" href="#">YoutubeApp</a>
//     </div>
//     <ul class="nav navbar-nav">
//       <li class="nav-item">
//           <NavLink class="nav-link" to="/Login">Login</NavLink>
//     </li>
//     <li class="nav-item">
//         <NavLink class="nav-link" to="/Register">Register</NavLink>
//     </li>
//     <li class="nav-item">
//         <NavLink class="nav-link" to="/Logout">Logout</NavLink>
//     </li>
//     {/* <li class="nav-item">
//         <NavLink class="nav-link" to="/Products">Products</NavLink>
//     </li> */}
//     </ul>
//   </div>
//     </nav>
    
//  </div>
            <div>

            </div>
        )
    }
}

export default Header; 