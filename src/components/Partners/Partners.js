import React from 'react'
import Classes from "./Partners.module.css"
import Logo from "../../asset/Haliç_Üniversitesi_logo 1.svg"
import Logo1 from "../../asset/rauf-denktask-university.svg"
import Logo2 from "../../asset/University_warschaw-removebg-preview 1 (1).svg"
import Logo3 from "../../asset/cyprus_west-university.svg"
import Logo4 from "../../asset/european_university-removebg-preview 1.svg"
import Logo5 from "../../asset/medipol-university.svg"


const Partners = () => {
  return (
    <div className={Classes.Partners}>
        <h2>Our Few  Partner Institutions </h2>
        <div className={Classes.PartnersName}>
            <img src={Logo3} alt="/"/>
            <img src={Logo} alt="/"/>
            <img src={Logo5} alt="/"/>
            <img src={Logo4} alt="/"/> 
            <img src={Logo1} alt="/"/>
            <img src={Logo2} alt="/"/>
        </div>
    </div>
  )
}

export default Partners