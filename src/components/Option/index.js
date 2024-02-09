import './index.css'

const Option = props => {
  const {topic} = props

  const {id, displayText} = topic

  return (
    <option value={id} className="option">
      {displayText}
    </option>
  )
}

export default Option
