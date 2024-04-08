import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; // Make sure to create this CSS file

const calculateTimeLeft = (targetDate) => {
  const difference = +targetDate - +new Date();
  
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const CountdownTimer = ({ targetDate, language, className = '' }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearTimeout(timer);
  });

  const units = {
    days: language === 'chinese' ? '天' : 'Days',
    hours: language === 'chinese' ? '时' : 'Hours',
    minutes: language === 'chinese' ? '分' : 'Minutes',
    seconds: language === 'chinese' ? '秒' : 'Seconds',
  };

  const countdownContainerClassName = `${className} time-square`
  return (
    <div>
        <div className='countdown-title'>COUNTDOWN</div>
        <div className="countdown-container">
            {Object.keys(timeLeft).map((interval, index) => (
                <div key={index} className={countdownContainerClassName}>
                <div className="number">{timeLeft[interval]}</div>
                <div className="text">{units[interval]}</div>
                </div>
            ))}
        </div>
    </div>
    
  );
};

export default CountdownTimer;