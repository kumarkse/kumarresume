import React from 'react'
import {FiCoffee} from "react-icons/fi"
import {BiTimeFive} from "react-icons/bi"
const Extras = () => {
  return (
    <div className='allright extras'>
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
                    <FiCoffee />
                </div>
                <div className="qty flex">
                    2234
                </div>
                <div className="des flex">
                    Cups of Coffee
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Extras