// Countdown.jsx
import { useEffect, useState } from 'react';
import './Timer.css'; // Ensure this import is correct

export default function Countdown ()  {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasEventPassed, setHasEventPassed] = useState(false);

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      eventMonth = "10",
      eventDay = "05",
      eventDate = `${eventMonth}/${eventDay}/${yyyy}`;

    if (today > new Date(eventDate)) {
      eventDate = `${eventMonth}/${eventDay}/${nextYear}`;
    }

    const countDown = new Date(eventDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime(),
        distance = countDown - now;

      if (distance < 0) {
        setHasEventPassed(true);
        clearInterval(interval);
      } else {
        setTime({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container countdown-body">
      <h2 className="countdown-title">Save the date(Oct 5th)</h2>
      {hasEventPassed ? (
        <h3>The event has passed!</h3>
      ) : (
        <div id="countdown">
          <div className="countdown-item">
            <span>{time.days}</span>
            <label>Days</label>
          </div>
          <div className="countdown-item">
            <span>{time.hours}</span>
            <label>Hours</label>
          </div>
          <div className="countdown-item">
            <span>{time.minutes}</span>
            <label>Minutes</label>
          </div>
          <div className="countdown-item">
            <span>{time.seconds}</span>
            <label>Seconds</label>
          </div>
        </div>
      )}
      <div id="content" style={{ display: hasEventPassed ? 'block' : 'none' }}>
        {/* Additional content to display after the countdown */}
      </div>
    </div>
  );
};


