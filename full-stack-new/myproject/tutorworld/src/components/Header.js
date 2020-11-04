import React from 'react';
import {NavLink} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div>
            <nav class="navbar navbar-inverse">
             <div class="container-fluid">
               <div class="navbar-header">
                 <a class="navbar-brand" href="#">Tutor's Page</a>
               </div>
               <ul class="nav navbar-nav">
                 <li class="nav-item">
                     <NavLink class="nav-link" to="/Register">Register</NavLink>
               </li>
               <li class="nav-item">
                   <NavLink class="nav-link" to="/TLogin">Tutor's Login</NavLink>
               </li>
               <li class="nav-item">
                   <NavLink class="nav-link" to="/PLogin">Parent's Login</NavLink>
               </li>
               <li class="nav-item">
                   <NavLink class="nav-link" to="/PLogin">Logout</NavLink>
               </li>
               {/* <li class="nav-item">
                   <NavLink class="nav-link" to="/Products">Products</NavLink>
               </li> */}
               </ul>
             </div>
               </nav>
               <div>
                   <h1>Welcome to Tutor's Page, here you will find the best tutors for your childrens</h1>
               </div>
               
            </div>
        )
    }
}

export default Header;