import React from "react";
import Casual from "../../assets/images/faq/casual.png";
import Questionmark1 from "../../assets/images/faq/questionmark1.svg";
import Questionmark2 from "../../assets/images/faq/questionmark2.svg";
import Questionmark3 from "../../assets/images/faq/questionmark3.svg";
import { HiOutlinePlus } from "react-icons/hi";
import "./faq.scss";

const FaqData = [
  {
    title: "Can I work on a project I started before the hackathon?",
  },
  {
    title: "What happens if I need help during the hackathon?",
  },
  {
    title: "What happens if I don't have an idea for a project?",
  },
  {
    title: "Can I join a team or do I have to come with one?",
  },
  {
    title: "What happens after the hackathon ends",
  },
  {
    title: "Can I work on a project I started before the hackathon?",
  },
];

const Faq = () => {
  return (
    <div className="faq">
      <div className="faq_blur1"></div>
      <div className="faq_blur2"></div>
      <div className="container_box faq_container">
        <div className="row">
          <div className="col-12 col-lg-5 faq_container_text">
            <h2>
              Frequently Ask
              <br />
              <span>Question</span>
            </h2>

            <p data-animation="paragraph">
              We got answers to the questions that you might want to ask about
              <b> getlinked Hackathon 1.0</b>
            </p>

            <ul>
              {FaqData.map((question, i) => (
                <li
                  key={i}
                  // data-animation="paragraph"
                >
                  <span>{question.title}</span>
                  <HiOutlinePlus color="#D434FE" />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-12 col-lg-7 faq_container_images">
            <figure>
              <img src={Casual} alt="Casual" className="casual" />
              <img
                src={Questionmark1}
                alt="Question mark"
                className="questionmark1"
              />
              <img
                src={Questionmark2}
                alt="Question mark"
                className="questionmark2"
              />
              <img
                src={Questionmark3}
                alt="Question mark"
                className="questionmark3"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
