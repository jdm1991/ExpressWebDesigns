export default function Map() {
  return (
    <>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#255036] mb-8">Our Location</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19579.67731207821!2d0.3876931585938876!3d52.75405099871686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d7836894bd0cc7%3A0x61bdf4cbf84c5c2a!2sKing&#39;s%20Lynn%2C%20UK!5e0!3m2!1sen!2sus!4v1623945859204!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}