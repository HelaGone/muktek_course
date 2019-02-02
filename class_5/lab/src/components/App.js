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
      filteredTasks: [],
      methods: {
        btnClick: this.handleOnClick,
        formSubmit: this.handleOnSubmit,
        checked: this.isChecked
      },
      sidebarMethods: {
        addNewTask: this.handleNewTask,
        filter: this.taskFilter,
        search: this.searchTask
      },
      isNewTask: false,
      isCompleted: false,
      taskId: 0,
      emptyField: false,
      isDouble: false
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

    if(value!==''){
        
      const alreadyInList = this.state.tasks.filter(task=>task.name === value);

      console.log(alreadyInList);
      if(alreadyInList.length === 0){
        this.setState({
          tasks: [...this.state.tasks,{
            id:tId, 
            name:value, 
            completed: false,
          }],
          filteredTasks: [...this.state.tasks,{
            id:tId, 
            name:value, 
            completed: false,
          }],
          emptyField: false,
          isDouble: false
        });
      }else{
        this.setState({
          isDouble: true
        });
      }
    }else{
      this.setState({
        emptyField:true
      });
    }
    target.value = '';
  }

  isChecked = (taskId)=>{
    const {tasks} = this.state;
    const taskCompleted = tasks.filter(task=>taskId === task.id);
    const newTask = taskCompleted[0].completed = !taskCompleted[0].completed;
    this.setState({
      tasks: this.state.tasks
    });
  }

  handleNewTask = (event)=>{
    this.setState({
      isNewTask: true,
      isDouble: false
    });
  }

  taskFilter = (type)=>{
    let filtered = '';
    let typeStatus = (type === 'completed') ? true : false;
    if(this.state.tasks.length > 0){
      if(type === 'all'){
        filtered = this.state.tasks
      }else{
        filtered = this.state.tasks.filter(task => task.completed === typeStatus )
      }
      this.setState({
        filteredTasks: filtered
      })
    }
  }

  searchTask = (event)=>{
    const query = event.target.value.toLowerCase();
    const queried_task = this.state.tasks.filter((task)=>{
      return task.name.toLowerCase().includes(query);
    });
    this.setState({
      filteredTasks: queried_task
    });
  }

  render() {
    // console.log(this.state.filteredTasks);
    const {date, sidebarMethods, methods, isNewTask, filteredTasks} = this.state;
    return (
      <Fragment>
        <div className="main_wrapper">
          <Sidebar sidebarMethods={sidebarMethods}/>
          <ContentList date={date} methods={methods} newTask={isNewTask} tasks={filteredTasks} emptyField={this.state.emptyField} isDouble={this.state.isDouble}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
