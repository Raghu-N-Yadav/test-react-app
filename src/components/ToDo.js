import React, { useState } from "react";


export default function TicTac(props) {
    const [value, setValue] = useState('Play The Game')
    const [inner, setInner] = useState('')
    let isTrue = true
    const lines = [11, 12, 13, 14, 15, 16, 17, 18, 19]

    const startAgain = () => {
        window.location.reload(false);
    }

    const winner = (val) => {
        if (((lines[0] === lines[2] && lines[1] === lines[2]) ||
            (lines[3] === lines[5] && lines[4] === lines[5]) ||
            (lines[6] === lines[8] && lines[7] === lines[8]) ||
            (lines[0] === lines[6] && lines[3] === lines[6]) ||
            (lines[1] === lines[7] && lines[4] === lines[7]) ||
            (lines[2] === lines[8] && lines[5] === lines[8]) ||
            (lines[0] === lines[8] && lines[4] === lines[8]) ||
            (lines[2] === lines[6] && lines[4] === lines[6]))) {
            setValue(`Winner is ${val}`)
            setInner(true)
        }
    }
    const handleClick = ({ target }) => {

        if (isTrue === true) {
            target.innerText = 'X'
            target.disabled = true
            target.style.backgroundColor = 'black'
            isTrue = false
            lines[target.value] = 0
            winner('Player x')
        } else {
            target.innerText = 'O'
            target.disabled = true
            isTrue = true
            target.style.backgroundColor = 'grey'
            lines[target.value] = 1
            winner('Player O')
        }
    }
    const makeSquare = (i, isTrue) => {
        return (<button disabled={inner} value={i} onClick={handleClick} className="btn"></button>)
    }
    return (
        <div className="gameArea">
            <div className='spanDiv'>
                <span className='span'>{value}</span>
            </div>
            <div>
                {makeSquare(0)}
                {makeSquare(1)}
                {makeSquare(2)}
            </div>
            <div>
                {makeSquare(3)}
                {makeSquare(4)}
                {makeSquare(5)}
            </div>
            <div>
                {makeSquare(6)}
                {makeSquare(7)}
                {makeSquare(8)}
            </div>
            <button className='again' onClick={startAgain}>Start Again</button>

        </div>
    );
}