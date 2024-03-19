/* eslint-disable react/no-unescaped-entities */
export default function AboutAction(){
    return(
        <>
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
        </>
    )
}