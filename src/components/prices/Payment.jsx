import {
    FaCreditCard,
    FaApplePay,
    FaBitcoin,
    FaPaypal,
  } from "react-icons/fa";

export default function Payment(){
    return(
        <>
         <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Payment Methods
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Payment Method 1 */}
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <FaCreditCard className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-4">Credit/Debit Card</h3>
                <p>
                  We accept all major credit and debit cards, including Visa,
                  Mastercard, American Express, and Discover.
                </p>
              </div>

              {/* Payment Method 2 */}
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <FaApplePay className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-4">Apple Pay</h3>
                <p>
                  For a seamless and secure payment experience, we offer Apple
                  Pay as a convenient payment option.
                </p>
              </div>

              {/* Payment Method 3 */}
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <FaBitcoin className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-4">Bitcoin</h3>
                <p>
                  We accept payments in Bitcoin, providing you with the
                  flexibility to pay using cryptocurrency.
                </p>
              </div>

              {/* Payment Method 4 */}
              <div className="bg-white text-[#255036] p-8 rounded-lg shadow-lg">
                <FaPaypal className="text-4xl text-[#ffcf40] mb-4" />
                <h3 className="text-xl font-bold mb-4">PayPal</h3>
                <p>
                  We also accept payments via PayPal, offering you an additional
                  secure and widely-used payment option.
                </p>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}