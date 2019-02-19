import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Terms from './components/Terms';
import All from './components/All-products';
import Category from './components/Category';
import Product from './components/Product';
import NotFound from './components/NotFound';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allproducts: [],
      categories: [],
      onSale: [],
      inCart: [],
      methods: {
        handleClick: this.handleClick,
        handleClickCat: this.handleClickCat,
        handleClickOnSale: this.handleClickOnSale,
        handleAddToCart: this.handleAddToCart
      },
      currentCat: '',
      showAll: false,
      isOnSale: false
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
      isOnSale: false,
      currentCat: ''
    });
  }

  handleClickOnSale = (event)=>{
    this.setState({
      isOnSale: true
    })
  }

  handleClickCat = (event)=>{
    const target = event.target;
    const value = target.value;
    this.setState({
      currentCat: value,
    });
  }

  handleAddToCart = (product) =>{
    this.setState({
      inCart: [...this.state.inCart, product]
    });
  }

  render() {
    const {allproducts, methods, categories, isOnSale, inCart} = this.state;
    return (
      <Fragment>
        <Header categories={categories} inCart={inCart}/>
        <Switch>
          <Route path="/" exact render={(props)=><Home allproducts={allproducts} categories={categories} methods={methods} {...props} /> } />
          <Route path="/about" exact component={About} />
          <Route path="/terms-conditions" exact component={Terms} />
          <Route path="/all" exact render={(props)=><All allproducts={allproducts} isOnSale={isOnSale} methods={methods} {...props} /> } />
          <Route path="/category/:category" render={(props)=><Category allproducts={allproducts} methods={methods} isOnSale={isOnSale} {...props} /> } />
          <Route path="/product/:product_id" render={(props)=><Product allproducts={allproducts} methods={methods} {...props} /> } />
          <Route component={NotFound}/>
        </Switch>
      </Fragment>
    );
  }
}

export default App;
