import React from "react";
import "./PropertyTypeCard.css";

const PropertyCard = (props) => {
  return (
    <div className="propertyTypeCardContainer">
      <div className="propertyTypeImageContainer">
        <img src={props.image} alt="" className="propertyTypeImage" />
      </div>
      <div className="propertyTypeInformation">
        <div className="propertyType">{props.name}</div>
        <div className="propertyTypeDescription">{props.description}</div>
        <div className="propertyTypeButtonContainer">
          <button className="primaryButton w3-block">{props.type}</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
