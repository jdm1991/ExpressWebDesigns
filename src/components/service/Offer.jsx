import { FaPencilRuler, FaCode, FaHeadset } from 'react-icons/fa';

export default function Offer(){
    return(
        <>
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
        </>
    )
}