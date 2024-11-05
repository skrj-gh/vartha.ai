import React, { useState } from 'react';
import Image from 'next/image';
import "./notes.css"

const NotesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const items = [
    { img: "/note1.png", title: 'Self updating notes' },
    { img: "/note1.png", title: 'Self updating notes' },
    { img: "/note1.png", title: 'Self updating notes' },
    { img: "/note1.png", title: 'Self updating notes' },
  ];

  // const scroll = (direction: string) => {
  //   if (direction === 'left') {
  //     setCurrentIndex(prev => Math.max(prev - 1, 0));
  //   } else {
  //     setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
  //   }
  // };

  return (
    <div className="relative w-fit mx-auto notes_sect">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${currentIndex * (window.innerWidth >= 1200 ? -100 : -94)}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-none w-full notes_cont"
            >
              <div className="bg-white rounded-lg flex flex-col note_cont">
                <Image src={item.img} alt={item.title} width={200} height={200} className="note_img"></Image>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-between dot_nav">
        {items.map((item, index) => (
            <div onClick={() => setCurrentIndex(index)} className='cursor-pointer' key={index}>
                <button
                className={`w-[224px] h-0.5 rounded-full transition-all ${
                    currentIndex === index ? 'bg-[#2D2F3C]' : 'bg-[#2D2F3C] opacity-40'
                }`}
                />
                <p className={`text-xs text-start w-[224px] transition-all ${
                currentIndex === index ? 'text-[#2D2F3C]' : 'text-[#2D2F3C] opacity-40'
                }`}>{item.title}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default NotesCarousel;