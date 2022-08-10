import React, { Component } from "react";
import Slider from "react-slick";
import Classes from "./carousel.module.css";
import Logo from "../../asset/testify right.svg";
import Logo1 from "../../asset/testify center.svg";
import Logo2 from "../../asset/testify left.svg";
import Carocard from "../Carocard/Carocard";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding:"190px",
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
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding:"90px",
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 540,
          settings: {
            centerPadding:"100px",
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 427,
          settings: {
            centerPadding:"60px",
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
           centerPadding:"20px",
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className={Classes.carousel}>
        <h2>What our Clients say about us</h2>
        <Slider {...settings} className={Classes.slider1}>
          <div>
            <Carocard
              text="TUG Consultancy is one of the best agencies in Nigeria. They have
              the best services and they are also transparent, hospitable and
              professional. I will recommend TUG consultancy for anyone who
              wants to travel and study abroad."
              img={Logo}
              stext="Oloruntola Tobiloba"
            />
          </div>
          <div>
            <Carocard
              text="I’m grateful i made my admission process to study abroad with
                  TUG consultancy, they put me through proper steps and i am
                  happy, there is a difference in my life today."
              img={Logo1}
              stext="Obi Grace"
            />
          </div>
          <div>
            <Carocard
              text="
                  I found out about TUG consultancy from a friend. I reached out
                  to them after that and they have been wonderful all through my
                  application processing."
              img={Logo2}
              stext="Joseph Adeleke"
            />
          </div>
        </Slider>
      </div>
    );
  }
}