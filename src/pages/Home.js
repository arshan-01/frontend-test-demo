import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "../components/Hero";
import Works from "../components/Works";
import Review from "../components/Review";
import Companies from "../components/Companies";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Companies />
      <Works />
      <Review />
      <Footer />
    </div>
  );
}

export default Home;
