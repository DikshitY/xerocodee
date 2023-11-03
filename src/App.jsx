import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import Feature from "./components/Feature";
import BlueBox from "./components/BlueBox";
import Desc from "./components/Desc";
import Subscribe from "./components/Subscribe";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <div className="main-container">
        <Navbar />
        <HeroSection />
        <Feature />
        <BlueBox />
        <Desc />
        <Subscribe />
      </div>
      <Footer />
    </div>
  );
}

export default App;
