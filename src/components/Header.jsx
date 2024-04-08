import { useState } from "react";
import { NavLink } from "react-router-dom";
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
import logo from "../../public/logo.svg"

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
            src={logo}
            alt="Pic2"
            className="logo-image h-80 w-auto"
          />
        </div>
        <nav className="hidden xl:flex items-center h-full">
          <ul className="flex">
            <li className="group">
              <NavLink
                to="/"
                activeClassName="active"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <Home />
                <span>Home</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/about"
                activeClassName="active"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <HardDrive />
                <span>About</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/service"
                activeClassName="active"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <List />
                <span>Services</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/project"
                activeClassName="active"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <Folder />
                <span>Projects</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/prices"
                activeClassName="active"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <DollarSign />
                <span>Prices</span>
              </NavLink>
            </li>
            <li className="group">
              <NavLink
                to="/contact"
                activeClassName="active"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-40 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
              >
                <Mail />
                <span>Contact</span>
              </NavLink>
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
        <div className="xl:hidden bg-[#255036] text-white px-8 py-4 fixed top-20 right-0 w-full z-50 transition-all duration-300 ease-in-out">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                to="/"
                activeClassName="active"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <Home className="mr-2" />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                activeClassName="active"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <HardDrive className="mr-2" />
                <span>About</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                activeClassName="active"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <List className="mr-2" />
                <span>Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                activeClassName="active"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <Folder className="mr-2" />
                <span>Projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/prices"
                activeClassName="active"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <DollarSign className="mr-2" />
                <span>Pricing</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                activeClassName="active"
                className="flex items-center text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-[#ffcf40]"
                onClick={toggleMenu}
              >
                <Mail className="mr-2" />
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}