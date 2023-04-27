import React from "react";
import Skills from "./Skills";

const Fourth = () => {
  return (
    <div className="fourth allright" id="fourth">
      <div className="heading">Programming skills</div>
      <hr className="line" />
      <div className="skills">
        <ul className="list">
          <li>
            <div className="outer ast">
              <div className="inner">8/10</div>
            </div>
            <div className="name">C / C++</div>
          </li>
          <li>
            <div className="outer dst">
              <div className="inner">9/10</div>
            </div>
            <div className="name">Html / Css</div>
          </li>
          <li>
            <div className="outer bst">
              <div className="inner">7/10</div>
            </div>
            <div className="name">JavaScript</div>
          </li>
          <li>
            <div className="outer cst">
              <div className="inner">8/10</div>
            </div>
            <div className="name">mongoDb / SQL</div>
          </li>
        </ul>
        <div className="rating">
          <div className="dot"></div>
          <p>1 - 5 Basics </p>
          <div className="dot"></div>
          <p>6 - 8 intermediate</p>
          <div className="dot"></div>
          <p>9 - 10 Advance</p>
        </div>
        </div>
    </div>
  );
};

export default Fourth;
