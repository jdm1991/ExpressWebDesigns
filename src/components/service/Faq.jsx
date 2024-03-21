/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { FaQuestionCircle, FaChevronDown } from "react-icons/fa";
export default function Faq(){
    const [activeQuestion, setActiveQuestion] = useState(null);

    const toggleQuestion = (index) => {
        if (activeQuestion === index) {
          setActiveQuestion(null);
        } else {
          setActiveQuestion(index);
        }
      };
    return(
        <>
         <div className="bg-[#255036] text-white py-12">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <button
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(0)}
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <FaQuestionCircle className="text-[#ffcf40] mr-2" />
                    How long does it take to design and develop a website?
                  </h3>
                  <FaChevronDown
                    className={`text-[#ffcf40] ml-2 transition-transform duration-300 ${
                      activeQuestion === 0 ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeQuestion === 0 && (
                  <p className="mt-2">
                    The timeline for designing and developing a website varies
                    depending on the project's scope and complexity. Typically,
                    it takes 4-8 weeks for a basic website and 8-16 weeks for a
                    more complex website with custom functionality.
                  </p>
                )}
              </div>
              <div>
                <button
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(1)}
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <FaQuestionCircle className="text-[#ffcf40] mr-2" />
                    Do you provide content for the website?
                  </h3>
                  <FaChevronDown
                    className={`text-[#ffcf40] ml-2 transition-transform duration-300 ${
                      activeQuestion === 1 ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeQuestion === 1 && (
                  <p className="mt-2">
                    We can provide guidance and suggestions for website content,
                    but the client is responsible for providing the final
                    content. However, we offer content writing services at an
                    additional cost.
                  </p>
                )}
              </div>
              <div>
                <button
                  className="flex items-center justify-between w-full text-left focus:outline-none"
                  onClick={() => toggleQuestion(2)}
                >
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <FaQuestionCircle className="text-[#ffcf40] mr-2" />
                    Will my website be mobile-friendly?
                  </h3>
                  <FaChevronDown
                    className={`text-[#ffcf40] ml-2 transition-transform duration-300 ${
                      activeQuestion === 2 ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                {activeQuestion === 2 && (
                  <p className="mt-2">
                    Yes, all the websites we design and develop are fully
                    responsive and mobile-friendly, ensuring a seamless user
                    experience across devices.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        </>
    )
}