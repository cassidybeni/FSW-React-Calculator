import React from 'react'
import "./Buttons.css"

function Buttons(props) {

    const { handleDisplay, handleNegative, handleReset, handleOperation, handleResult } = props

    return (
        <div className="all-buttons">
            <div className="row">
                <button value={0} onClick={handleReset}>A/C</button>
                <button onClick={handleNegative}>+/-</button>
                <button value={"/"} onClick={handleOperation}>/</button>
            </div>
            <div className="row">
                <button value={7} onClick={handleDisplay}>7</button>
                <button value={8} onClick={handleDisplay}>8</button>
                <button value={9} onClick={handleDisplay}>9</button>
                <button value={"*"} onClick={handleOperation}>*</button>
            </div>
            <div className="row">
                <button value={4} onClick={handleDisplay}>4</button>
                <button value={5} onClick={handleDisplay}>5</button>
                <button value={6} onClick={handleDisplay}>6</button>
                <button value={"-"} onClick={handleOperation}>-</button>
            </div>
            <div className="row">
                <button value={1} onClick={handleDisplay}>1</button>
                <button value={2} onClick={handleDisplay}>2</button>
                <button value={3} onClick={handleDisplay}>3</button>
                <button value={"+"} onClick={handleOperation}>+</button>
            </div>
            <div className="row">
                <button value={0} onClick={handleDisplay}>0</button>
                <button value={0} onClick={handleResult}>=</button>
            </div>    
        </div>
    )
}

export default Buttons