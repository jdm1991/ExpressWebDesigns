export default function ContactAction(){
    return(
        <>
         <section className="bg-[#f5f5f5] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#255036] mb-4">Ready to Work with Us?</h2>
          <p className="text-lg md:text-xl mb-8">Let's discuss your project and bring your ideas to life.</p>
          <a
            href="tel:1234567890"
            className="inline-block bg-[#255036] text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#ffcf40] hover:text-[#255036] transition duration-300 mr-4"
          >
            Call Us
          </a>
          <a
            href="mailto:info@example.com"
            className="inline-block bg-white text-[#255036] py-3 px-8 rounded-full text-lg font-semibold border-2 border-[#255036] hover:bg-[#ffcf40] transition duration-300"
          >
            Email Us
          </a>
        </div>
      </section>
        </>
    )
}