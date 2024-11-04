import React, { useState } from 'react';
import Image from 'next/image'
import logo from "../app/assets/vartha_logo.png"
import "./left_section.css"

export default function Left_section() {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const items = [
      { img: "/note1.png", title: 'Learn' },
      { img: "/note1.png", title: 'Retain' },
      { img: "/note1.png", title: 'Grow' },
    ];

    return (
    <div className='left_div flex flex-col justify-between'>
      <nav className='left_nav'>
        <div className="flex flex-row justify-between items-center" style={{width: "7.5vw"}}>
          <Image src={logo} alt="head" style={{height: "5vw", width: "5vw", borderRadius: "50%"}}></Image>
          <h4 style={{fontFamily: "'libre-caslon-text', sans-serif"}}>vartha.ai</h4>
        </div>
      </nav>
      <div className="overflow-hidden h-fit">
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
      <div className="flex justify-start mt-4 ml-4 absolute bottom-0 dot_nav_left">
        {items.map((item, index) => (
            <div onClick={() => setCurrentIndex(index)} className='cursor-pointer' key={index}>

                <button
                className={`w-[9vw] h-0.5 rounded-full transition-all ${
                    currentIndex === index ? 'bg-gray-800 w-5' : 'bg-gray-300'
                }`}
                />
                <p className={`text-xs text-center w-[5vw] transition-all ${
                currentIndex === index ? 'text-gray-800 w-5' : 'text-gray-300'
                }`}>{item.title}</p>
            </div>
        ))}
      </div>
    </div>
  )
}
