import { Link } from 'react-router-dom';
import { FaHome, FaServicestack, FaBriefcase, FaEnvelope, FaUsers } from 'react-icons/fa';

export default function Header(){
    return(
        <>
         <header className="bg-[#255036] p-4">
      <nav>
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <Link to="/" className="flex items-center text-white hover:text-[#ffcf40] transition duration-300">
              <FaHome className="mr-2" />
              <span className="hidden md:inline">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/service" className="flex items-center text-white hover:text-[#ffcf40] transition duration-300">
              <FaServicestack className="mr-2" />
              <span className="hidden md:inline">Service</span>
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="flex items-center text-white hover:text-[#ffcf40] transition duration-300">
              <FaBriefcase className="mr-2" />
              <span className="hidden md:inline">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center text-white hover:text-[#ffcf40] transition duration-300">
              <FaEnvelope className="mr-2" />
              <span className="hidden md:inline">Contact</span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center text-white hover:text-[#ffcf40] transition duration-300">
              <FaUsers className="mr-2" />
              <span className="hidden md:inline">About Us</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
        </>
    )
}