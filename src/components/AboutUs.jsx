/* eslint-disable react/no-unescaped-entities */

import { FaUsers, FaLightbulb, FaHandshake, FaAward, FaUserTie } from 'react-icons/fa';



export default function AboutUs() {
    return(
        <>
        <div className="text-[#255036]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: Introduction */}
        <div className="bg-[#255036] text-white py-12 rounded-lg shadow-lg mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            <p className="text-xl mb-8">
              We are a passionate team of web designers and developers dedicated to creating innovative and user-friendly websites. With years of experience in the industry, we strive to deliver high-quality solutions that exceed our clients' expectations.
            </p>
            <p className="text-xl">
              Our goal is to help businesses establish a strong online presence and achieve their digital goals through cutting-edge web design and development services.
            </p>
          </div>
        </div>

        {/* Section 2: Our Team */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl">
              Our team consists of skilled web designers, developers, and project managers who bring a wealth of knowledge and expertise to every project. We approach each project with a creative mindset, finding innovative solutions to complex challenges and delivering outstanding results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <FaUsers className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Experienced Professionals</h3>
              <p>
                Our team members have a proven track record of success in the web design and development industry. With their deep understanding of the latest technologies and best practices, they consistently deliver exceptional results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <FaLightbulb className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Creative Problem Solvers</h3>
              <p>
                We believe in pushing the boundaries of creativity to find unique and effective solutions. Our team thrives on challenges and always strives to think outside the box to deliver innovative and impactful designs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <FaHandshake className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
              <p>
                We prioritize our clients' needs and goals above all else. By working closely with our clients and maintaining open communication throughout the project, we ensure that the final product aligns perfectly with their vision.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Our Mission */}
        <div className="bg-[#255036] text-white py-12 rounded-lg shadow-lg mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl mb-8">
              Our mission is to empower businesses by providing exceptional web design and development services that enable them to thrive in the digital landscape. We are committed to delivering innovative, user-centric solutions that drive growth, engage audiences, and achieve measurable results.
            </p>
            <p className="text-xl">
              We believe in building long-term partnerships with our clients, helping them navigate the ever-evolving digital world and stay ahead of the competition. Through our expertise and dedication, we aim to be the go-to partner for businesses seeking to establish a strong and effective online presence.
            </p>
          </div>
        </div>

        {/* Section 4: Awards and Recognition */}
        <div className="py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Awards and Recognition</h2>
            <p className="text-xl">
              We are honored to have been recognized for our outstanding work in the web design and development industry. These awards are a testament to our commitment to excellence and our ability to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <FaAward className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Best Web Design Agency 2023</h3>
              <p>
                We are proud to have been recognized as the Best Web Design Agency of the year by the prestigious Web Design Awards. This award showcases our ability to create visually stunning and highly functional websites that exceed client expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <FaAward className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">Top 10 Web Development Companies</h3>
              <p>
                Our company has been featured in the list of Top 10 Web Development Companies by the renowned industry publication, Web Dev Magazine. This recognition highlights our technical expertise and ability to deliver cutting-edge web solutions.
              </p>
            </div>
          </div>
        </div>

         {/* Section 5: Our Employees */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Employees</h2>
          <p className="text-xl">
            Meet the talented individuals who make up our team. Their skills, dedication, and passion for web design and development are the driving force behind our success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        {/* Section 6: Call to Action */}
        <div className="bg-[#255036] text-white py-12 rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8">
              Let's work together to bring your vision to life and create a website that exceeds your expectations. Our team is ready to provide you with the expertise and guidance needed to achieve your digital goals.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#ffcf40] text-[#255036] px-8 py-4 rounded-md text-xl font-bold uppercase tracking-wide hover:bg-[#ffd866] transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}