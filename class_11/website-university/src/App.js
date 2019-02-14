import React, { Component, Fragment } from 'react';
import './App.css';

import Header from './components/Header';
// import routes from './routes';

import {Switch, Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import ClassList from './components/ClassList';
import Student from './components/Student'; 
import NotFound from './components/NotFound';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      students: [],
      classes: [],
      methods: {
        fetchByClass: this.fetchStudentsByClass,
        fetchStudent: this.fetchStudentDetail
      },
      currentStudent: []
    }
  }

  componentDidMount(){
    const students_data = 'http://localhost:3000/students';
    fetch(students_data)
    .then(response=>response.json())
    .then(data=>{


      const clase = data.map(clase=>{
        return clase.class;
      });
      const single_class = clase.filter((v,i)=>clase.indexOf(v)===i);

      this.setState({
        classes: single_class
      });

    })
    .catch(err=>console.error(err));
  }

  fetchStudentsByClass = (className)=>{
    const data_url = `http://localhost:3000/students?class=${className}`;
    fetch(data_url)
    .then(response=>response.json())
    .then(data=>{ 
      this.setState({
        students: data
      });
    }).catch(err=>console.error(err));
  }//End Fetch by class

  fetchStudentDetail = (studentId)=>{
    const data_url = `http://localhost:3000/students/${studentId}`;
    fetch(data_url)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        currentStudent: data
      })
    }).catch(err=>console.error(err));
  }


  render() {
    const {students, classes, methods, currentStudent} = this.state;

    return (
      <Fragment>
        <Header/>

        <Switch>
          <Route path="/" exact render={(props)=><Home classes={classes} {...props} /> } />
          <Route path="/about" exact component={About}/>
          <Route path="/student/:studentId" render={(props)=><Student currentStudent={currentStudent} methods={methods} {...props} /> } />
          <Route path="/classlist/:class" render={(props)=><ClassList methods={methods} students={students} {...props} /> } />
          <Route component={NotFound}/>
        </Switch>

      </Fragment>
    );
  }
}

export default App;
