import React from "react";
import "./criteria.scss";
import Ellipse from "../../assets/images/criteria/ellipse.png";
import Pie from "../../assets/images/criteria/pie.png";
import Btn from "../../components/btn/btn";

const CriteriaData = [
  {
    title: "Innovation and Creativity:",
    body: "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
  },
  {
    title: "Functionality:",
    body: "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
  },
  {
    title: "Impact and Relevance:",
    body: "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
  },
  {
    title: "Technical Complexity:",
    body: "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
  },
  {
    title: "Adherence to Hackathon Rules:",
    body: "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
  },
];

const Criteria = () => {
  return (
    <div className="criteria">
      <div className="criteria_blur1"></div>
      <div className="criteria_blur2"></div>
      <div className="criteria_container">
        <div className="row">
          <div className="col-12 col-lg-6 criteria_container_images">
            <figure>
              <img src={Ellipse} alt="ellipse" className="ellipse" />
              <img src={Pie} alt="pie" className="pie" />
            </figure>
          </div>
          <div className="col-12 col-lg-6 criteria_container_text">
            <h2>
              Judging Criteria
              <br />
              <span>Key attributes</span>
            </h2>

            <ul>
              {CriteriaData.map((criteria, i) => (
                <li key={i}>
                  <span>{criteria.title}</span>
                  {criteria.body}
                </li>
              ))}
            </ul>

            <Btn>Read More</Btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
