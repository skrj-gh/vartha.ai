"use client";

import Left_section from '@/components/left_section';
import React from 'react'
import Image from 'next/image';
import "./verify-otp.css"
import OTPInput from '@/components/otp-input';
import close from "../app/assets/close.svg"
import arrow from "../app/assets/continue_arrow.svg"

export default function Verify_otp({ phone, onClose }: any) {
  return (
    <div className='bg-white flex flex-row verify_section'>
      <button className='close-btn' onClick={onClose}>
        <Image src={close} alt='close' className='cursor-pointer' width={20}/>
      </button>
      <div className='left_section'>
        <Left_section/>
      </div>
      <div className='right_section'>
        <h3>Join the Waitlist</h3>
        <h2>Get free premium <br />access for a year!</h2>
        <div className="otp-container">
          <OTPInput 
            phone = {phone}
            onClose = {onClose}
          />
        </div>
        <a href="/questions"><button className='flex flex-row items-center gap-3 cont_btn'>
          Verify OTP
          <Image src={arrow} alt='send' width={25}></Image>
        </button></a>
      </div>
    </div>
  )
}