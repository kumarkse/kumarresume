import React from "react";

const Third = () => {
  return (
    <div className="third allright" id="third">
      <div className="heading">Qualification</div>
      <hr className="line" />
      <div className="container">
        <div className="student"></div>
        <div className="timeline">
          <ul>
            <li className="desc">
              <div className="data sec1">
                <h2>Matriculation</h2>
                <p>St teresa School </p>
                <p>ghaziabad </p>
                <p>95.4%</p>
              </div>
              <div className="circles">
                <div className="circle"></div>
                <p>April - 2019</p>
              </div>
            </li>
            <li className="desc">
              <div className="data sec2">
                <h2>Diploma - ECE</h2>
                <p>Pusa Institue Of Technology (PIT) </p>
                <p>New Delhi</p>
                <p>89.2%</p>
              </div>
              <div className="circles">
                <div className="circle"></div>
                <p>2019 - 22</p>
              </div>
            </li>
            <li className="desc">
              <div className="data sec3">
                <h2>Graduation - B-Tech CSE</h2>
                <p><small>University School Of Information and Communication Technology  </small>
                  
                </p>
                <p>New Delhi </p>
                <p>Pursuing</p>
              </div>  
              <div className="circles">
                <div className="circle" style={{background : "#19376D",border:"none"}}></div>
                <p>April - 2019</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Third;
