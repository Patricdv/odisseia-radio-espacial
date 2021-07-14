import { useState } from "react";

const faces = ["neutral", "talk", "smile", "sad", "scream", "whistling"];

export default function Mic() {
  const [casseteOpen, setCasseteOpen] = useState(false);
  const [faceIndex, setFaceIndex] = useState(0);
  const [buttonPressed, setButtonPressed] = useState([
    false,
    false,
    false,
    false,
  ]);

  const buttonToggle = (index) => {
    const newButtonPressed = [false, false, false, false];
    newButtonPressed[index] = true;
    if (index === 0) {
      newButtonPressed[1] = true;
    }

    setButtonPressed(newButtonPressed);
    setFaceIndex(faceIndex === faces.length ? 0 : faceIndex + 1);
  };

  const casseteOpenClose = () => {
    setCasseteOpen(!casseteOpen);
  };

  return (
    <div className="mic">
      <div className="button-container">
        <div
          className={`mic-button red-button ${
            buttonPressed[0] ? "pressed" : ""
          }`}
          onClick={() => buttonToggle(0)}
        ></div>
        <div
          className={`mic-button gray-button ${
            buttonPressed[1] ? "pressed" : ""
          }`}
          onClick={() => buttonToggle(1)}
        ></div>
        <div
          className={`mic-button gray-button ${
            buttonPressed[2] ? "pressed" : ""
          }`}
          onClick={() => buttonToggle(2)}
        ></div>
        <div
          className={`mic-button gray-button ${
            buttonPressed[3] ? "pressed" : ""
          }`}
          onClick={() => buttonToggle(3)}
        ></div>
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
