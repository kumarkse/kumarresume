import React from 'react'

const Sixth = () => {
  return (
    <div className="sixth allright">
        <div className="heading">
            Get in Touch
        </div>
        <hr className="line" />

    <div className="section">
        <div className="left">
            <div className="phone">
                <div className="img"><i class="fa-solid fa-phone"></i></div>
                <div className="txt">
                    <p className="bolder">Phone</p>
                    <p>+91 8826077893</p>
                </div>
            </div>
            <div className="email">
                <div className="img"><i class="fa-solid fa-envelope"></i></div>
                <div className="txt">
                    <p className="bolder">Email</p>
                    <p>abhishektiwari200@outlook.com</p>
                </div>
            </div>
            <div className="location">
                <div className="img"><i class="fa-sharp fa-solid fa-location-dot"></i></div>
                <div className="txt">
                    <p className="bolder">Location</p>
                    <p>Ghaziabad , U.P.</p>
                </div>
            </div>
        </div>
        <div className="right">
            <form action="" method="post" className='form'>
                <div className="name">
                <input type="text" name="fname" className='fname' placeholder='first name' />
                <input type="text" name="fname" className='sname' placeholder='first name' />
                </div>
                <div>
                <input type="email" name="email" id="" placeholder='E-mail' className='e-mail' />
                </div>
                <div>
                <input type="text" name="subject" className="subject" placeholder='subject'/>
                </div>
                <textarea name="message" className="message" cols="40" rows="5"></textarea>
                <div>
                <button type="submit" className='buton'><i class="fa-solid fa-cloud-arrow-up"></i>Send message</button>
                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Sixth