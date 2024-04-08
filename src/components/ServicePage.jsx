/* eslint-disable react/no-unescaped-entities */
import Offer from "./service/Offer";
import Process from "./service/Process";
import Price from "./service/Price";
import Support from "./service/Support";
import Faq from "./service/Faq";
import ServiceAction from "./service/ServiceAction";

export default function ServicePage() {


  return (
    <>
      <div className="text-[#255036]">
        {/* Section 1: What We Offer */}
        <Offer />

        {/* Section 2: Our Process */}
       <Process />

        {/* Section 3: Pricing */}
     {/* <Price /> */}

        {/* Section 4: Support */}
    <Support />

        {/* Section 5: FAQ */}
        <Faq />

        {/* Section 6: Call to Action */}
      <ServiceAction />
      </div>
    </>
  );
}
