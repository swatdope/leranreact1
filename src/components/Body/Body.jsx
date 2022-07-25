import React, { useState } from 'react'
import './body.css'


const Body = (props) => {

    const handleOnChange = (e) => {
        setText(e.target.value)

    }
    const handleUpperCase = (e) => {
        let newText = text.toUpperCase()
        setText(newText)
    }

    const [myStyle, setMyStyle] = useState({
        color: "white",
        backgroundColor: "black",
    })

    const handleLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const toggleColor = () => {
        if (myStyle.color === "white") {
            setMyStyle({
                color: "black",
                backgroundColor: "white"
            })
        } else {
            setMyStyle({
                color: "wh",
                backgroundColor: "black"
            })
        }
    }

    const [text, setText] = useState("initial Value")
    // const [mode setMode] = useState({
        
    // })
    const [increase, setIncrease] = useState(0)

    const increased = () => {
        setIncrease(increase + 1)
    }
    // const decreased = () => {
    //     increase !== 0 ? setIncrease(increase - 1)
    // }
    const decreased = () => {
         setIncrease(increase - 1)
    }
    const increasedAsync = () => {
        setTimeout(() => {
            setIncrease((prevNumber) => 
                prevNumber + 1
            )
        }, 2000)
    }

    return (
            <div className="body">
                <div className="bodyText">
                <div className="textInput">
                    <input className="text" style={myStyle} value={text} onChange={handleOnChange} type="text" placeholder="Search for" />
                </div>
                <div className="textPreview">
                    <p > {text}  </p>
                </div>
                <div className="textBtn">
                    <button className="upperCase" onClick={handleUpperCase} >UpperCase</button>
                    <button className="upperCase" onClick={handleLowerCase} >LowerCase</button>
                    <button onClick={toggleColor} className="WhiteMode">ColorMode</button>
                    <button className="increase" onClick={increased} >Increase</button>
                    <h1> {increase} </h1>
                    <button className="increase" onClick={decreased} >Decrease</button>
                    <button className="increase" onClick={increasedAsync} >AsyncIncreased</button>
                    
                </div>
                </div>
            </div>
    )
}

export default Body