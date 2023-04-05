// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countM: 0, countB: 0}

  eatMango = () => {
    this.setState(prevState => ({countM: prevState.countM + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({countB: prevState.countB + 1}))
  }

  render() {
    const {countM, countB} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="counter">{countM}</span> mangoes
            <span className="counter">{countB}</span> bananas
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
            alt="mango"
          />{' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
            alt="banana"
          />
          <div>
            <button className="btn" onClick={this.eatMango}>
              Eat Mango
            </button>
            <button className="btn" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
