import React from 'react'
import {FiCoffee} from "react-icons/fi"
import {BiTimeFive} from "react-icons/bi"
import {MdOutlineCloudDone} from 'react-icons/md'
import {IoIosCodeWorking} from 'react-icons/io'
const Extras = () => {
  return (
    <div className='allright extras' id='fifth'>
        <ul className="section">
            <li>
                <div className="icons flex">
                    <FiCoffee />
                </div>
                <div className="qty flex">
                    2234
                </div>
                <div className="des flex">
                    Cups of Coffee
                </div>
            </li>
            <li>
                <div className="icons flex">
                    <BiTimeFive />
                </div>
                <div className="qty flex">
                    2160
                </div>
                <div className="des flex">
                    Hours of learning
                </div>
            </li>
            <li>
                <div className="icons flex">
                    <MdOutlineCloudDone />
                </div>
                <div className="qty flex">
                    1
                </div>
                <div className="des flex">
                    Project completed
                </div>
            </li>
            <li>
                <div className="icons flex">
                    <IoIosCodeWorking />
                </div>
                <div className="qty flex">
                    2
                </div>
                <div className="des flex">
                    Still working
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Extras