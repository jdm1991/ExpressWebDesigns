import { FaCheck } from "react-icons/fa";

export default function PriceTable() {
  return (
    <>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-[0_0_10px_rgba(37,80,54,0.3)] flex flex-col">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
                <p className="text-4xl font-bold mb-4">£999</p>
                <ul className="text-left mb-8">
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>5 Pages</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Content Management System</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Basic SEO Optimization</span>
                  </li>
                </ul>
              </div>
              <a
                href="/contact"
                className="bg-[#ffcf40] text-[#255036] px-4 py-2 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866] w-1/2 text-sm"
              >
                Get Started
              </a>
            </div>

            {/* Standard Plan */}
            <div className="bg-white p-8 rounded-lg shadow-[0_0_10px_rgba(37,80,54,0.3)] flex flex-col">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4">Standard Plan</h2>
                <p className="text-4xl font-bold mb-4">£1,999</p>
                <ul className="text-left mb-8">
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>10 Pages</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Content Management System</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Advanced SEO Optimization</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Custom Functionality</span>
                  </li>
                </ul>
              </div>
              <a
                href="/contact"
                className="bg-[#ffcf40] text-[#255036] px-4 py-2 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866] w-1/2 text-sm"
              >
                Get Started
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-lg shadow-[0_0_10px_rgba(37,80,54,0.3)] flex flex-col">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-4">Premium Plan</h2>
                <p className="text-4xl font-bold mb-4">£3,999</p>
                <ul className="text-left mb-8">
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>20+ Pages</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Content Management System</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Advanced SEO Optimization</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Custom Functionality</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>E-commerce Integration</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <FaCheck className="text-[#ffcf40] mr-2" />
                    <span>Priority Support</span>
                  </li>
                </ul>
              </div>
              <a
                href="/contact"
                className="bg-[#ffcf40] text-[#255036] px-4 py-2 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866] w-1/2 text-sm"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
