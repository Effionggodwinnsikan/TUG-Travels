import React from 'react'
import classes from "./Navbar.module.css"
import Logo from "../../asset/logo.svg";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
      <img src={Logo} alt="/" />
       <h1>comming soon...</h1>
      </div>
    </div>
  )
}

export default Navbar;