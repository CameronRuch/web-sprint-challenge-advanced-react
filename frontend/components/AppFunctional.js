import React, { useState } from 'react'
import axios from 'axios';

export default function AppFunctional(props) {

  // states

    const [coordinate, setCoordinate] = useState({ "x": 2, "y": 2 });
    const [steps, setSteps] = useState(0);
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


  // hooks

  const leftClick = () => {
    if (coordinate.x > 1) {
      setSteps(steps + 1)
      setCoordinate({
        ...coordinate, "x": coordinate.x - 1
      })
      setMessage('')
    } else {
      setMessage("You can't go right")
    }
  }  
  
  const rightClick = () => {
    if (coordinate.x < 3) {
      setSteps(steps + 1)
      setCoordinate({
        ...coordinate, "x": coordinate.x + 1
      })
      setMessage('')
    } else {
      setMessage("You can't go left")
    }
  }

  const upClick = () => {
    if (coordinate.y < 3) {
      setSteps(steps + 1)
      setCoordinate({
        ...coordinate, "y": coordinate.y + 1
      })
      setMessage('')
    } else {
      setMessage("You can't go up")
    }
  }

  const downClick = () => {
    if (coordinate.y > 1) {
      setSteps(steps + 1)
      setCoordinate({
        ...coordinate, "y": coordinate.y - 1
      })
      setMessage('')
    } else {
      setMessage("You can't go down")
    }
  }

  const resetClick = () => {
    setSteps(0)
    setCoordinate({ "x": 2, "y": 2 })
    setEmail('')
    setMessage('')
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newPost = { "x": coordinate.x , "y": coordinate.y, "steps": steps, "email": email }
    axios.post('http://localhost:9000/api/result', newPost)
    .then( res => {
      setMessage(res.data.message)
    })
    .catch(err => setMessage(err.response.data.message))
  }

  const onChange = (e) => {
    const { value } = e.target
    setEmail(value)
  }


  return (


    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">{`Coordinates (${coordinate.x}, ${coordinate.y})`}</h3>
        <h3 id="steps">You moved {steps} times</h3>
      </div>
      <div id="grid">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square active">B</div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
      </div>
      <div className="info">
        <h3 id="message">{message}</h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={leftClick}>LEFT</button>
        <button id="up" onClick={upClick}>UP</button>
        <button id="right" onClick={rightClick}>RIGHT</button>
        <button id="down" onClick={downClick}>DOWN</button>
        <button id="reset" onClick={resetClick}>reset</button>
      </div>
      <form onSubmit={onSubmit}>
        <input id="email" type="email" placeholder="type email" onChange={onChange} value={email}></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
