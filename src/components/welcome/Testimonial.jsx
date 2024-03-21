import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icon1 from "../../assets/icon1.jpg";
import icon4 from "../../assets/icon4.jpg";
import icon2 from "../../assets/icon2.jpg";
import icon5 from "../../assets/icon5.jpg";
import icon3 from "../../assets/icon3.jpg";
import icon6 from "../../assets/icon6.jpg";

export default function Testimonial(){

    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            company: 'ABC Corporation',
            quote: 'The team at Web Design Studio exceeded our expectations. They created a stunning website that perfectly captures our brand identity and engages our target audience. Their professionalism and attention to detail were remarkable throughout the entire process.',
            avatar: icon1,
          },
          {
            id: 2,
            name: 'Jane Smith',
            company: 'XYZ Industries',
            quote: 'We are thrilled with the website designed by Web Design Studio. They took the time to understand our business goals and delivered a website that not only looks great but also drives conversions. Their expertise in web design and development is truly impressive.',
            avatar: icon4,
          },
          {
            id: 3,
            name: 'Michael Johnson',
            company: 'Tech Innovators',
            quote: 'Collaborating with Web Design Studio was a game-changer for our online presence. They created a modern and intuitive website that reflects our innovative spirit. Their team was responsive, creative, and dedicated to delivering results. We highly recommend their services.',
            avatar: icon2,
          },
          {
            id: 4,
            name: 'Emily Davis',
            company: 'Fashion Boutique',
            quote: 'As a fashion boutique, we needed a website that showcases our products in the best possible way. Web Design Studio understood our vision and created a visually stunning website that perfectly represents our brand. They made the entire process smooth and enjoyable.',
            avatar: icon5,
          },
          {
            id: 5,
            name: 'Robert Wilson',
            company: 'Health and Wellness Co.',
            quote: 'Web Design Studio helped us establish a strong online presence in the health and wellness industry. Their team created a website that is informative, user-friendly, and visually appealing. They were responsive to our needs and delivered the project on time and within budget.',
            avatar: icon3,
          },
          {
            id: 6,
            name: 'Sarah Thompson',
            company: 'Education Solutions',
            quote: 'We are extremely satisfied with the website created by Web Design Studio for our educational institution. They designed a website that is engaging, interactive, and easy to navigate. Their attention to detail and commitment to quality are evident in every aspect of the project.',
            avatar: icon6,
          }
        ];

        const PrevArrow = (props) => (
          <button
            {...props}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-[#255036] text-white p-2 rounded-full shadow-md hover:bg-[#ffcf40] hover:text-[#255036] transition duration-300 z-10"
          >
            <FaArrowLeft />
          </button>
        );
      
        const NextArrow = (props) => (
          <button
            {...props}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-[#255036] text-white p-2 rounded-full shadow-md hover:bg-[#ffcf40] hover:text-[#255036] transition duration-300 z-10"
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
          responsive: [
            {
              breakpoint: 640,
              settings: {
                arrows: false,
              },
            },
          ],
        };

    return(
        <>
      <section className="bg-[#f5f5f5] py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#255036] mb-6 sm:mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-2 sm:px-4">
                <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border-2 border-[#255036] transition duration-300 hover:shadow-lg">
                  <div className="flex flex-col sm:flex-row items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt="Client Avatar"
                      className="w-16 h-16  mr-0 sm:mr-4 mb-4 sm:mb-0"
                    />
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="flex justify-end">
                    <FaStar className="text-[#ffcf40] text-xl sm:text-2xl mr-1" />
                    <FaStar className="text-[#ffcf40] text-xl sm:text-2xl mr-1" />
                    <FaStar className="text-[#ffcf40] text-xl sm:text-2xl mr-1" />
                    <FaStar className="text-[#ffcf40] text-xl sm:text-2xl mr-1" />
                    <FaStar className="text-[#ffcf40] text-xl sm:text-2xl" />
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