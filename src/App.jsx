import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import BlueBox from "./components/BlueBox";
import Desc from "./components/Desc";
import Subscribe from "./components/Subscribe";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <HeroSection />
      <Feature />
      <BlueBox />
      <Desc />
      <Subscribe/>
    </div>
  );
}

export default App;
