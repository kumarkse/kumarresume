import React from 'react'
const Firstintro = () => {
  return (
    <>
    <div className='allright' id="first">
        <div className="firstintro">
          <div className="leftside">
          <p className="n1 bolder">Hi i'm</p>
          <p className="n2 bolder">Kumar Abhishek</p>
          <p className="n3 bolder">I Am A Passionate Developer</p>
          <p className="n4">I design and develop services for all sizes, specializing in creating stylish, modern websites and web services. Proficient in HTML, CSS, JavaScript, and other front-end technologies.
Skilled in developing responsive and mobile-friendly websites. Passion for staying up-to-date with the latest web development trends and technologies.
</p>
          <div className="button">
          <a target = '_blank' href='https://drive.google.com/file/d/180tNHloSmYyGdAldc9HkTD56mvlwaobS/view?usp=sharing' download='kumar_resume'><button className="cvbtn"><i class="fa-solid fa-download"></i>View Resume</button></a>
          {/* <button className="hirebtn cvbtn"><i class="fa-solid fa-download"></i>Hire-me</button> */}
          </div>
            
          </div>
          <div className="rightside">
            <div className="img"></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Firstintro