/* eslint-disable react/no-unescaped-entities */
import PriceIntro from "./prices/PriceIntro";
import PriceTable from "./prices/PriceTable";
import AdditionalService from "./prices/AdditionalService";
import Support from "./prices/Support";
import Payment from "./prices/Payment";
import PriceAction from "./prices/PriceAction";

export default function PricePage() {
  return (
    <>
      <div className="text-[#255036]">
        {/* Section 1: Pricing Introduction */}
        <PriceIntro />

        {/* Section 2: Pricing Table */}
        <PriceTable />

        {/* Section 3: Additional Services */}
        <AdditionalService />

        {/* Section 5: Support */}
        <Support />

        {/* Section 6: Payment Methods */}
       <Payment />

        {/* Section 4: Call to Action */}
        <PriceAction />
      </div>
    </>
  );
}
