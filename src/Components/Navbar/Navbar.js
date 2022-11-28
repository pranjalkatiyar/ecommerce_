import React from "react";
import { FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./styles.css";
const Navbar = () => {

  let activeStyle={
    textDecoration:"underline",
    textDecorationColor:"green",
  }
  let notActiveStyle={
    textDecoration:"none",
    color:"black",
  }
  
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src={require("../../assests/websitelogo.png")}
          alt="website logo"
        />
      </div>
      <div className="navbarItem">
        <ul>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='/'>Home</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='journey'>the journey</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='team'>team</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='/'>store</NavLink></li>
          <li><NavLink style={({isActive})=>isActive?activeStyle:notActiveStyle} to='contact'>contact</NavLink></li>
        </ul>
      </div>
      <div className="userProfile">
        <div className="userLogo">
          <FiUser />
        </div>
        <div className="userName">Gagan</div>
      </div>
    </div>
  );
};

export default Navbar;
