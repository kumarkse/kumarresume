import React from 'react'

const Second = () => {
  return (
    <div className='second allright'> 
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
        I am Bako Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at wordpress. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur quidem, quia a vero illo repellendus magni consequatur nulla suscipit dolorum accusamus! Dolores, non ullam tenetur possimus accusantium eveniet magnam facilis.   
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
      <div ><button className="bttn"><i class="fa-solid fa-phone"></i>Contact me</button></div>
      </div>
      </div>
    </div>
  )
}

export default Second