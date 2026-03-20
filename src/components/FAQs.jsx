import React from "react";
import "../styles/faqs.css";

const FAQs = () => {
  const questionsData = [
    { questions: "What documents are required?" },
    { questions: "Is there any security deposit?" },
    { questions: "Which payment methods are accepted" },
    { questions: "What is the minimum driver age?" },
  ];

  return (
    <div className="faqs">
      <div className="faqsHeading">
        <p>Frequently asked</p>
      </div>
      <div className="faqsQuestions">
        {questionsData.map(({ questions }, index) => (
          <div className="questions" key={index}>
            <p>{questions}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
