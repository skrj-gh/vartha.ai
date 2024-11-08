import React, { useState, useRef, useEffect } from 'react';
import "../app/verify-otp/verify-otp.css"

const OTPInput = ({phone, onClose}: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);

  const handleOtpSubmit = async () => {
    if (!otp) {
      alert('Please enter the OTP');
      return;
    }

    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, otp }),
      });

      if (response.ok) {
        alert('OTP verified successfully!');
        setOtp(['', '', '', '']);
        onClose(); // Close the modal
      } else {
        alert('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP');
    }
  };
  
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value !== '' && index < 3 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && index > 0 && otp[index] === '' && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    
  }

  const formatTime = (seconds: number): string => {
    return `${Math.floor(seconds / 60)}:${(seconds % 60).toString().padStart(2, '0')}`;
  };

  return (
    <div className="pt-[20px]">
      <div className="mb-[12px] edit_phone">
        OTP sent to {phone}. 
        <a href='/join-waitlist' className="ml-1 cursor-pointer underline">Edit number here</a>
      </div>
      
      <div className="flex gap-[8px] mb-[16px]">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={el => {
              inputRefs.current[index] = el;
            }}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-[56px] text-[32px] text-center border-b-2 border-gray-300 focus:border-black focus:outline-none"
          />
        ))}
      </div>

      {timer===0 ? 
      <div className="opacity-70 text-[12px] underline cursor-pointer" onClick={handleResend}>
        Resend OTP
      </div> 
    :
      <div className="opacity-70 text-[12px]">
        Resend OTP in {formatTime(timer)} if you haven't received it yet.
      </div>
    }
    </div>
  );
};

export default OTPInput;