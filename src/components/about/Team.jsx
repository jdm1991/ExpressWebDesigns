/* eslint-disable react/no-unescaped-entities */
import { FaUsers, FaLightbulb, FaHandshake} from 'react-icons/fa';

export default function Team(){
    return(
        <>
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
        </>
    )
}