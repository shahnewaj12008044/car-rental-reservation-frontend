import image from './../../assets/pictures/carbanner/car6.jpg'

const Banner = () => {
  return (
    <div className=" flex flex-col md:flex-row border rounded-lg shadow-lg overflow-hidden my-2">
    <div className="md:w-1/2 relative">
      <img src={image} alt="image" className="object-cover w-full h-full" />
      <h1 className='bg-gradient px-8 py-4 rounded-s-xl -top-1 right-0 absolute text-xs text-[#020C29] dark:text-white font-bold'>5 Years of Trusted Excellence</h1>
    </div>
    <div className="md:w-1/2  p-4 bg-gradient bg-opacity-25 flex flex-col items-center gap-10">
      <h2 className="text-2xl text-[#020C29] dark:text-white  font-bold mb-2">Drive Your Dreams: Premium Car Rentals</h2>
      <p className="text-[#020C29 text-[#020C29] dark:text-white text-center">Since our inception, we have been dedicated to offering a diverse range of high-quality vehicles to meet the unique needs of our clients. From luxury sedans and SUVs to eco-friendly hybrids and sports cars, our fleet is meticulously maintained to ensure safety, comfort, and style. Our legacy is built on the trust and loyalty of our customers, who return to us time and again for their travel needs.</p>
    </div>
  </div>
);
};

export default Banner;