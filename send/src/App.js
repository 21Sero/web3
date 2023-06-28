import React from "react";
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from "./container"
import './App.css'
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
        <AboutUs/>
        <SpecialMenu/>
        <Chef/>
        <Intro/>
        <Laurels/>
        <Gallery/>
        <FindUs/>
        <Footer/>
    </div>
  );
}

export default App;
