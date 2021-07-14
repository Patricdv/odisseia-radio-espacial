import { useState } from "react";

export default function Cassete() {
  const [cassetePlay, setCassetePlay] = useState(false);
  const handleClick = () => {
    setCassetePlay(!cassetePlay);
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      height={250}
      className={`cassete ${cassetePlay ? "cassete-play" : ""}`}
      enableBackground="new 0 0 480 480"
      version="1.1"
      viewBox="0 0 480 480"
      xmlSpace="preserve"
      onClick={handleClick}
    >
      <path
        fill="#3f4a4c"
        fillOpacity="1"
        strokeWidth="1"
        d="M479.957 356.932c0 17.095-13.6 30.933-30.4 30.933h-419.2c-16.8 0-30.4-13.838-30.4-30.933V109.465c0-17.094 13.6-30.933 30.4-30.933h418.4c16.8 0 30.4 13.839 30.4 30.933z"
      ></path>
      <path
        fill="#2d3838"
        fillOpacity="1"
        strokeWidth="1"
        d="M0 110c0-17.079 13.62-30.904 30.445-30.904H449.47c16.825 0 30.445 13.825 30.445 30.904v248.045c0 17.079-13.09 29.955-29.915 29.955"
      ></path>
      <path
        fill="#e1be35"
        fillOpacity="1"
        strokeWidth="1"
        d="M445.021 331.293c0 13.534-11.617 24.49-25.967 24.49H60.988c-14.35 0-25.967-10.956-25.967-24.49v-195.91c0-13.534 11.617-24.49 25.967-24.49H418.37c14.35 0 25.967 10.956 25.967 24.49z"
      ></path>
      <path
        fill="#dea41e"
        fillOpacity="1"
        strokeWidth="1"
        d="M35.284 131.882c2-11 11.324-21.484 25.696-21.484h357.916c14.372 0 25.926 10.945 26.006 24.465.12 20.137.126 185.137.123 197.145-.004 15.992-16.004 24.08-25.004 23.992l-22.16-.218"
      ></path>
      <path
        fill="#636e70"
        d="M369.6 383.2l-40-62.4c-1.6-2.4-4-3.2-6.4-3.2H156.8c-2.4 0-4.8 1.6-6.4 3.2l-40.8 64c-1.6 2.4-1.6 5.6 0 8 1.6 2.4 4 4 6.4 4h248c4 0 7.2-3.2 7.2-7.2.8-3.2 0-4.8-1.6-6.4z"
      ></path>
      <path
        fill="#3f4a4c"
        d="M329.6 348.8c-1.6-2.4-4-3.2-6.4-3.2H156.8c-2.4 0-4.8 1.6-6.4 3.2L120 396h240z"
      ></path>
      <g fill="#c8b7b7">
        <circle cx="184" cy="348.8" r="8"></circle>
        <circle cx="240" cy="348.8" r="8"></circle>
        <circle cx="296" cy="348.8" r="8"></circle>
      </g>
      <path
        fill="#c8b7b7"
        d="M277.6 233.199c0 6.4-5.6 12-12 12h-51.2c-6.4 0-12-5.6-12-12s5.6-12 12-12h51.2c7.2 0 12 5.6 12 12z"
      ></path>
      <circle cx="114.976" cy="240.399" r="38.4" fill="#999"></circle>
      <circle cx="114.977" cy="225.999" r="38.4" fill="#ccc"></circle>
      <circle cx="364.976" cy="240.399" r="38.4" fill="#999"></circle>
      <circle cx="364.976" cy="225.999" r="38.4" fill="#ccc"></circle>
    </svg>
  );
}
