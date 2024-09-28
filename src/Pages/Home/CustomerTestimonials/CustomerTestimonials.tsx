import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CustomerTestimonial.css"
import backgroundImage from './../../../assets/tinified/sander-weeteling-YuezHfq_x54-unsplash.jpg';

// import "./Testimonial.css"; 

const CustomerTestimonials = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const reviews = [
    {
      name: "Ethan Smith",
      rating: 2.0,
      image: "https://randomuser.me/api/portraits/men/12.jpg", 
      comment:
        "The overall experience was okay, but there were areas for improvement. The delivery took longer than expected, and the customer service response times were not as fast as I had hoped. However, the product quality was decent once it arrived. Improving logistics and communication would be beneficial.",
    },
    {
      name: "Sophia Johnson",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/women/13.jpg", 
      comment:
        "I had an absolutely amazing experience! From start to finish, the service was exceptional. The website was easy to navigate, and placing my order was a breeze. The product exceeded my expectations in terms of quality and durability. The customer service team was very responsive and addressed all of my questions promptly. I couldn’t be happier and will definitely be a repeat customer!",
    },
    {
      name: "Liam Brown",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/men/14.jpg", 
      comment:
        "My experience was excellent overall. The product arrived quickly and in perfect condition. The packaging was sturdy and ensured that nothing was damaged during transit. I also appreciated the follow-up emails from the customer service team, which showed they truly care about their customers. I will definitely be ordering again in the future!",
    },
    {
      name: "Olivia Davis",
      rating: 4.0,
      image: "https://randomuser.me/api/portraits/women/11.jpg", 
      comment:
        "The service was good, and I was satisfied with the product I received. However, I think there is some room for improvement in the packaging. The box arrived slightly damaged, though the product inside was unharmed. I appreciate the quick delivery and the high quality of the product itself, but improving the packaging would make the experience even better.",
    },
    {
      name: "Noah Wilson",
      rating: 3.5,
      image: "https://randomuser.me/api/portraits/men/12.jpg", 
      comment:
        "The experience was generally positive, though there were a few minor issues along the way. The product was as described, but the delivery time was a bit longer than I anticipated. The customer service was helpful when I reached out, but I think the overall experience could be improved with faster shipping times.",
    },
    {
      name: "Ava Martinez",
      rating: 5.0,
      image: "https://randomuser.me/api/portraits/women/13.jpg", 
      comment:
        "Absolutely fantastic! From the moment I placed my order to the moment it arrived, everything was perfect. The shipping was incredibly fast, and the product itself was of outstanding quality. What really impressed me was the attention to detail and the follow-up from the team to ensure I was completely satisfied. This is hands down the best experience I've had with an online purchase!",
    },
  ];
  

  return (
    <div
    className=" py-16 text-white rounded-md my-8"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="text-center">
      <h2 className="text-4xl font-bold">What People say about us?</h2>
      <p className="text-lg mt-2">Discover what our customers think about us</p>
    </div>
    <Slider {...settings} className="mt-10 w-[80%] mx-auto">
      {reviews.map((testimonial, index) => (
        <div key={index} className="p-4">
          <div className="bg-slate-700 bg-opacity-50 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-2">★</span>
                  <span className="text-white">{testimonial.rating}</span>
                </div>
              </div>
            </div>
            <p className="text-white">{testimonial.comment.slice(0, 220)}</p>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  
  );
};

export default CustomerTestimonials;
