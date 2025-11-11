import "../css/countdownsection.css";
import Countdown from "react-countdown";

interface CountdownRendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const pad = (num: number) => {
  return String(num).padStart(2, "0");
};

const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: CountdownRendererProps) => {
  if (completed) {
    return <span>It's release day!!!</span>;
  } else {
    return (
      <div className="countdown-container">
        <div className="countdown-timer">
          <h1>{pad(days)}</h1>
          <span>Days</span>
        </div>
        <div className="colon-wrapper">
          <h1>:</h1>
        </div>
        <div className="countdown-timer">
          <h1>{pad(hours)}</h1>
          <span>Hours</span>
        </div>
        <div className="colon-wrapper">
          <h1>:</h1>
        </div>
        <div className="countdown-timer">
          <h1>{pad(minutes)}</h1>
          <span>Minutes</span>
        </div>
        <div className="colon-wrapper">
          <h1>:</h1>
        </div>
        <div className="countdown-timer">
          <h1>{pad(seconds)}</h1>
          <span>Seconds</span>
        </div>
      </div>
    );
  }
};

const CountdownSection = () => {
  // const targetDate = new Date("2025-11-08T12:50:10");
  const targetDate = new Date("2026-11-19T00:00:00");

  return <Countdown date={targetDate} renderer={renderer} />;
};

export default CountdownSection;
