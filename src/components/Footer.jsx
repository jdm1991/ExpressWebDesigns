import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';


export default function Footer(){
    return(
        <>
         <footer className="bg-[#255036] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We are a web design company dedicated to creating modern and responsive websites for businesses and individuals.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm">
              123 Main Street<br />
              City, State 12345<br />
              Phone: (123) 456-7890<br />
              Email: info@example.com
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#ffcf40] transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#ffcf40] transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#ffcf40] transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-[#ffcf40] transition duration-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-600" />
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </div>
      </div>
    </footer>
        </>
    )
}