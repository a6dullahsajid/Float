import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Service from "./components/Services/Service";
import headphone from "./assets/hero/headphone.png";
import Banner from "./components/Banner/Banner";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "BassHead841 with 10mm speakers and active noise cancellation upto 32db",
  bgColor: "#f42c35",
};

const App = () => {
  return (
    <main className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Service />
      <Banner {...BannerData} />
    </main>
  );
};

export default App;
