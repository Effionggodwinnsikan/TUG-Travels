import React from "react";
import Whatsappchat from "../../components/Whatsappchat/Whatsappchat";
import Classes from "./Footer.module.css";
import Logo from "../../asset/logo-white.svg";
import Logo1 from "../../asset/Vector (23).svg";
import Logo2 from "../../asset/phone.svg";
import Logo3 from "../../asset/location.svg";
import Logo4 from "../../asset/Vector (20).svg";
import Logo5 from "../../asset/Vector (19).svg";
import Logo6 from "../../asset/Vector (18).svg";
import Logo7 from "../../asset/copyright.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={Classes.Footer}>
      <Whatsappchat />
      <div className={Classes.space}></div>
      <div className={Classes.footerContainer}>
        <div className={Classes.cover}>
          <div className={Classes.contact}>
            <Link to="/">
              {" "}
              <img src={Logo} className={Classes.logo} alt="/" />{" "}
            </Link>
            <p>
              TUG Consultancy is a new International consultancy poised at
              connecting people to opportunities and to bring them international
              study offers.
            </p>
            <div className={Classes.section}>
              <a
                href="https://www.google.com/maps/place/8+Safebirth+St,+Fadeyi+102215,+Lagos/@6.5278426,3.3646269,17z/data=!3m1!4b1!4m5!3m4!1s0x103b8db24ddf5aa7:0x23d15157e56801de!8m2!3d6.5278373!4d3.3668156"
                className={Classes.section}
              >
                <img src={Logo3} alt="/" className={Classes.icon} />
                <p>8, Safebirth Street, Fadeyi, Lagos, Nigeria.</p>
              </a>
            </div>
            <div className={Classes.section}>
              <img src={Logo2} alt="/" className={Classes.icon} />
              <p>+2347033181161</p>
            </div>
            <div className={Classes.section}>
              <img src={Logo1} alt="/" className={Classes.icon} />
              <p>+2349124939094, +2347033181161</p>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/">
              {" "}
              <p>Home</p>
            </Link>
            <Link to="about">
              {" "}
              <p>About</p>
            </Link>
            <Link to="contact">
              {" "}
              <p>Contact</p>
            </Link>
            <Link to="services">
              <p>Services</p>
            </Link>
          </div>
          <div>
            <h4>Follow us</h4>
            <div className={Classes.icons}>
              <img src={Logo4} alt="/" className={Classes.icon} />
              <img src={Logo5} alt="/" className={Classes.icon} />
              <img src={Logo6} alt="/" className={Classes.icon} />
            </div>
          </div>
          <div>
            <h4>Email</h4>
            <p>unbreakablegraceconsultancy@gmail.com</p>
          </div>
        </div>
        <hr />
        <div className={Classes.copyright}>
          <img src={Logo7} alt="/" className={Classes.icon} />
          <p>2022 TUG Consultancy Limited</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
