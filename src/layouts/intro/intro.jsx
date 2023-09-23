import React from "react";
import BigIdea from "../../assets/images/introduction/big-idea.svg";
import "./intro.scss";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  //   React.useEffect(() => {
  //     gsap.set("h2", {
  //       opacity: 0,
  //       yPercent: 100,
  //     });

  //     gsap.to("h2", {
  //       scrollTrigger: "h2",
  //       duration: 0.8,
  //       opacity: 1,
  //       yPercent: 0,
  //       ease: "easeOut",
  //       delay: 0.2,
  //     });
  //   });
  return (
    <div className="intro">
      <div className="container row">
        <div className="col-12 col-lg-6 container_image">
          <img src={BigIdea} alt="BigIdea" className="big_idea" />
        </div>
        <div className="col-12 col-lg-6 container_text">
          <h2>
            Introduction to getlinked <br />
            <span>tech Hackathon 1.0</span>
          </h2>

          <p data-animation="paragraph">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
