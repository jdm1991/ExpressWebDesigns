/* eslint-disable react/no-unescaped-entities */
import Intro from './about/Intro';
import Team from './about/Team';
import Mission from './about/Mission';
import Awards from './about/Awards';
import Employees from './about/Employee';
import AboutAction from './about/AboutAction';




export default function AboutUs() {
    return(
        <>
        <div className="text-[#255036]">
          <section></section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Section 1: Introduction */}
       <Intro />

        {/* Section 2: Our Team */}
       <Team />

        {/* Section 3: Our Mission */}
      <Mission />

        {/* Section 4: Awards and Recognition */}
       <Awards />

         {/* Section 5: Our Employees */}
      <Employees />

        {/* Section 6: Call to Action */}
       <AboutAction />
      </div>
    </div>
        </>
    )
}