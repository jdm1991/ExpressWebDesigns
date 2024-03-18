import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Testimonial(){

    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            company: 'ABC Corporation',
            quote: 'The team at Web Design Studio exceeded our expectations. They created a stunning website that perfectly captures our brand identity and engages our target audience. Their professionalism and attention to detail were remarkable throughout the entire process.',
            avatar: 'path/to/avatar1.jpg',
          },
          {
            id: 2,
            name: 'Jane Smith',
            company: 'XYZ Industries',
            quote: 'We are thrilled with the website designed by Web Design Studio. They took the time to understand our business goals and delivered a website that not only looks great but also drives conversions. Their expertise in web design and development is truly impressive.',
            avatar: 'path/to/avatar2.jpg',
          },
          {
            id: 3,
            name: 'Michael Johnson',
            company: 'Tech Innovators',
            quote: 'Collaborating with Web Design Studio was a game-changer for our online presence. They created a modern and intuitive website that reflects our innovative spirit. Their team was responsive, creative, and dedicated to delivering results. We highly recommend their services.',
            avatar: 'path/to/avatar3.jpg',
          },
          {
            id: 4,
            name: 'Emily Davis',
            company: 'Fashion Boutique',
            quote: 'As a fashion boutique, we needed a website that showcases our products in the best possible way. Web Design Studio understood our vision and created a visually stunning website that perfectly represents our brand. They made the entire process smooth and enjoyable.',
            avatar: 'path/to/avatar4.jpg',
          },
          {
            id: 5,
            name: 'Robert Wilson',
            company: 'Health and Wellness Co.',
            quote: 'Web Design Studio helped us establish a strong online presence in the health and wellness industry. Their team created a website that is informative, user-friendly, and visually appealing. They were responsive to our needs and delivered the project on time and within budget.',
            avatar: 'path/to/avatar5.jpg',
          },
          {
            id: 6,
            name: 'Sarah Thompson',
            company: 'Education Solutions',
            quote: 'We are extremely satisfied with the website created by Web Design Studio for our educational institution. They designed a website that is engaging, interactive, and easy to navigate. Their attention to detail and commitment to quality are evident in every aspect of the project.',
            avatar: 'path/to/avatar6.jpg',
          },
          {
            id: 7,
            name: 'David Anderson',
            company: 'Marketing Experts',
            quote: 'Web Design Studio transformed our outdated website into a modern and dynamic platform. Their team understood our marketing objectives and created a website that effectively communicates our message and engages our target audience. We have seen a significant increase in traffic and leads since the launch.',
            avatar: 'path/to/avatar7.jpg',
          },
          {
            id: 8,
            name: 'Jessica Rodriguez',
            company: 'Event Planners Inc.',
            quote: 'We hired Web Design Studio to create a website for our event planning business, and they exceeded our expectations. The website beautifully showcases our services, portfolio, and testimonials. Their team was professional, responsive, and easy to work with throughout the development process.',
            avatar: 'path/to/avatar8.jpg',
          },
          {
            id: 9,
            name: 'Thomas Lee',
            company: 'Restaurant Chain',
            quote: 'Web Design Studio created a stunning website for our restaurant chain. The website perfectly captures the essence of our brand and provides an immersive experience for our customers. The team was creative, attentive to details, and delivered the project within the agreed timeline. We are extremely happy with the results.',
            avatar: 'path/to/avatar9.jpg',
          },
          {
            id: 10,
            name: 'Amanda Brown',
            company: 'Fitness Studio',
            quote: 'We approached Web Design Studio to create a website for our fitness studio, and they delivered beyond our expectations. The website is visually appealing, user-friendly, and effectively communicates our brand message. Their team was knowledgeable, responsive, and provided valuable insights throughout the project.',
            avatar: 'path/to/avatar10.jpg',
          },
          {
            id: 11,
            name: 'Mark Davis',
            company: 'Consulting Firm',
            quote: 'Web Design Studio created a professional and modern website for our consulting firm. The website effectively showcases our services, expertise, and client testimonials. Their team was attentive to our needs, provided regular updates, and delivered a high-quality website that meets our business objectives.',
            avatar: 'path/to/avatar11.jpg',
          },
          {
            id: 12,
            name: 'Laura Wilson',
            company: 'E-commerce Store',
            quote: 'We partnered with Web Design Studio to create an e-commerce website for our online store. The team did an outstanding job in designing a user-friendly and visually appealing website that seamlessly integrates with our product catalog. The website has significantly improved our online sales and customer engagement.',
            avatar: 'path/to/avatar12.jpg',
          },
        ];

        const PrevArrow = (props) => (
            <button
              {...props}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#255036] text-white p-2 rounded-full shadow-md hover:bg-[#ffcf40] hover:text-[#255036] transition duration-300 z-10"
            >
              <FaArrowLeft />
            </button>
          );
          
          const NextArrow = (props) => (
            <button
              {...props}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#255036] text-white p-2 rounded-full shadow-md hover:bg-[#ffcf40] hover:text-[#255036] transition duration-300 z-10"
            >
              <FaArrowRight />
            </button>
          );
          
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
          };

    return(
        <>
          <section className="bg-[#f5f5f5] py-16">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl text-center md:text-4xl font-bold text-[#255036] mb-8">
      What Our Clients Say
    </h2>
    <div className="max-w-4xl mx-auto px-8">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="px-4">
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#255036] transition duration-300 hover:shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt="Client Avatar"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {testimonial.quote}
              </p>
              <div className="flex justify-end">
                <FaStar className="text-[#ffcf40] text-2xl mr-1" />
                <FaStar className="text-[#ffcf40] text-2xl mr-1" />
                <FaStar className="text-[#ffcf40] text-2xl mr-1" />
                <FaStar className="text-[#ffcf40] text-2xl mr-1" />
                <FaStar className="text-[#ffcf40] text-2xl" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
</section>
        </>
    )
}