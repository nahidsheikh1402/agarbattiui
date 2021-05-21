import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import slide_2 from "../../assets/images/slide_2.jpg";
import slide_3 from "../../assets/images/slide_3.jpg";
import slide_1 from "../../assets/images/slide_5.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Ratings from "react-ratings-declarative";
import { Col, Nav } from "react-bootstrap";

const ShoppingCard = () => {
  const [ambienceRating, setAmbienceRating] = useState(1);
  const changeAmbienceRating = (newRating) => {
    setAmbienceRating(newRating);
  };
  return (
    <div className="demo">
      <div className="container">
        <Nav variant="tabs" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1" className="tab-nav-link">Incense Stick</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" className="tab-nav-link">Backflow Cone</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3" className="tab-nav-link">Attar</Nav.Link>
          </Nav.Item>
        </Nav>
        <Col>
          <div className="row text-center">
            <h4 className="heading-title"></h4>
          </div>

          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable">
                <img src={slide_1} className="image-container-width"></img>
                <i
                  className="fa fa-heart fa-heart-background"
                  aria-hidden="true"
                ></i>
                <div className="pricingContent">
                  <ul>
                    <li>
                      <div>
                        <b>LOBHAN</b>
                      </div>
                      <Ratings
                        rating={ambienceRating}
                        widgetRatedColors="red"
                        changeRating={changeAmbienceRating}
                        widgetDimensions="15px"
                        // widgetSpacings="5px"
                      >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget widgetHoverColor="black" />
                        <Ratings.Widget />
                        <Ratings.Widget />
                      </Ratings>
                      <div>
                        <b>₹ 100</b>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pricingTable-sign-up">
                  <button className="btn btn-primary btn-sm cart-button">
                    Quick View
                  </button>
                  &nbsp;
                  <button className="btn btn-primary btn-sm cart-button">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6">
              <div className="pricingTable">
                <img src={slide_1} className="image-container-width"></img>
                <i
                  className="fa fa-heart fa-heart-background"
                  aria-hidden="true"
                ></i>
                <div className="pricingContent">
                  <ul>
                    <li>
                      <div>
                        <b>LOBHAN</b>
                      </div>
                      <Ratings
                        rating={ambienceRating}
                        widgetRatedColors="red"
                        changeRating={changeAmbienceRating}
                        widgetDimensions="15px"
                        // widgetSpacings="5px"
                      >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget widgetHoverColor="black" />
                        <Ratings.Widget />
                        <Ratings.Widget />
                      </Ratings>
                      <div>
                        <b>₹ 100</b>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pricingTable-sign-up">
                  <button className="btn btn-primary btn-sm cart-button">
                    Quick View
                  </button>
                  &nbsp;
                  <button className="btn btn-primary btn-sm cart-button">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable">
                <img src={slide_1} className="image-container-width"></img>
                <i
                  className="fa fa-heart fa-heart-background"
                  aria-hidden="true"
                ></i>
                <div className="pricingContent">
                  <ul>
                    <li>
                      <div>
                        <b>LOBHAN</b>
                      </div>
                      <Ratings
                        rating={ambienceRating}
                        widgetRatedColors="red"
                        changeRating={changeAmbienceRating}
                        widgetDimensions="15px"
                        // widgetSpacings="5px"
                      >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget widgetHoverColor="black" />
                        <Ratings.Widget />
                        <Ratings.Widget />
                      </Ratings>
                      <div>
                        <b>₹ 100</b>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pricingTable-sign-up">
                  <button className="btn btn-primary btn-sm cart-button">
                    Quick View
                  </button>
                  &nbsp;
                  <button className="btn btn-primary btn-sm cart-button">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="pricingTable">
                <img src={slide_1} className="image-container-width"></img>
                <i
                  className="fa fa-heart fa-heart-background"
                  aria-hidden="true"
                ></i>
                <div className="pricingContent">
                  <ul>
                    <li>
                      <div>
                        <b>LOBHAN</b>
                      </div>
                      <Ratings
                        rating={ambienceRating}
                        widgetRatedColors="red"
                        changeRating={changeAmbienceRating}
                        widgetDimensions="15px"
                        // widgetSpacings="5px"
                      >
                        <Ratings.Widget />
                        <Ratings.Widget />
                        <Ratings.Widget widgetHoverColor="black" />
                        <Ratings.Widget />
                        <Ratings.Widget />
                      </Ratings>
                      <div>
                        <b>₹ 100</b>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="pricingTable-sign-up">
                  <button className="btn btn-primary btn-sm cart-button">
                    Quick View
                  </button>
                  &nbsp;
                  <button className="btn btn-primary btn-sm cart-button">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default ShoppingCard;
