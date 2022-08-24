import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeGallery.css";

export const HomeGallery = (props) => {
  let homeCounter = 0;

  // console.log(props.itemInfo);

  return (
    <div className="gallery">
      <Carousel>
        {props.itemInfo.map((item) => {
          var image = item.data.sprites.other.home.front_default;
          var name = item.name;
          return (
            <Carousel.Item key={homeCounter++}>
              <img src={image} alt="First slide" />
              <Carousel.Caption>
                <div className="gallery-box">
                  <h3>{name}</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};
