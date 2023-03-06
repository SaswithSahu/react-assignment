const Tags = props => {
  const {each} = props
  return <option>{each.displayText}</option>
}

export default Tags
