import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#255036] text-white py-12 border-t border-[rgba(255,207,64,0.5)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Express Web Designs</h3>
              <p className="text-sm mb-4">
                We are a web design company dedicated to creating modern and
                responsive websites for businesses and individuals.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-white hover:text-[#ffcf40] transition duration-300"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ffcf40] transition duration-300"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ffcf40] transition duration-300"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#ffcf40] transition duration-300"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="flex flex-col items-center mb-2">
                <div className="flex items-center">
                  <MdEmail className="mr-2" size={20} />
                  <a
                    href="mailto:info@expresswebdesigns.co.uk"
                    className="text-sm hover:text-[#ffcf40]"
                  >
                    info@expresswebdesigns.co.uk
                  </a>
                </div>
                <div className="flex items-center">
                  <MdPhone className="mr-2" size={20} />
                  <a
                    href="tel:+1234567890"
                    className="text-sm hover:text-[#ffcf40]"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center">
                  <MdLocationOn className="mr-2" size={20} />
                  <p className="text-sm">
                    123 Main Street
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:text-[#ffcf40]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#ffcf40]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#ffcf40]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#ffcf40]">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#ffcf40]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="my-8 border-t border-[rgba(255,207,64,0.5)]" />
          <div className="text-center text-sm">
            &copy; {new Date().getFullYear()} Express Web Designs. All rights
            reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
