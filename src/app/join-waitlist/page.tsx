"use client";

import Left_section from '@/components/left_section';
import React from 'react'
import Image from 'next/image';
import send_btn from "../assets/send_arrow.png"
import "./join-waitlist.css"

export default function Join_waitlist() {
  return (
    <div className='bg-white flex flex-row join_container'>
      <div className='left_section'>
        <Left_section/>
      </div>
      <div className='right_section'>
        <h3>Join the Waitlist</h3>
        <h2>Get free premium <br />access for a year!</h2>
        <div className="input-container">
          <span className="country-code">+91</span>
          <input type="text" placeholder="Enter your number..."/>
          <button className="send-button">
            <Image src={send_btn} alt="Send" style={{width: "2vw", height:"2vw"}}/>
          </button>
        </div>
        <p>You&apos;ll be recieving a code on this number!</p>
        <a href="/verify-otp"><button className='flex flex-row items-center gap-3 cont_btn'>
          Continue
          <Image src={send_btn} alt='send' width={25}></Image>
        </button></a>
      </div>
    </div>
  )
}
