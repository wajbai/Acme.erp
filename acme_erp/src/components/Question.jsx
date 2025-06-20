import React, { useState } from 'react';
import '../css/Question.css';
import chartImage from '../assets/img/bg/faqer.jpg';
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";

const Question = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { question: "What is Acme.erp?", answer: "Acme.erp is a powerful enterprise resource planning system designed to simplify organizational workflows and enhance productivity." },
        { question: "What are the main components of Acme.erp?", answer: "The main components include accounting, inventory, HR, project management, and analytics tools." },
        { question: "Who can use Acme.erp?", answer: "Educational institutions, non-profits, and small to mid-sized businesses can benefit from Acme.erp." },
        { question: "What are the key features of Acme.erp?", answer: "User-friendly UI, robust reporting, customizable modules, and cloud integration." }
    ];

    return (
        <div className="container py-5">
            <div className="row align-items-center">
                {/* Left Image */}
                <div className="col-md-6 text-center">
                    <img src={chartImage} alt="Charts" className="img-fluid faq-img" />
                </div>

                {/* Right FAQ */}
                <div className="col-md-6 faq-container">
                   <div style={{ textAlign: 'center' }}>
  <h6 style={{ color: '#004868' }}>Frequently asked Question</h6>
  <h2 className="fw-bold" style={{ color: '#141D3' }}>
    Make Acme.erp Your Partner for Purpose-Driven Success
  </h2>
</div>

                    <div className="accordion mt-4">
                        {faqData.map((item, index) => (
                            <div key={index} className="faq-item mb-2">
                                <div    
                                    className={`faq-question d-flex justify-content-between align-items-center p-3 border rounded${openIndex === index ? ' active' : ''}`}
                                    onClick={() => toggle(index)}
                                >
                                    <span>{item.question}</span>
                                    <span className="faq-icon">{openIndex === index ? <RiSubtractFill /> : <FaPlus />}</span>
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer border rounded-bottom p-3">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;
