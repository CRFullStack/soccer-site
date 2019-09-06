import React from "react";
import Nav from "../navbar/nav";
import Landing from "./landing/landing";
import Services from "./services/services";
import About from "./about/about";
import Info1 from "./info1/info";
import Coaches from "./coaches/coaches";
import Info2 from "./info2/info";
import Activities from "./activities/activities";
import Pricing from "./prices/prices";
import Info3 from "./info3/info";
import Footer from "../footer/footer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Services />
      <About />
      <Info1 />
      <Coaches />
      <Info2 />
      <Activities />
      <Pricing />
      <Info3 />
      <Footer />
    </div>
  );
}

export default App;
