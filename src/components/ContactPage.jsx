
import ContactHero from "./contact/ContactHero"
import Info from "./contact/Info"
import Map from "./contact/Map"
import ContactAction from "./contact/ContactAction"



export default function ContactPage (){

  return (
    <div className="bg-white">
      {/* Hero Section */}
   <ContactHero />

      {/* Contact Info Section */}
     <Info />

      {/* Map Section */}
      <Map />

      {/* Call to Action Section */}
     <ContactAction />
    </div>
  );
}

