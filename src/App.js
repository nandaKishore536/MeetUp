import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import NotFound from './components/NotFound'

import Login from './components/Login'

import Home from './components/Home'

import Context from './context/Context'

import './App.css'

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

class App extends Component {
  state = {
    name: '',
    status: false,
    error: false,
    topic: topicsList[0].id,
    display: topicsList[0].displayText,
  }

  nameUpdate = event => {
    this.setState({name: event.target.value})
  }

  statusUpdate = () => {
    this.setState({status: true})
  }

  topicUpdate = event => {
    const v = event.target.value

    const s = topicsList.filter(each => each.id === v)

    this.setState({topic: v, display: s[0].displayText})
  }

  showError = () => {
    this.setState({error: true})
  }

  render() {
    const {name, status, topic, error, display} = this.state
    return (
      <Context.Provider
        value={{
          status,
          name,
          topic,
          error,
          display,
          statusUpdate: this.statusUpdate,
          nameUpdate: this.nameUpdate,
          topicUpdate: this.topicUpdate,
          showError: this.showError,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Login} />
          <Route exact path="/NotFound" component={NotFound} />
          <Redirect to="/NotFound" />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
