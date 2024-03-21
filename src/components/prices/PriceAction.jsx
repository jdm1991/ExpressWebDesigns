export default function PriceAction() {
  return (
    <>
      <div className="py-12">
        <div className="max-w-4xl mx-auto text-center border-1 border-[#dcd5d5] shadow-[0_0_10px_rgba(37,80,54,0.3)] p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-8 text-[#255036]">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-[#255036]">
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
  );
}
