import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function Info(){
    return(
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
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#255036]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#255036]"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#255036]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#255036] text-white px-6 py-2 rounded-md hover:bg-[#ffcf40] hover:text-[#255036] transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}