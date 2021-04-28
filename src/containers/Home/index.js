import React from "react";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <div className="home-title-wrapper">
          <div className="home-title">Follow the $mart Money</div>
          <div className="home-sub-title">Onchain data insights made easy!</div>
          <div className="goto-home-app">Go to App</div>
          <img src="/images/home-icon.svg" className="home-icons" />
        </div>
      </div>
      <div className="home-right">
      <div className="home-right-wrapper">
        <img src="/images/home-image.svg" className="home-image" />
        <img src="/images/home.svg" className="home-image2" />
      </div>
      </div>
    </div>
  );
}

export default Home;
