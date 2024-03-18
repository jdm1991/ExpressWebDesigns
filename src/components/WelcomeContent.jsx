
import Hero from "../components/welcome/Hero";
import Process from '../components/welcome/Process';
import ChooseUs from '../components/welcome/ChooseUs';
import Testimonial from '../components/welcome/Testimonial';
import Action from '../components/welcome/Action';
import MiniPortfolio from '../components/welcome/MiniPortfolio';

export default function WelcomeContent() {


    return(
        <>
         <div className="bg-white">
      {/* Hero Section */}
     <Hero />

      {/* Process Section */}
      <Process />

      {/* Why Choose Us Section */}
     <ChooseUs />

      {/* Mini portfolio Section */}
     <MiniPortfolio />

      {/* Testimonials Section */}
     <Testimonial />

      {/* Call to Action Section */}
     <Action />
    </div>
        </>
    )
}