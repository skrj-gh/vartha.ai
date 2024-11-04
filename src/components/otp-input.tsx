import React, { useState, useRef, useEffect } from 'react';

const OTPInput = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(60);
  const [phoneNumber, setPhoneNumber] = useState("");
  
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  setPhoneNumber("+91 98765 43210")
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
    <div className="w-full max-w-md p-4">
      <div className="mb-4 text-gray-600">
        OTP sent to {phoneNumber}. 
        <a href='/join-waitlist' className="text-gray-700 ml-1 cursor-pointer underline">Edit number here</a>
      </div>
      
      <div className="flex gap-4 mb-4">
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
            className="w-12 h-12 text-2xl text-center border-b-2 border-gray-300 focus:border-gray-900 focus:outline-none"
          />
        ))}
      </div>

      {timer===0 ? 
      <div className="text-gray-500 text-sm underline cursor-pointer" onClick={handleResend}>
        Resend OTP
      </div> 
    :
      <div className="text-gray-500 text-sm">
        Resend OTP in {formatTime(timer)} if you haven't received it yet.
      </div>
    }
    </div>
  );
};

export default OTPInput;