
import CustomerTestimonials from "./CustomerTestimonials/CustomerTestimonials";
import FeateuredCars from "./FeaturedCars/FeateuredCars";
import Hero from "./Hero/Hero";
import WhyChoseUs from "./WhyChoseUs/WhyChoseUs";

const Home = () => {
  return (
       <div className="py-4">
         <Hero></Hero>
         <FeateuredCars></FeateuredCars>
         <WhyChoseUs></WhyChoseUs>
         <CustomerTestimonials></CustomerTestimonials>
        </div>
);
};

export default Home;