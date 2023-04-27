import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Second = () => {
  return (
    <BrowserRouter>
    <div className='second allright' id='second'> 
    <div className="heading">
      About Me
    </div>
    <hr className="line" />
    <div className="content">
      <div className="img">
      </div>

      <div className="data">
        <p className="title">
          Hello,
        </p>
        <p className="para">
        I am Kumar Abhishek, web developer from Delhi , India. I have rich experience in web site design and building and customization, also I am good at wordpress.  I've honed my skills in both front-end and back-end development, working with a variety of programming languages and frameworks.
        Currently aiming to pursue career in Data Science.
        </p>
        <p className="detail">
          <ul className="lefty">
            <li className="dark">Name : <span className="light">Kumar Abhishek</span></li>
            <li className="dark">Age : <span className="light">19</span></li>
            <li className="dark">D.O.B : <span className="light">11 jan 2004</span></li>
          </ul>
          <ul className="lefty ">
            <li className="dark">Residence : <span className="light">India</span></li>
            <li className="dark">Address: <span className="light">Ghaziabad</span></li>
            <li className="dark">E-mail: <span className="light">abhishektiwari2100@gmail.com</span></li>
          </ul>
        </p>
        <HashLink to="#sixth" smooth>
      <div >
        <button className="bttn"><i class="fa-solid fa-phone"></i>Contact me</button>
        </div>
        </HashLink>
      </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default Second