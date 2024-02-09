import Header from '../Header'

import Option from '../Option'

import Context from '../../context/Context'

import './index.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Login = props => (
  <Context.Consumer>
    {value => {
      const {
        name,
        topic,
        statusUpdate,
        nameUpdate,
        topicUpdate,
        error,
        showError,
      } = value

      const onName = event => {
        nameUpdate(event)
      }

      const onTopic = event => {
        topicUpdate(event)
      }

      const onTap = event => {
        event.preventDefault()

        if (name === '') {
          showError()
        } else {
          statusUpdate()
          const {history} = props
          history.replace('/')
        }
      }

      return (
        <>
          <Header />
          <div className="login_sub">
            <div className="img_con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
                className="login_img"
              />
            </div>

            <form className="form" onSubmit={onTap}>
              <h1 className="login_h1">Let us join</h1>
              <label htmlFor="name" className="label">
                NAME
              </label>
              <input
                type="text"
                id="name"
                className="input"
                value={name}
                onChange={onName}
              />

              <label htmlFor="topic" className="label">
                TOPICS
              </label>

              <select
                id="topic"
                className="input"
                value={topic}
                onChange={onTopic}
              >
                {topicsList.map(each => (
                  <Option key={each.id} topic={each} />
                ))}
              </select>

              <button type="submit" className="btn2">
                Register Now
              </button>
              {error && <p className="error">Please enter your name</p>}
            </form>
          </div>
        </>
      )
    }}
  </Context.Consumer>
)

export default Login
