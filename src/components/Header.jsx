import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  FaHome,
  FaServicestack,
  FaBriefcase,
  FaEnvelope,
  FaUsers,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo2 from "../assets/logo2.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-[#255036] py-4 px-8 border-b-2 border-[#ffcf40] h-[16vh] flex items-center justify-between">
        <nav className="flex flex-row items-center justify-between w-full max-w-7xl">
          <div className="flex items-center">
            <img
              src={logo2}
              alt="Logo2"
              className="h-4rem w-5rem md:h-5rem md:w-5rem"
            />
          </div>
          <div className="flex items-end">
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white text-2xl focus:outline-none"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
            <ul
              className={`${
                isOpen ? "flex" : "hidden"
              } md:flex flex-row space-x-12 mt-4 md:mt-0`}
            >
              <li>
                <Link
                  to="/"
                  className="flex items-end text-white text-xl hover:text-[#ffcf40] hover:scale-125 transition duration-300"
                >
                  <FaHome className="mr-2" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="flex items-center text-white text-xl hover:text-[#ffcf40] hover:scale-125 transition duration-300"
                >
                  <FaServicestack className="mr-2" />
                  <span>Service</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="flex items-center text-white text-xl hover:text-[#ffcf40] hover:scale-125 transition duration-300"
                >
                  <FaBriefcase className="mr-2" />
                  <span>Portfolio</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center text-white text-xl hover:text-[#ffcf40] hover:scale-125 transition duration-300"
                >
                  <FaEnvelope className="mr-2" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center text-white text-xl hover:text-[#ffcf40] hover:scale-125 transition duration-300"
                >
                  <FaUsers className="mr-2" />
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Routes>
        <Route path="/" />
        <Route path="/service" />
        <Route path="/portfolio" />
        <Route path="/about" />
        <Route path="/contact" />
      </Routes>
    </>
  );
}