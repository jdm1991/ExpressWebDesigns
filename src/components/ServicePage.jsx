/* eslint-disable react/no-unescaped-entities */
import { FaPencilRuler, FaCode, FaHeadset, FaQuestionCircle, FaCheckCircle, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

export default function ServicePage(){
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
         <div className="text-[#255036]">
      {/* Section 1: What We Offer */}
      <div className="bg-[#255036] text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-8">What We Offer</h1>
          <p className="text-xl mb-8">
            We provide a comprehensive range of web design and development services to help businesses establish a strong online presence and achieve their digital goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
              <FaPencilRuler className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Design</h3>
              <p>
                Our team of skilled designers creates visually appealing and user-friendly websites that align with your brand identity and engage your target audience.
              </p>
            </div>
            <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
              <FaCode className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p>
                Our experienced developers use the latest technologies and best practices to build robust, scalable, and high-performing websites tailored to your specific requirements.
              </p>
            </div>
            <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
              <FaHeadset className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Support and Maintenance</h3>
              <p>
                We provide ongoing support and maintenance services to ensure your website remains secure, up-to-date, and performs optimally.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Our Process */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-xl">
            We follow a structured and collaborative process to ensure the success of your web design project. Here's how we work:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">1. Discovery</h3>
            <p>
              We start by understanding your business goals, target audience, and requirements through in-depth discussions and research.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">2. Planning</h3>
            <p>
              Based on the discovery phase, we create a detailed project plan, timeline, and milestones to ensure a smooth and efficient workflow.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">3. Design</h3>
            <p>
              Our designers create wireframes and mockups based on the gathered information, ensuring a visually appealing and intuitive user experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">4. Development</h3>
            <p>
              Our developers bring the approved design to life, coding the website using the latest technologies and best practices.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">5. Testing</h3>
            <p>
              We conduct thorough testing and quality assurance to ensure the website functions flawlessly across devices and browsers.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">6. Launch</h3>
            <p>
              After final approval, we deploy your website and ensure a smooth launch, providing you with the necessary training and support.
            </p>
          </div>
        </div>
      </div>


      {/* Section 3: Pricing */}
      <div className="bg-[#255036] text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Pricing</h2>
          <p className="text-xl mb-8">
            We offer competitive pricing for our web design and development services. Choose a package that suits your needs and budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <p className="text-4xl font-bold mb-4">$999</p>
              <ul className="text-left mb-8">
                <li>- 5 Pages</li>
                <li>- Responsive Design</li>
                <li>- Content Management System</li>
                <li>- Basic SEO Optimization</li>
              </ul>
              <a href="/contact" className="bg-[#ffcf40] text-[#255036] px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866]">
                Get Started
              </a>
            </div>
            <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Standard</h3>
              <p className="text-4xl font-bold mb-4">$1,999</p>
              <ul className="text-left mb-8">
                <li>- 10 Pages</li>
                <li>- Responsive Design</li>
                <li>- Content Management System</li>
                <li>- Advanced SEO Optimization</li>
                <li>- Custom Functionality</li>
              </ul>
              <a href="/contact" className="bg-[#ffcf40] text-[#255036] px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866]">
                Get Started
              </a>
            </div>
            <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Premium</h3>
              <p className="text-4xl font-bold mb-4">$3,999</p>
              <ul className="text-left mb-8">
                <li>- 20+ Pages</li>
                <li>- Responsive Design</li>
                <li>- Content Management System</li>
                <li>- Advanced SEO Optimization</li>
                <li>- Custom Functionality</li>
                <li>- E-commerce Integration</li>
                <li>- Priority Support</li>
              </ul>
              <a href="/contact" className="bg-[#ffcf40] text-[#255036] px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866]">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 4: Support */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Support</h2>
          <p className="text-xl mb-8">
            We provide comprehensive support to ensure your website runs smoothly and efficiently. Our support services include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaHeadset className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Technical Support</h3>
              <p>
                Our technical support team is available to assist you with any issues or concerns related to your website's functionality and performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaPencilRuler className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Design Updates</h3>
              <p>
                We offer ongoing design updates to keep your website fresh, modern, and aligned with your brand identity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section 5: FAQ */}
      <div className="bg-[#255036] text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
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
                    activeQuestion === 0 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {activeQuestion === 0 && (
                <p className="mt-2">
                  The timeline for designing and developing a website varies depending on the project's scope and complexity. Typically, it takes 4-8 weeks for a basic website and 8-16 weeks for a more complex website with custom functionality.
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
                    activeQuestion === 1 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {activeQuestion === 1 && (
                <p className="mt-2">
                  We can provide guidance and suggestions for website content, but the client is responsible for providing the final content. However, we offer content writing services at an additional cost.
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
                    activeQuestion === 2 ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {activeQuestion === 2 && (
                <p className="mt-2">
                  Yes, all the websites we design and develop are fully responsive and mobile-friendly, ensuring a seamless user experience across devices.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Section 6: Call to Action */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Take the first step towards a stunning and high-performing website. Contact us today to discuss your project.
          </p>
          <a href="/contact" className="bg-[#ffcf40] text-[#255036] px-8 py-4 rounded-md text-xl font-bold uppercase tracking-wide hover:bg-[#ffd866] transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
        </>
    )
}