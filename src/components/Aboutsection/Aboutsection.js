import React from "react";
import Classes from "./Aboutsection.module.css";
import Logo from "../../asset/about-img.svg";
import { Link } from "react-router-dom";


const Aboutsection = () => {
  return (
    <div className={Classes.Aboutsection}>
      <div className={Classes.Aboutsection1}>
        <h2>About Us</h2>
        <p>
          The Unbreakable-Grace Consultancy Ltd is a new international
          consultancy know for its loyalty, respect, patience, quality, honesty,
          and quality. Our goal is to connect people to opportunities, provide
          them with international study offers (young and old), reduce the rate
          of illteracy, and connect them to breakthroughs, goods, and services
          in the major life areas. We provide human scope and international
          exams , education, and immigration services to people worldwide.
        </p>
        <Link to="about">
        <button>Learn More</button>
        </Link>
      </div>
      <div className={Classes.Aboutsection2} >
        <img src={Logo} alt="/" />
        <div className={Classes.overlay}></div>
      </div>
    </div>
  );
};

export default Aboutsection;
