import {  FaUserTie } from 'react-icons/fa';
export default function Employees(){
    return(
        <>
        <div className="py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Employees</h2>
          <p className="text-xl">
            Meet the talented individuals who make up our team. Their skills, dedication, and passion for web design and development are the driving force behind our success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-10">
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <FaUserTie className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">Jack Miller</h3>
            <p className="mb-4">Senior Web Developer</p>
            <p>
              Jack is a highly skilled web developer with over 8 years of experience. He specializes in creating robust and scalable web applications using the latest technologies and frameworks.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <FaUserTie className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">Callum Hayden</h3>
            <p className="mb-4">UI/UX Designer</p>
            <p>
              Callum is a talented UI/UX designer who brings a keen eye for detail and a user-centric approach to every project. He creates intuitive and visually appealing designs that enhance the user experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <FaUserTie className="text-4xl text-[#ffcf40] mb-4" />
            <h3 className="text-xl font-bold mb-2">Dan Roberts</h3>
            <p className="mb-4">Front-end Developer</p>
            <p>
              Dan is a skilled front-end developer who excels at turning design concepts into pixel-perfect, responsive websites. He has a strong command of HTML, CSS, and JavaScript, ensuring seamless functionality across devices.
            </p>
          </div>
        </div>
      </div>
        </>
    )
}