/* eslint-disable react/no-unescaped-entities */
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

export default function Info() {
  const [state, handleSubmit] = useForm("xqkrdlqe");

  if (state.succeeded) {
    return <p className="text-[#255036]">Thanks for contacting us, we'll get back you soon!</p>;
  }

  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#255036] mb-4">Contact Information</h2>
              <div className="flex items-center mb-4">
                <FaPhoneAlt className="text-2xl text-[#255036] mr-2" />
                <span className="text-gray-600">Phone: (123) 456-7890</span>
              </div>
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-2xl text-[#255036] mr-2" />
                <span className="text-gray-600">Email: info@example.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-2xl text-[#255036] mr-2" />
                <span className="text-gray-600">Address: 123 Main St, City, Country</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-2xl text-[#255036] mr-2" />
                <span className="text-gray-600">Opening Hours: Mon - Fri, 9AM - 5PM</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#255036] mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#255036] font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#255036]"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-[#255036] font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#255036]"
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-[#255036] text-white px-6 py-2 rounded-md hover:bg-[#ffcf40] hover:text-[#255036] transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
