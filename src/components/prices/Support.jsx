/* eslint-disable react/no-unescaped-entities */
import {
    FaHeadset,
    FaTools,
    FaShieldAlt,
  } from "react-icons/fa";

export default function Support() {
    return (
      <>
        <div className="bg-[#255036] text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#ffcf40]">
              Support
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Support Option 1 */}
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <FaHeadset className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                <p>
                  Our dedicated support team is available 24/7 to assist you
                  with any questions or issues you may have. We're committed to
                  providing prompt and reliable support to ensure your website
                  runs smoothly.
                </p>
              </div>

              {/* Support Option 2 */}
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <FaTools className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-4">
                  Maintenance and Updates
                </h3>
                <p>
                  We offer ongoing maintenance and updates to keep your website
                  secure, optimized, and up-to-date with the latest features and
                  functionalities. Our team proactively monitors your website to
                  ensure optimal performance.
                </p>
              </div>

              {/* Support Option 3 */}
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <FaShieldAlt className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-4">Security Monitoring</h3>
                <p>
                  We implement robust security measures and regularly monitor
                  your website for potential vulnerabilities or threats. Our
                  proactive approach helps maintain the integrity and safety of
                  your website and its data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}