import { useState } from "react";

const faces = ["neutral", "smile", "sad", "scream", "whistling"];

export default function Mic() {
  const [casseteOpen, setCasseteOpen] = useState(false);
  const [faceIndex, setFaceIndex] = useState(0);
  const buttonToggle = (e) => {
    e.target.className =
      e.target.className.indexOf("pushed") > -1
        ? "mic-button"
        : "mic-button pushed";
    setFaceIndex(faceIndex === faces.length ? 0 : faceIndex + 1);
  };

  const casseteOpenClose = () => {
    setCasseteOpen(!casseteOpen);
  };

  return (
    <div className="mic">
      <div className="button-container">
        <div className="mic-button" onClick={buttonToggle}></div>
        <div className="mic-button" onClick={buttonToggle}></div>
        <div className="mic-button" onClick={buttonToggle}></div>
      </div>

      <div className="radio-body">
        <div className="orange-body"></div>

        <div className="side-stripes-container">
          <div className="side-stripes"></div>
          <div className="side-stripes"></div>
          <div className="side-stripes"></div>
        </div>

        <div className="body-cassete-container">
          <div className="body-cassete-desk"></div>
        </div>

        <div className="radio-bottom">
          <div className="orange"></div>
          <div className="dark-orange"></div>
          <div className="gray"></div>
        </div>
      </div>

      <div
        className={`cassete-container ${casseteOpen ? "open" : ""}`}
        onClick={casseteOpenClose}
      >
        <div className="cassete-overlay"></div>
        <div className="cassete-desk">
          <div className="mic-eyes left-eye" />
          <div className="mic-eyes right-eye" />
          <div className={`mic-mouth ${faces[faceIndex]}`} />
        </div>
      </div>
    </div>
  );
}
