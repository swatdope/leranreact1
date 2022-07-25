import React, { useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBowlFood} from '@fortawesome/free-solid-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import { faMicrophone} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'

const Navbar = (props) => {
    // const [style, setStyle] = useState({
    //     backgroundColor: "#003580",
    //     color: "black"
    // })
    // const handleChange = () => {
    //     if (style.backgroundColor !== "white") {
    //         setStyle({
    //             backgroundColor: "#232",
    //             color: "white;"
    //         })
    //     } else {
    //         setStyle({
    //             backgroundColor: "whitesmoke",
    //             color: "black"
    //         })
    //     }
    // }
    return (
        <div className="navbar">
            <div className="navList"  >
                <div className="navLeft">
                    <FontAwesomeIcon className="icons" icon={faBars}  />
                    <FontAwesomeIcon className="icons" icon={faBowlFood}  />
                    <h4>Youtube</h4>
                    </div>
                    <div className="navMiddle">
                         <input type="text" placeholder="search" />
                         <FontAwesomeIcon className="iconsSearch"  icon={faSearch} />
                         <FontAwesomeIcon className="icons" icon={faMicrophone} />
                    </div>
                <div className="navRight">
                <FontAwesomeIcon icon={faSearch} clasName="searchIcon" />
                <FontAwesomeIcon icon={faSearch} clasName="searchIcon" />
                <FontAwesomeIcon icon={faSearch} clasName="searchIcon" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
