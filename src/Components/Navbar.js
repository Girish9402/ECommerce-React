import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar=()=>{
  return(
<nav className=" Navigate navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <Link className=" brands navbar-brand" to="/">GROO<span>VE</span></Link> 
    </div>


    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      
     
      <ul class="nav navbar-nav navbar-right">
        <ul class="nav navbar-nav">
          <li className="gender"><Link to="/Men">MEN</Link> </li>
          <li className="gender"><Link to="/Women">WOMEN</Link> </li>
          <li className="gender"><Link to="/Kids">KIDS</Link> </li>
        </ul>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default NavBar;