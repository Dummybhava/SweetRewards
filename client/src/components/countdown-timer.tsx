import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate?: Date;
  className?: string;
}

export function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 23
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (targetDate) {
        const now = new Date().getTime();
        const difference = targetDate.getTime() - now;
        
        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
          });
        }
      } else {
        // Demo countdown - counts down from current values
        setTimeLeft(prevTime => {
          let { days, hours, minutes, seconds } = prevTime;
          
          if (seconds > 0) {
            seconds--;
          } else {
            seconds = 59;
            if (minutes > 0) {
              minutes--;
            } else {
              minutes = 59;
              if (hours > 0) {
                hours--;
              } else {
                hours = 23;
                if (days > 0) {
                  days--;
                }
              }
            }
          }
          
          return { days, hours, minutes, seconds };
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className={`grid grid-cols-4 gap-4 ${className}`}>
      <div className="text-center">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="text-3xl lg:text-4xl font-poppins font-bold text-dd-orange">
            {formatNumber(timeLeft.days)}
          </div>
          <div className="text-sm text-dd-brown font-medium">Days</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="text-3xl lg:text-4xl font-poppins font-bold text-dd-orange">
            {formatNumber(timeLeft.hours)}
          </div>
          <div className="text-sm text-dd-brown font-medium">Hours</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="text-3xl lg:text-4xl font-poppins font-bold text-dd-orange">
            {formatNumber(timeLeft.minutes)}
          </div>
          <div className="text-sm text-dd-brown font-medium">Minutes</div>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-white rounded-2xl p-4 shadow-lg">
          <div className="text-3xl lg:text-4xl font-poppins font-bold text-dd-orange">
            {formatNumber(timeLeft.seconds)}
          </div>
          <div className="text-sm text-dd-brown font-medium">Seconds</div>
        </div>
      </div>
    </div>
  );
}
