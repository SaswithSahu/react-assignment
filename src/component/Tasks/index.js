import './index.css'

const Tasks = props => {
  const {eachTask} = props
  return (
    <li className="each-task-item">
      <p className="paragraph">{eachTask.task}</p>
      <p className="tag">{eachTask.tag}</p>
    </li>
  )
}

export default Tasks
