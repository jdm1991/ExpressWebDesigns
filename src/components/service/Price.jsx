export default function Price() {
    return(
        <>
            <div className="bg-[#255036] text-white py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Pricing</h2>
            <p className="text-xl mb-8">
              We offer competitive pricing for our web design and development
              services. Choose a package that suits your needs and budget.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Basic</h3>
                <p className="text-4xl font-bold mb-4">$999</p>
                <ul className="text-left mb-8">
                  <li>- 5 Pages</li>
                  <li>- Responsive Design</li>
                  <li>- Content Management System</li>
                  <li>- Basic SEO Optimization</li>
                </ul>
                <a
                  href="/contact"
                  className="bg-[#ffcf40] text-[#255036] px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866]"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Standard</h3>
                <p className="text-4xl font-bold mb-4">$1,999</p>
                <ul className="text-left mb-8">
                  <li>- 10 Pages</li>
                  <li>- Responsive Design</li>
                  <li>- Content Management System</li>
                  <li>- Advanced SEO Optimization</li>
                  <li>- Custom Functionality</li>
                </ul>
                <a
                  href="/contact"
                  className="bg-[#ffcf40] text-[#255036] px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866]"
                >
                  Get Started
                </a>
              </div>
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Premium</h3>
                <p className="text-4xl font-bold mb-4">$3,999</p>
                <ul className="text-left mb-8">
                  <li>- 20+ Pages</li>
                  <li>- Responsive Design</li>
                  <li>- Content Management System</li>
                  <li>- Advanced SEO Optimization</li>
                  <li>- Custom Functionality</li>
                  <li>- E-commerce Integration</li>
                  <li>- Priority Support</li>
                </ul>
                <a
                  href="/contact"
                  className="bg-[#ffcf40] text-[#255036] px-6 py-3 rounded-md font-bold uppercase tracking-wide hover:bg-[#ffd866]"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}