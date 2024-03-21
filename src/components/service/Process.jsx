/* eslint-disable react/no-unescaped-entities */
import { FaCheckCircle} from "react-icons/fa";

export default function Process() {
    return(
        <>
        <div className="py-12">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-xl">
              We follow a structured and collaborative process to ensure the
              success of your web design project. Here's how we work:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-10">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">1. Discovery</h3>
              <p>
                We start by understanding your business goals, target audience,
                and requirements through in-depth discussions and research.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">2. Planning</h3>
              <p>
                Based on the discovery phase, we create a detailed project plan,
                timeline, and milestones to ensure a smooth and efficient
                workflow.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">3. Design</h3>
              <p>
                Our designers create wireframes and mockups based on the
                gathered information, ensuring a visually appealing and
                intuitive user experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">4. Development</h3>
              <p>
                Our developers bring the approved design to life, coding the
                website using the latest technologies and best practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">5. Testing</h3>
              <p>
                We conduct thorough testing and quality assurance to ensure the
                website functions flawlessly across devices and browsers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaCheckCircle className="text-4xl text-[#ffcf40] mb-4" />
              <h3 className="text-xl font-bold mb-2">6. Launch</h3>
              <p>
                After final approval, we deploy your website and ensure a smooth
                launch, providing you with the necessary training and support.
              </p>
            </div>
          </div>
        </div>
        </>
    )
}