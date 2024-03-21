/* eslint-disable react/no-unescaped-entities */
import { FaPencilRuler, FaHeadset} from "react-icons/fa";

export default function Support(){
    return(
        <>
          <div className="py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Support</h2>
            <p className="text-xl mb-8">
              We provide comprehensive support to ensure your website runs
              smoothly and efficiently. Our support services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <FaHeadset className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-2">Technical Support</h3>
                <p>
                  Our technical support team is available to assist you with any
                  issues or concerns related to your website's functionality and
                  performance.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <FaPencilRuler className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-2">Design Updates</h3>
                <p>
                  We offer ongoing design updates to keep your website fresh,
                  modern, and aligned with your brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}