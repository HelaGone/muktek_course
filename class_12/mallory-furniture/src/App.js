import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';
import All from './components/All-products';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allproducts: [],
      methods: {
        handleClick: this.handleClick,
        handleClickCat: this.handleClickCat
      },
      categories: [],
      currentCat: '',
      showAll: false
    }
  }

  componentDidMount(){
    const fur_api = 'https://mallory-furniture-admin.now.sh/api/v1/products';
    fetch(fur_api)
    .then(response=>response.json())
    .then(data=>{ 
      const cats = data.map(product=>product.category);
      this.setState({
        allproducts: data,
        categories: cats.filter((v,i)=>cats.indexOf(v)===i)
      });
    }).catch(err=>console.error(err));
  }

  handleClick = (event)=>{
    this.setState({
      showAll: true,
      currentCat: ''
    });
  }

  handleClickCat = (event)=>{
    const target = event.target;
    const value = target.value;

    this.setState({
      currentCat: value,
      // showall:false
    });

  }

  render() {
    const {allproducts, methods, showAll, categories, currentCat} = this.state;
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={(props)=><Home allproducts={allproducts} showall={showAll} categories={categories} methods={methods} currentCat={currentCat} {...props} />} />
          <Route path="/about" exact component={About} />
          <Route path="/terms-conditions" exact component={Terms} />
          <Route path="/all" exact component={All} />
          <Route component={NotFound}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
