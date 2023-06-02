import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import {CiShoppingCart} from 'react-icons/ci'
import {CgMenu,CgClose} from 'react-icons/cg'

const Navbaar = () => {
  const [menu,setMenu] = useState();
  const stile ={"display":"none"};
  const nulled ={"display":"inline-block"};
  return (
    <>
    <div className="mobile-navbar-btn " >
    <div className="img"></div>
    <div className="name">BONJOUR !!</div>
          <CgMenu name="nav-open" className="open" style={menu? stile: nulled}
            onClick={() => setMenu(true)}
            />
          <CgClose name='nav-close' className='close' style={menu? nulled:stile}
            onClick={() => setMenu(false)}
            />
        </div>
        {/* ---------------------------[above iss mobile navbaar------------------------------------] */}
            <BrowserRouter>
    <div className={menu ? "active navbaar " : "navbaar"}>
    <div className="img"></div>
    <div className="name">KUMAR ABHISHEK</div>
    <div className="position">Web Developer </div>
    <div className="navlink">
      <ul>
        <HashLink to="#first"  onClick={() => setMenu(false)}><li><i class="fa-solid fa-house"></i>Home</li></HashLink>
        <HashLink to="#second" onClick={() => setMenu(false)}><li><i class="fa-solid fa-user"></i>About</li></HashLink>
        <HashLink to="#third" onClick={() => setMenu(false)}><li><i class="fa-solid fa-landmark"></i>Education</li></HashLink>
        <HashLink to="#fourth" onClick={() => setMenu(false)}><li><i class="fa-solid fa-briefcase"></i>Programming-Skills</li></HashLink>
        {/* <HashLink to="#fifth" onClick={() => setMenu(false)}><li><i class="fa-solid fa-folder"></i>Projects</li></HashLink> */}
        <HashLink to="#sixth" onClick={() => setMenu(false)}><li><i class="fa-solid fa-phone"></i>Contact</li></HashLink>
      </ul>
    </div>
    <div className="social" >
    <a target="_blank" href="https://github.com/kumarkse"><i class="fa-brands fa-github"></i></a>
    <a target="_blank" href="https://www.instagram.com/k.u.m.aa.r/"><i class="fa-brands fa-instagram"></i></a>
    <a target="_blank" href="https://www.linkedin.com/in/abhishektiwari2100/"><i class="fa-brands fa-linkedin"></i></a>
    <a target="_blank" href="https://wa.me/8826077893"><i class="fa-brands fa-whatsapp"></i></a>
    </div>

    </div>
    </BrowserRouter>
    </>
  )
}

export default Navbaar