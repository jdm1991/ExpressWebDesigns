
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUsers, faCode, faHandshake } from '@fortawesome/free-solid-svg-icons';


export default function AboutUs() {
    return(
        <>
        <div className="bg-[#255036] text-[#ffcf40] font-sans">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 animate-fade-in">About Us</h1>
        <p className="text-xl text-center mb-16 animate-fade-in">
          We are a UK-based web design company that creates modern and efficient websites for all clients. Although new to the scene, we bring a lot to the table with our skilled team and innovative approach.
        </p>

        <section className="mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <FontAwesomeIcon icon={faLightbulb} className="text-6xl" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Our Vision</h2>
          <p className="text-lg text-center">
            We strive to deliver cutting-edge web solutions that empower businesses to succeed in the digital landscape. Our goal is to create websites that are not only visually appealing but also highly functional and user-friendly.
          </p>
        </section>

        <section className="mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <FontAwesomeIcon icon={faUsers} className="text-6xl" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Jack Miller" className="w-40 h-40 rounded-full object-cover mb-4" />
              <h3 className="text-2xl font-bold">Jack Miller</h3>
              <p className="text-lg">Web Designer</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Callum Hayden" className="w-40 h-40 rounded-full object-cover mb-4" />
              <h3 className="text-2xl font-bold">Callum Hayden</h3>
              <p className="text-lg">Front-end Developer</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="https://via.placeholder.com/150" alt="Daniel Roberts" className="w-40 h-40 rounded-full object-cover mb-4" />
              <h3 className="text-2xl font-bold">Daniel Roberts</h3>
              <p className="text-lg">Back-end Developer</p>
            </div>
          </div>
        </section>

        <section className="mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <FontAwesomeIcon icon={faCode} className="text-6xl" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Our Process</h2>
          <p className="text-lg text-center">
            We follow a streamlined process to ensure the best results for our clients. From initial consultation to final launch, we work closely with you to understand your unique needs and deliver a website that exceeds your expectations.
          </p>
        </section>

        <section className="animate-fade-in">
          <div className="flex justify-center mb-8">
            <FontAwesomeIcon icon={faHandshake} className="text-6xl" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4">Our Commitment</h2>
          <p className="text-lg text-center">
            We are dedicated to providing exceptional service and support to our clients. Your satisfaction is our top priority, and we go above and beyond to ensure that your website is a success.
          </p>
        </section>
      </div>
    </div>
        </>
    )
}