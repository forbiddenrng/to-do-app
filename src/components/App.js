import React, { Component } from 'react';
import './App.css';
import AddTask from './AddTask'
import TaskList from './TaskList'

class App extends Component {
  counter = 6
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrać w wota",
        date: '2020-08-30',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zagrać z fioneczką",
        date: '2020-08-31',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "uczyć się react",
        date: '2021-08-31',
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "wyjść na dwór",
        date: '2020-09-30',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "wrócić do szkoły",
        date: '2020-09-01',
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "kupić wyprawkę do szq",
        date: '2020-09-01',
        important: false,
        active: true,
        finishDate: null,
      },

    ]
  }

  deleteTask = (id) => {

    //const tasks = [...this.state.tasks]
    // const index = tasks.findIndex(task => task.id === id)
    // tasks.splice(index, 1)

    // this.setState({
    //   tasks,
    // })
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks,
    })

  }
  changeTaskStatus = (id) => {
    console.log("done elementu o id" + id)
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => {
    console.log('ok')
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    }
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true
  }


  render() {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus} />
      </div>
    );
  }
}

export default App;
