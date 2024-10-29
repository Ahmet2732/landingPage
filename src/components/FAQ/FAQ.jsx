import React from 'react';

const FAQS = () => {
  const faqs = [
    {
      question: "How our Landrick work?",
      answer: "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.",
    },
    {
      question: "What is the main process open account?",
      answer: "If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact.",
    },

  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center align-items-center ">
        <div className="col-md-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" py-3">
              <h5 className="fw-bold text-primary">{faq.question}</h5>
              <p className="text-muted mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="col-md-4">
          {faqs.map((faq, index) => (
            <div key={index} className=" py-3">
              <h5 className="fw-bold text-primary">{faq.question}</h5>
              <p className="text-muted mb-0">{faq.answer}</p>
            </div>
          ))}
        </div>

   
    
      </div>
    </div>
  );
};

export default FAQS;