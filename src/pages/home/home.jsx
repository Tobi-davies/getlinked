import React from "react";
import Hero from "../../layouts/hero/hero";
import Intro from "../../layouts/intro/intro";
import Timeline from "../../layouts/timeline/timeline";
import Rewards from "../../layouts/rewards/rewards";
import Privacy from "../../layouts/privacy/privacy";
import Partners from "../../layouts/partners/partners";
import Rules from "../../layouts/rules/rules";
import Criteria from "../../layouts/criteria/criteria";
import Faq from "../../layouts/faq/faq";
import Header from "../../layouts/header/header";
import Footer from "../../layouts/footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Rules />
      <Criteria />
      <Faq />
      <Timeline />
      <Rewards />
      <Partners />
      <Privacy />
      <Footer />
    </>
  );
};

export default Home;
