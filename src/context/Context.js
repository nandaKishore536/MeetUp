import React from 'react'

const Context = React.createContext({
  status: false,
  name: '',
  topic: '',
  error: '',
  display: '',
  statusUpdate: () => {},
  nameUpdate: () => {},
  topicUpdate: () => {},
  showError: () => {},
})

export default Context
