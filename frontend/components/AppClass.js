import React from 'react'
import axios from 'axios'

const initialState = {
  coordinate: { 'x': 2, 'y': 2 },
  steps: 0,
  email: '',
  message: '',
}

export default class AppClass extends React.Component {
  state = initialState;

  leftClick = () => {
    if(this.state.coordinate.x > 1) {
      this.setState({ ...this.state,
        steps: this.state.steps + 1,
        coordinate: {...this.state.coordinate,
         "x": this.state.coordinate.x - 1},
         message: '' })
    } else {
      this.setState({ ...this.state, 
        message: "You can't go left" })
    }
  }
  
  rightClick = () => {
    if(this.state.coordinate.x < 3 ) {
      this.setState({ ...this.state,
        steps: this.state.steps +1,
        coordinate: {...this.state.coordinate,
         "x": this.state.coordinate.x + 1},
         message: '' })
    } else {
      this.setState({ ...this.state, 
        message: "You can't go right" })
    }
  }
  
  upClick = () => {
    if(this.state.coordinate.y > 1) {
      this.setState({ ...this.state,
        steps: this.state.steps + 1,
        coordinate: {...this.state.coordinate,
         "y": this.state.coordinate.y - 1},
         message: '' })
    } else {
      this.setState({ ...this.state, 
        message: "You can't go up" })
    }
  }
  
  downClick = () => {
    if(this.state.coordinate.y < 3) {
      this.setState({ ...this.state,
        steps: this.state.steps + 1,
        coordinate: {...this.state.coordinate,
         "y": this.state.coordinate.y + 1},
         message: '' })
    } else {
      this.setState({ ...this.state, 
        message: "You can't go down" })
    }
  }

  clickReset = () => {
    this.setState({
      ...this.state, 
      coordinate: { 'x': 2, 'y': 2 },
    steps: 0,
    email: '', 
    message: '',
    })
  }
  
  
  render() {
    console.log(this.state);
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved 0 times</h3>
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
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button id="left" onClick={this.leftClick}>LEFT</button>
          <button id="up" onClick={this.upClick}>UP</button>
          <button id="right" onClick={this.rightClick}>RIGHT</button>
          <button id="down" onClick={this.downClick}>DOWN</button>
          <button id="reset" onClick={this.clickReset}>reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
