export default function AdditionalService() {
  return (
    <>
      <div className="bg-[#255036] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#ffcf40]">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Logo Design</h3>
              <p className="mb-4">
                We offer professional logo design services to create a unique
                and memorable visual identity for your brand.
              </p>
              <p className="text-2xl font-bold">
                Starting at{" "}
                <span className="text-[#ffcf40] text-shadow-[0_0_2px_#255036]">
                  $500
                </span>
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Content Writing</h3>
              <p className="mb-4">
                Our content writing services help you create engaging and
                informative content for your website to attract and retain
                visitors.
              </p>
              <p className="text-2xl font-bold">
                Starting at{" "}
                <span className="text-[#ffcf40] text-shadow-[0_0_2px_#255036]">
                  $100
                </span>{" "}
                per page
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
