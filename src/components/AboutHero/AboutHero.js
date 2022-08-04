import React from "react";
import Classes from "./AboutHero.module.css";
import Logo from "../../asset/about us main.svg";

const AboutHero = () => {
  return (
    <div className={Classes.AboutHero}>
      <img src={Logo} alt="/" />
      <div className={Classes.overlay}></div>
      <div className={Classes.content}>
        <h1>About Us</h1>
        <p>Home/About Us</p>
      </div>
    </div>
  );
};

export default AboutHero;
