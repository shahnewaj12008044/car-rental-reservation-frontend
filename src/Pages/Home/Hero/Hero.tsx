import car1 from '../../../assets/pictures/carbanner/car1.jpg'
import car2 from '../../../assets/pictures/carbanner/car2.jpg'

import car4 from '../../../assets/pictures/carbanner/car4.jpg'
import car5 from '../../../assets/pictures/carbanner/car5.jpg'
import car6 from '../../../assets/pictures/carbanner/car6.jpg'
import car7 from '../../../assets/pictures/carbanner/car7.jpg'
import car8 from '../../../assets/pictures/carbanner/car8.jpg'
import car9 from '../../../assets/pictures/carbanner/car-9.jpg'
import car10 from '../../../assets/pictures/carbanner/car-10.jpg'
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel"
import SearchBar from './SearchBar/SearchBar'
import { useState } from 'react'
import { useGetAllCarsQuery } from '@/redux/features/Car/carApi'
import CarCard from '@/components/shared/CarCard'
import { TCar } from '@/redux/features/Car/carSlice'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { FaArrowRight } from "react-icons/fa";


 const Hero =() => {
    const banner = [
        { index: 0, image: car1 },
        { index: 1, image: car2 },
        { index: 2, image: car4 },
        { index: 3, image: car5 },
        { index: 4, image: car6 },
        { index: 5, image: car7 },
        { index: 6, image: car8 },
        { index: 7, image: car9 },
        { index: 8, image: car10 }
      ]
      
      
  const [location, setLocation] = useState('')
  // console.log(location)

  const {data:carsData} = useGetAllCarsQuery([{name:'location',value:location}])
  console.log(carsData?.data)
      
  return (
  <div className='flex flex-col items-center gap-8'>
      <Carousel
    plugins={[
        Autoplay({
          delay:3000,
          
        }),
        Fade({}),
     
      ]}
    opts={{
        containScroll:false,
        loop: true,
      }} className="w-full h-3/4">
      <CarouselContent>
        {banner?.map((item, index) => (
          <CarouselItem key={index}>
            <div className="h-full">
              <Card className='h-full'>
                <CardContent className="flex relative  items-center py-2 justify-center h-full">
                <img src={item.image} alt=""  className='aspect-[16/9] w-full h-full object-cover rounded-lg' />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {banner.map((_, index) => (
                        <span
                          key={index}
                          className={`w-3 h-3 rounded-full inline-block ${
                            index === item.index ? "bg-white" : "bg-gray-400"
                          }`}
                        ></span>
                      ))}
                    </div>
                    <div className="hidden md:flex absolute inset-0 items-center justify-center">
                    <SearchBar setLocation = {setLocation}></SearchBar>
                    </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
    <div className="md:hidden  flex justify-center">
        <SearchBar setLocation = {setLocation} />
      </div>

    <div className='grid grid-cols-1 md:grid-cols-3'>
      {carsData?.data?.map((car : TCar)=>(
       <CarCard car = {car}></CarCard>
      ))}
    </div>
    <Link to='/booking' className='flex items-center'><Button className='btn-primary w-96'>Book Now <FaArrowRight  className='ml-2 animate-ping'/></Button></Link>
  </div>
  )
}

export default Hero;