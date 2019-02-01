import React, { Component, Fragment } from 'react';
import '../css/App.css';
import Sidebar from './Sidebar';
import ContentList from './ContentList';
 
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date().toString(),
      tasks: [],
      methods: {
        btnClick: this.handleOnClick,
        formSubmit: this.handleOnSubmit,
        checked: this.isChecked
      },
      sidebarMethods: {
        addNewTask: this.handleNewTask
      },
      isNewTask: false,
      isCompleted: false,
      taskId: 0
    }//end state
  }//End constructor

  handleOnClick = (event) =>{
    this.setState({
      isNewTask: false
    })
  }

  handleOnSubmit = (event)=>{
    event.preventDefault();
    const target = event.target.mynewtask;
    const value = target.value;
    const tId = this.state.tasks.length
    this.setState({
      tasks: [...this.state.tasks,{
        id:tId, 
        name:value, 
        completed: false
      }]
    });
    target.value = '';
  }

  handleNewTask = (event)=>{
    const tasksLength = this.state.tasks.length
    // console.log(tasksLength);

    this.setState({
      isNewTask: true
    });
  }

  isChecked = (taskId)=>{
    const {tasks} = this.state;
    const taskCompleted = tasks.filter(task=>taskId === task.id);

    const newTask = taskCompleted[0].completed = !taskCompleted[0].completed;

    this.setState({
      tasks: this.state.tasks
    });

  }

  render() {
    const {date, sidebarMethods, methods, isNewTask, tasks} = this.state;
    // console.log(this.state.tasks);
    return (
      <Fragment>
        <div className="main_wrapper">
          <Sidebar sidebarMethods={sidebarMethods}/>
          <ContentList date={date} methods={methods} newTask={isNewTask} tasks={tasks} />
        </div>
      </Fragment>
    );
  }
}

export default App;
