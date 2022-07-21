import React, { Component } from "react";
import Classes from "./Hero.module.css";
import Logo from "../../asset/carousel-img-1.svg";
import Logo1 from "../../asset/carousel-img-2.svg";
// import Slider from "react-slick";


const Hero = () => {
  return (
    <div className={Classes.hero}>
      <div>
        <div>
          <img src={Logo} alt="/" className={Classes.heroimg} />
          <div className={Classes.overlay}></div>
          <div className={Classes.content}>
            <h1>Welcome to The Unbreakable-Grace Consultancy LTD</h1>
            <p>
              TUG Consultancy is a new International consultancy poised at
              connecting people to opportunities and to bring them international
              study offers.
            </p>
          </div>
        </div>
        <div>
          <img src={Logo1} alt="/" className={Classes.heroimg} />
          <div ClassName={Classes.overlay}></div>
          <div ClassName={Classes.content}>
            <h2>coming soon</h2>
          </div>
        </div>
      </div>
      {/* <div className={Classes.overlay}></div> */}
    </div>
  );
};

export default Hero;
// // import React, { Component } from "react";

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div  className={Classes.hero}>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
          
//           <div>
//           <img src={Logo} alt="/" className={Classes.heroimg} />
//          <div className={Classes.overlay}></div>
//           <div className={Classes.content}>
//             <h1>Welcome to The Unbreakable-Grace Consultancy LTD</h1>
//            <p>
//               TUG Consultancy is a new International consultancy poised at
//               connecting people to opportunities and to bring them international
//               study offers.
//              </p>
//            </div>
//           </div>
//           <div>
//           <img src={Logo1} alt="/" className={Classes.heroimg} />
//           <div ClassName={Classes.overlay}></div>
//            <div ClassName={Classes.content}>
//            <h2>coming soon</h2>
//           </div>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
