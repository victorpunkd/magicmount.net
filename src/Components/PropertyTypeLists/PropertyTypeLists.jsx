import React from "react";
import "./PropertyTypeLists.css";
import PropertyCard from "../PropertyTypeCard/PropertyTypeCard";

const PropertyLists = () => {
  return (
    <div className="propertyListsContainer">
      <div className="w3-row propertyTypeCards">
        <div className="w3-third">
          <PropertyCard
            image="https://magicmount-files.s3.us-east-2.amazonaws.com/propertyImage1.jpg"
            name="BUYING A MAGIC HOME"
            description="Click below to get connected with
lots of listed and MAGICMOUNT
assured property"
            type="BUY"
          />
        </div>
        <div className="w3-third">
          <PropertyCard
            image="https://magicmount-files.s3.us-east-2.amazonaws.com/propertyImage1.jpg"
            name="BUYING A MAGIC HOME"
            description="Click below to get connected with
lots of listed and MAGICMOUNT
assured property"
            type="BUY"
          />
        </div>
        <div className="w3-third">
          <PropertyCard
            image="https://magicmount-files.s3.us-east-2.amazonaws.com/propertyImage1.jpg"
            name="BUYING A MAGIC HOME"
            description="Click below to get connected with
lots of listed and MAGICMOUNT
assured property"
            type="BUY"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyLists;
