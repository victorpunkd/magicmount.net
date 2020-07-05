import React from "react";
import "./CoverPage.css";

const CoverPage = () => {
  return (
    <div className="w3-row coverPageContainer" style={{ height: "75vh" }}>
      <div className="w3-half firstHalf">
        <div className="logoContainer">
          <img
            src="https://magicmount-files.s3.us-east-2.amazonaws.com/rectangleLogoTransparentBackground.png"
            className="logoImage"
            alt="Magic Mount Logo"
          />
        </div>
        <div className="coverPageInfo">
          <div className="heroText">
            In Search of your Magic Property <br />
            on the lap of Himalayas?{" "}
          </div>
          <div className="secondaryText">
            get inside the magical marketplace <br /> homely warmth
          </div>
          <div className="nepaliTextImageConatiner">
            <img
              src="https://magicmount-files.s3.us-east-2.amazonaws.com/nepali.png"
              alt="nepali text"
              className="nepaliTextImage"
            />
          </div>
        </div>
        <div className="socialMediaButtonContainers">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>{" "}
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </div>
      </div>

      <div className="w3-half secondHalf">
        <div className="heroImageContainer">
          <img
            src="https://magicmount-files.s3.us-east-2.amazonaws.com/hero.jpg"
            className="heroImage"
            alt="magic mount hero"
          />
        </div>
        <div className="postPropertyButtonContainer">
          <button className="primaryButton">POST PROPERTIES FOR FREE</button>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
