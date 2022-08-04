import React from "react";
import Classes from "./AboutContent.module.css";



const AboutContent = () => {
  return (
    <div className={Classes.AboutContent}>
      <div className={Classes.AboutContent1}>
        <p>
          The Unbreakable-Grace Consultancy Ltd is a new international
          consultancy know for its loyalty, respect, patience, quality, honesty,
          and quality. Our goal is to connect people to opportunities, provide
          them with international study offers (young and old), reduce the rate
          of illteracy, and connect them to breakthroughs, goods, and services
          in the major life areas. We provide human scope and international
          exams , education, and immigration services to people worldwide.
        </p>
      </div>
      <div className={Classes.AboutContent2}>
        <h3>OUR GOALS</h3>
        <li>
          To bring quality and affordable education to people in the whole
          Africa.{" "}
        </li>
        <li>
          To serve as the connection connecting people to scholarship offers
          available globally.
        </li>
        <li>
          To facilitate students intellectual growth by exposing them to
          knowledge
        </li>
      </div>
      <div className={Classes.AboutContent3}>
        <div className={Classes.sub}>
          <h3>CORE VALUES:</h3>
          <p> Loyalty, Excellence</p>
        </div>
        <div className={Classes.sub}>
          <h3>OUR VISION:</h3>
          <p> Develop Independence, Self-confidence and Flexibility</p>
        </div>
      </div>
      <div className={Classes.AboutContent4}>
        <h4>BUSINESS TARGET FOR 2023</h4>
        <p>
          We shall be targeting recruiting at least, 100 students to study in
          the united States, 100 students to study in the UK, minimum of 500
          students to study in Europe generally 200 students to study in the
          Asia (This is our basic business target for this year
        </p>
      </div>
    </div>
  );
};

export default AboutContent;
