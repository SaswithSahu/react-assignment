import {Component} from 'react'
import {v4} from 'uuid'
import Options from './component/Options'
import Tags from './component/Tags'
import Tasks from './component/Tasks'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]
class App extends Component {
  state = {tasksList: [], selectedOption: ''}

  addTask = () => {
    const {tasksList} = this.state
    const task = {
      id: v4(),
      task: document.getElementById('task').value,
      tag: document.getElementById('tag').value,
    }
    this.setState({tasksList: [...tasksList, task]})
    document.getElementById('task').value = ''
    document.getElementById('tag').value = tagsList[0].displayText
  }

  getSelectedTasks = otp => {
    const {selectedOption} = this.state
    if (otp !== selectedOption) {
      this.setState({selectedOption: otp})
    } else {
      this.setState({selectedOption: ''})
    }
  }

  render() {
    const {tasksList, selectedOption} = this.state
    let updatedTaskList
    if (selectedOption === '') {
      updatedTaskList = tasksList
    } else {
      updatedTaskList = tasksList.filter(each => each.tag === selectedOption)
    }
    return (
      <div className="app-container">
        <form className="left-container">
          <h1 className="head">Create a task!</h1>
          <label htmlFor="task" className="para">
            Task
          </label>
          <input
            className="input-element"
            placeholder="Enter the task here"
            id="task"
          />
          <label htmlFor="tag" className="para">
            Tags
          </label>
          <select className="input-element" id="tag">
            {tagsList.map(each => (
              <Tags each={each} key={each.optionId} />
            ))}
          </select>
          <button type="button" className="add-button" onClick={this.addTask}>
            Add Task
          </button>
        </form>
        <div className="right-container">
          <h1 className="head1">Tags</h1>
          <ul className="buttons-list">
            {tagsList.map(eachOption => (
              <Options
                eachOption={eachOption}
                key={eachOption.optionId}
                getSelectedTasks={this.getSelectedTasks}
                activated={eachOption.displayText === selectedOption}
              />
            ))}
          </ul>
          <h1 className="head1">Tasks</h1>
          <ul className="tasks-list">
            {updatedTaskList.length > 0 ? (
              updatedTaskList.map(eachTask => (
                <Tasks eachTask={eachTask} key={eachTask.id} />
              ))
            ) : (
              <p className="head1">No Tasks Added Yet</p>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
