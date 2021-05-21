import React from "react";
import { Col } from "react-bootstrap";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide_2 from "../../assets/images/slide_1.jpg";
import slide_3 from "../../assets/images/slide_2.jpg";
import slide_1 from "../../assets/images/slide_3.jpg";

const fadeImages = [
  "images/slide_2.jpg",
  "images/slide_6.jpg",
  "images/slide_7.jpg",
];

const Slideshow = () => {
  return (
    <div className="row">
      <Col md="6">
        <div className="slide-container">
          <Fade>
            <div className="each-fade">
              <div className="image-container">
                <img src={slide_1} className="image-container-width" />
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={slide_2} className="image-container-width" />
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-fade">
              <div className="image-container">
                <img src={slide_3} className="image-container-width" />
              </div>
            </div>
          </Fade>
        </div>
      </Col>
      <Col md="6">
        <div className="col-md-12 p-b-30">
          <h3 className="m-text26 p-t-15 p-b-16">Our story</h3>
          <p className="p-b-28">
            Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
            Vestibulum pharetra ac ante ut pellentesque. Curabitur fringilla
            dolor quis lorem accumsan, vitae molestie urna dapibus. Pellentesque
            porta est ac neque bibendum viverra. Vivamus lobortis magna ut
            interdum laoreet. Donec gravida lorem elit, quis condimentum ex
            semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet
            sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque
            congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis
            lectus a arcu facilisis, eu sodales lectus sagittis. Etiam
            pellentesque, magna vel dictum rutrum, neque justo eleifend elit,
            vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo
            efficitur, quam velit convallis ipsum, et maximus enim ligula ac
            ligula. Vivamus tristique vulputate ultricies. Sed vitae ultrices
            orci.
          </p>
          <div className="bo13 p-l-29 m-l-9 p-b-10">
            <p className="p-b-11">
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.
            </p>
            <span className="s-text7">- Steve Job’s</span>
          </div>
        </div>
      </Col>
    </div>
    // <div className="row">
    //   <Col md="6" >
    //     <Slide easing="ease">
    //       <div className="each-slide">
    //         <div style={{'backgroundImage': `url(${slide_1})`}}>
    //           <span>Slide 1</span>
    //         </div>
    //       </div>
    //       <div className="each-slide">
    //         <div style={{'backgroundImage': `url(${slide_2})`}}>
    //           <span>Slide 2</span>
    //         </div>
    //       </div>
    //       <div className="each-slide">
    //         <div style={{'backgroundImage': `url(${slide_3})`}}>
    //           <span>Slide 3</span>
    //         </div>
    //       </div>
    //     </Slide>
    //     </Col>
    //     <Col></Col>
    //   </div>
  );
};

export default Slideshow;
