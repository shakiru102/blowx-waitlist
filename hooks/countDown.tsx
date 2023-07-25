import React, { useEffect, useState } from 'react'

const countDown = () => {

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
   
      useEffect(() => {
        const interval = setInterval(() => {
          const targetDate = new Date("2023-08-04"); // Set your target date here
          const now = new Date();
        //   @ts-ignore
          const timeDifference = targetDate - now;
   
          if (timeDifference <= 0) {
            clearInterval(interval);
          } else {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
              (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
              (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
   
            setCountdown({ days, hours, minutes, seconds });
          }
        }, 1000);
   
        return () => {
          clearInterval(interval);
        };
      }, []);

  return countdown
}

export default countDown
