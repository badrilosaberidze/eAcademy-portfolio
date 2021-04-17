import React from "react";
import bgImg from "./Images/Mainpage.jpg";

const Home = () => {
  return (
    <div className="mainpage" style={{ backgroundImage: `url(${bgImg})` }} />
  );
};

export default Home;
