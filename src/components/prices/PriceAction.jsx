export default function PriceAction(){
    return(
        <>
         <div className="py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Contact us today to discuss your project requirements and get a
              personalized quote.
            </p>
            <a
              href="/contact"
              className="bg-[#ffcf40] text-[#255036] px-8 py-4 rounded-md text-xl font-bold uppercase tracking-wide hover:bg-[#ffd866] transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        </>
    )
}