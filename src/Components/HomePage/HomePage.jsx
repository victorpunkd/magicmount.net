import React from "react";
import "./HomePage.css";
import CoverPage from "../CoverPage/CoverPage";
import PropertyLists from "../PropertyTypeLists/PropertyTypeLists";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <CoverPage />
      <PropertyLists />
      <div className="didvider" />
    </div>
  );
};

export default HomePage;
