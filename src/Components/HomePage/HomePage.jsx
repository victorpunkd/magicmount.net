import React from "react";
import "./HomePage.css";
import CoverPage from "../CoverPage/CoverPage";
import Property from "../PropertyTypeLists/PropertyTypeLists";
import PropertyLists from "../PropertyTypeLists/PropertyTypeLists";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <CoverPage />
      <PropertyLists />
    </div>
  );
};

export default HomePage;
