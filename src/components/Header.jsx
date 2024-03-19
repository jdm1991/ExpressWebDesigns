
import { Link } from "react-router-dom";
import { Home, HardDrive, List, Folder, DollarSign, Mail } from "react-feather";

export default function Header() {
  return (
    <>
      <div className="bg-[#255036] text-right  text-white px-8 sticky top-0 left-0 right-0 shadow-lg flex items-center justify-between h-40">
        <div className="text-lg font-bold flex items-center">
          <img
            src="src/assets/CroppedLogo.jpeg"
            alt="Pic2"
            className="logo-image h-20 w-auto"
          />
        </div>
        <nav className="flex items-center h-full">
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
                to="/projects"
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
      </div>
      
    </>
  );
}
