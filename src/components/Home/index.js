import {Link} from 'react-router-dom'

import './index.css'

import Header from '../Header'

import Context from '../../context/Context'

const Home = () => (
  <Context.Consumer>
    {value => {
      const {status, name, display} = value

      const Register = () => (
        <div className="first_bg">
          <h1 className="home_h1">Welcome to Meetup</h1>
          <p className="home_par">Please register for the topic</p>
          <Link to="/register">
            <button className="btn" type="button">
              Register
            </button>
          </Link>
        </div>
      )

      const Show = () => (
        <div className="first_bg">
          <h1 className="hello">Hello {name}</h1>
          <p className="topic">{display}</p>
        </div>
      )

      return (
        <>
          <Header />
          <div className="home_bg">
            {status ? Show() : Register()}
            <div className="second_bg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
                className="meetup_img"
              />
            </div>
          </div>
        </>
      )
    }}
  </Context.Consumer>
)

export default Home
