import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardComponent.css";

export const CardComponent = (props) => {
  const [showCardType, setshowCardType] = useState(false);
  let itemSize = ["S", "M", "L", "XL"];

  const updateModal = () => {
    props.showDetailInfo(true, props.itemSelected);
  };

  return (
    <div
      className="card-master"
      onMouseEnter={() => setshowCardType(true)}
      onMouseLeave={() => setshowCardType(false)}
      onClick={() => updateModal()}
    >
      {" "}
      <Card style={{ width: "18rem", height: "28rem" }}>
        {showCardType === false ? (
          <div>
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
              <Card.Title>{props.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </div>
        ) : (
          <div>
            {/* <div
              
            >
            </div> */}
            <div
              className="card-hover-info"
              style={{
                backgroundImage: `url(${props.image}) `,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="card-hover-info-box">
                <Card.Body>
                  <Card.Title>
                    {props.name} ({itemSize[props.itemSelected.size - 1]})
                  </Card.Title>
                  <Card.Text>${props.itemSelected.price}</Card.Text>
                </Card.Body>{" "}
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
