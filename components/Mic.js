export default function Mic() {
  const toggleClass = (e) => {
    e.target.className =
      e.target.className.indexOf("pushed") > -1
        ? "mic-button"
        : "mic-button pushed";
  };

  return (
    <div className="mic">
      <div className="button-container">
        <div className="mic-button" onClick={toggleClass}></div>
        <div className="mic-button" onClick={toggleClass}></div>
        <div className="mic-button" onClick={toggleClass}></div>
      </div>

      <div className="radio-body">
        <div className="orange-body"></div>

        <div className="body-cassete-container">
          <div className="cassete-desk"></div>
        </div>

        <div className="radio-bottom">
          <div className="orange"></div>
          <div className="dark-orange"></div>
          <div className="gray"></div>
        </div>
      </div>

      <div className="cassete-container">
        <div className="cassete-desk"></div>
      </div>
    </div>
  );
}
