import React from 'react'
import Classes from "./Carocard.module.css"

const Carocard = ({img,text,stext}) => {
  return (
    <div className={Classes.slider1}>
    <div className={Classes.carouselCard}>
            <p>
              {text}
            </p>
            <div className={Classes.testify}>
              <img src={img} alt="/"/>
              <p>{stext}</p>
            </div>
          </div>
          </div>
          
  )
}

export default Carocard