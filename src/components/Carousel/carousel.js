import React, { Component } from "react";
import Slider from "react-slick";
import Classes from "./carousel.module.css";
 import Logo from "../../asset/testify right.svg"
 import Logo1 from "../../asset/testify center.svg"
 import Logo2 from "../../asset/testify left.svg"



export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      // centerPadding: "50px",
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
      speed: 7000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      AutoPlay: true,
      responsive: [
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }
      ]
    };
    return (
      <div className={Classes.carousel}>
        <h2>What our Clients say about us</h2>
        <Slider {...settings} className={Classes.slider1}>
          
          <div className={Classes.carouselCard}>
            <p>
              TUG Consultancy is one of the best agencies in Nigeria. They have
              the best services and they are also transparent, hospitable and
              professional. I will recommend TUG consultancy for anyone who
              wants to travel and study abroad.
            </p>
            <div className={Classes.testify}>
              <img src={Logo} alt="/"/>
              <p>Oloruntola Tobiloba</p>
            </div>
          </div>
          {/* <br className={Classes.carouselCard1} /> */}
          <div className={Classes.carouselCard}>
            <p>
              I’m grateful i made my admission process to study abroad with TUG
              consultancy, they put me through proper steps and i am happy,
              there is a difference in my life today.
            </p>
            <div className={Classes.testify}>
              <img src={Logo1} alt="/"/>
              <p>Obi Grace</p>
            </div>
          </div>
          {/* <br className={Classes.carouselCard1} /> */}
          <div className={Classes.carouselCard}>
            <p>
              I found out about TUG consultancy from a friend. I reached out to
              them after that and they have been wonderful all through my
              application processing.
            </p>
            <div className={Classes.testify}>
              <img src={Logo2} alt="/"/>
              <p>Joseph Adeleke</p>
            </div>
          </div>
          {/* <br className={Classes.carouselCard1}></br> */}
          {/* <div>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </div>
         
          <div>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </div>
         
          <div>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </div>
          */}
        </Slider>
      </div>
    );
  }
}
//   )
// }

// export default carousel
