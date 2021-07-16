import { useState } from "react";
import Tape from "../tape/tape";

export default function CasseteCase() {
  const [open, setOpen] = useState(false);

  return (
    <div className="cassete-case">
      <div
        className={`case-cover ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <p class="case-title">Odisséia Rádio-Espacial</p>
      </div>
      <div
        className={`case-cover-back ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      ></div>
      <div className="back-cover"></div>
      <div className="tape-container">
        <Tape />
      </div>
    </div>
  );
}
