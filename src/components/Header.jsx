import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  HardDrive,
  List,
  Folder,
  DollarSign,
  Mail,
  Menu,
  X,
} from "react-feather";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#255036] text-right text-white px-8 sticky top-0 left-0 right-0 shadow-lg flex items-center justify-between h-20 z-50">
        <div className="text-lg font-bold flex items-center">
          <img
            src="src/assets/logo2.png"
            alt="Pic2"
            className="logo-image h-80 w-auto"
          />
        </div>
        <nav className="hidden xl:flex items-center h-full">
          <ul className="flex">
            <li className="group">
              <Link
                to="/"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <Home />
                <span>Home</span>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/about"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <HardDrive />
                <span>About</span>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/service"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <List />
                <span>Services</span>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/project"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <Folder />
                <span>Projects</span>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/prices"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <DollarSign />
                <span>Prices</span>
              </Link>
            </li>
            <li className="group">
              <Link
                to="/contact"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <Mail />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="xl:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="xl:hidden bg-[#255036] text-white px-8 py-4 fixed top-40 right-0 w-full z-50 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <Home className="mr-2" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <HardDrive className="mr-2" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <List className="mr-2" />
                <span>Services</span>
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <Folder className="mr-2" />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/prices"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <DollarSign className="mr-2" />
                <span>Prices</span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <Mail className="mr-2" />
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}