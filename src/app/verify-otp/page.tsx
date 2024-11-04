"use client";

import Left_section from '@/components/left_section';
import React from 'react'
import Image from 'next/image';
import send_btn from "../assets/send_arrow.png"
import "./verify-otp.css"
import OTPInput from '@/components/otp-input';

export default function Verify_otp() {
  return (
    <div className='bg-white flex flex-row verify_section'>
      <div className='left_section'>
        <Left_section/>
      </div>
      <div className='right_section'>
        <h3>Join the Waitlist</h3>
        <h2>Get free premium <br />access for a year!</h2>
        <div className="otp-container">
          <OTPInput/>
        </div>
        <a href="/premium"><button className='flex flex-row items-center gap-3 cont_btn'>
          Continue
          <Image src={send_btn} alt='send' width={25}></Image>
        </button></a>
      </div>
    </div>
  )
}
