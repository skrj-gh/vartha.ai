"use client";

import Left_section from '@/components/left_section';
import React from 'react'
import Image from 'next/image';
import send_btn from "../assets/send_arrow.png"
import "./questions.css"
import Questionnaire from '@/components/questionnaire';
import close from "../assets/close.svg"

export default function Questions() {
  return (
    <div className='bg-white flex flex-row ques_section'>
      <button className='close-btn'>
        <Image src={close} alt='close' className='cursor-pointer' width={20}/>
      </button>
      <div className='left_section'>
        <Left_section/>
      </div>
      <div className='right_section'>
        <h3>One last step!</h3>
        <h2>Get free premium <br />access for a year!</h2>
        <Questionnaire/>
        <a href="https://www.google.com"><button className='flex flex-row items-center gap-3 cont_btn'>
          Continue
          <Image src={send_btn} alt='send' width={25}></Image>
        </button></a>
      </div>
    </div>
  )
}
