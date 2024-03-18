import { FaSmile, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa';
export default function ChooseUs(){
    return(
        <>
<section className="bg-[#f5f5f5] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#255036] mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <FaSmile className="text-3xl text-[#255036] mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
                <p className="text-gray-600">We prioritize client satisfaction and strive to exceed your expectations.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaUsers className="text-3xl text-[#255036] mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Experienced Team</h3>
                <p className="text-gray-600">Our team consists of highly skilled and experienced professionals in web design and development.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaClock className="text-3xl text-[#255036] mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                <p className="text-gray-600">We understand the importance of deadlines and ensure timely delivery of your projects.</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-3xl text-[#255036] mr-4" />
              <div>
                <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">We have a rigorous quality assurance process to deliver error-free and high-quality websites.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}