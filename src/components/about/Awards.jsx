import { FaAward } from 'react-icons/fa';

export default function Awards() {
    return(
        <>
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
        </>
    )
}