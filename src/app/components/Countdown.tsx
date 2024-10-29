"use client";
import { useEffect, useState } from "react";
import { CountdownTimerProps } from "../../../Types/types";
import { TimeLeftTypes } from "../../../Types/types";

const Countdown = ({ targetDate }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeftTypes | null>(null); // Set to null initially

  useEffect(() => {
    // Only run on client side to prevent hydration mismatch
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval
  }, []);

  function calculateTimeLeft(): TimeLeftTypes {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeftTypes = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  if (timeLeft === null) return null; // Prevent rendering until client-side

  const timerComponents: JSX.Element[] = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof TimeLeftTypes]) {
      return;
    }
    timerComponents.push(
      <div
        key={interval}
        className="flex flex-col items-center justify-center bg-white text-[#5a3e2b] rounded-lg p-4 m-2 mb-4"
        style={{ width: "70px", height: "70px" }}
      >
        <span className="text-2xl font-bold">
          {timeLeft[interval as keyof TimeLeftTypes]}
        </span>
        <span className="text-sm uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div className="text-center bg-[#5a3e2b] pt-[2rem] px-2 pb-[0rem] mt-[-6rem] rounded-[30px]">
      <h2 className="text-[1rem] text-white font-bold uppercase">
        Free delivery on orders over $50
      </h2>
      <p className="text-white text-[15px]">Get 10% off on your first order</p>
      <div className="flex justify-center items-center mt-4">
        {timerComponents.length ? (
          <div className="flex space-x-4">{timerComponents}</div>
        ) : (
          <span>Offer Expired</span>
        )}
      </div>
    </div>
  );
};

export default Countdown;
