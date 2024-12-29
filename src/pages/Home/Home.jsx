import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../component/Navbar/Navbar";
import Navibar from "../../component/Navibar/Navibar";
import Hero from "../../component/Hero/Hero";
import Resources from "../../component/Resources/Resources";
import Supports from "../../component/Supports/Supports";
import Testimonies from "../../component/Testimonies/Testimonies";
import Footer from "../../component/Footer/Footer";
import Vision from "../../component/Vision/Vision";
import Health from "../../component/Health/Health";
import YouTubeStatic from "../../component/YouTubeStatic/YouTubeStatic";

const Home = () => {
  return (
    <div className="HomepageBody">
      <Navbar />
      <Navibar />
      <Hero />
      <Vision />
      <Health />
      <section>
        <Supports />
      </section>
      <section id="resources">
        <Resources />
      </section>
      <section id="media">
        <YouTubeStatic />
      </section>
      <section id="testimonies">
        <Testimonies />
      </section>
      <section id="community">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
