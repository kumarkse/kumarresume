import React from 'react'

const Navbaar = () => {
  return (
    <>
    <div className="nav ">
    <div className="navbaar">
    <div className="img"></div>
    <div className="name">KUMAR ABHISHEK</div>
    <div className="position">Web Developer</div>
    <div className="navlink">
      <ul>
        <a href="#"><li><i class="fa-solid fa-house"></i>Home</li></a>
        <a href="#"><li><i class="fa-solid fa-user"></i>About</li></a>
        <a href="#"><li><i class="fa-solid fa-landmark"></i>Education</li></a>
        <a href="#"><li><i class="fa-solid fa-briefcase"></i>Resume</li></a>
        <a href="#"><li><i class="fa-solid fa-folder"></i>Projects</li></a>
        <a href="#"><li><i class="fa-solid fa-phone"></i>Contact</li></a>
      </ul>
    </div>
    <div className="social">
    <a target="_blank" href="https://www.facebook.com/9136695725k"><i class="fa-brands fa-facebook"></i></a>
    <a target="_blank" href="https://github.com/kumarkse"><i class="fa-brands fa-github"></i></a>
    <a target="_blank" href="https://www.instagram.com/k.u.m.aa.r/"><i class="fa-brands fa-instagram"></i></a>
    <a target="_blank" href="https://www.linkedin.com/in/abhishektiwari2100/"><i class="fa-brands fa-linkedin"></i></a>
    <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
    </div>

    </div>
    </div>
    </>
  )
}

export default Navbaar