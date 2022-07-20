import React from 'react'
import classes from "./Navbar.module.css"
import Logo from "../../asset/logo.svg";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
      <img src={Logo} alt="/" />

      </div>
    </div>
  )
}

export default Navbar