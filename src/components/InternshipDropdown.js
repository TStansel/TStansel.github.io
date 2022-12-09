import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import "./InternshipDropdown.css";

function InternshipDropdown(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("dropdown__icon");

  const content = useRef(null);

  function toggleDropdown() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "dropdown__icon" : "dropdown__icon rotate"
    );
  }

  return (
    <div className="dropdown__section">
      <button className={`dropdown ${setActive}`} onClick={toggleDropdown}>
        <p className="dropdown__title">{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="dropdown__content"
      >
        {props.content}
      </div>
    </div>
  );
}

export default InternshipDropdown;
