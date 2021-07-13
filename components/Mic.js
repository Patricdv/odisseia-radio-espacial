export default function Mic() {
  const buttonToggle = (e) => {
    e.target.className =
      e.target.className.indexOf("pushed") > -1
        ? "mic-button"
        : "mic-button pushed";
  };

  const casseteOpenClose = (e) => {
    e.target.className =
      e.target.className.indexOf("open") > -1
        ? "cassete-container"
        : "cassete-container open";
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
          <div className="cassete-desk"></div>
        </div>

        <div className="radio-bottom">
          <div className="orange"></div>
          <div className="dark-orange"></div>
          <div className="gray"></div>
        </div>
      </div>

      <div className="cassete-container" onClick={casseteOpenClose}>
        <div className="cassete-desk"></div>
      </div>
    </div>
  );
}
