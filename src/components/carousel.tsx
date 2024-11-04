import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import "./carousel.css"
import person1 from "../app/assets/person1.png"
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      author: "Ratnambari",
      rating: 5,
      text: "I've covered all my weak areas in the past 2 months of using vartha, that I couldn't in the past 2 years of study.",
      badge: "Mains Aspirant"
    },
    {
      author: "Ratnambari",
      rating: 5,
      text: "I've covered all my weak areas in the past 2 months of using vartha, that I couldn't in the past 2 years of study.",
      badge: "Prelims Aspirant"
    }
  ];

  return (
    <div className="carousel_container">
      {/* Carousel container */}
      <div className="overflow-hidden">
        <div 
          className="flex testimonial_cont transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 50}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 cursor-pointer carousel_element"
              onClick={() => setCurrentSlide(index)}
            >
                <div className='flex items-center gap-[16px] testimonial_head'>
                  <div className="flex items-center gap-[8px] bg-white w-fit p-[8px] rounded-[6px]">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                      {/* Avatar placeholder */}
                          <Image src={person1} alt="person1"></Image>
                      </div>
                      <span className="font-medium">{testimonial.author}</span>
                  </div>
                  <span>says</span>
                </div>
                
                {/* Star rating */}
                <div className="flex gap-1 p-[8px] mt-[16px] mb-[8px]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">★</span>
                    ))}
                </div>

                {/* Testimonial text */}
                <p className="mb-[20px] testimonial_text">"{testimonial.text}"</p>

                {/* Badge */}
                <div className="flex flex-row gap-[8px] items-center px-[20px] py-[12px] rounded-full border-2 border-gray-400 text-[20px] text-gray-600 bg-[#F9F5F5] w-[220px] justify-center">
                    {testimonial.badge}
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
            </div>
          ))}
        </div>
      </div>

        {/* Slide indicators */}
        {/* <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-gray-800' : 'bg-gray-300'
                }`}
            />
            ))}
        </div> */}
    </div>
  );
};

export default TestimonialCarousel;