import React, { Component, Fragment } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Detail from './components/Detail';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cities:[{
        id: 1,
        name: 'México'
      },{
        id: 2,
        name: 'London'
      },{
        id: 3,
        name: 'France'
      },{
        id:4,
        name: 'Australia'
      }],
      methods: {
        handleInput: this.handleInput,
        handleCityClick: this.handleCityClick
      },
      filtered: [{
        id: 1,
        name: 'México'
      },{
        id: 2,
        name: 'London'
      },{
        id: 3,
        name: 'France'
      },{
        id:4,
        name: 'Australia'
      }],
      weather: {}
    }//end state
  }//end constructor

  handleInput = (event)=>{
    event.preventDefault();
    const target = event.target.input_search;
    const value = target.value;
    const {cities} = this.state;

    const the_city = cities.filter(city=>city.name.toLowerCase()===value.toLowerCase());

    this.setState({
      filtered: the_city
    });

    console.log(the_city);

    target.value = '';
  }

  handleCityClick = (city)=>{
    // console.log(city);
    const geo_api = `http://www.mapquestapi.com/geocoding/v1/address?key=sArJL1ys5t77OIGcGoOc7RzZaVZrmVTn&location=${city}`;
    fetch(geo_api)
    .then(response=>response.json())
    .then(data=>{
      const {results} = data;
      const latLng = results[0].locations[0].latLng;
      const weather_url = `https://api.darksky.net/forecast/5b1d55c550f3af2278ba172397eeb94c/${latLng.lat},${latLng.lng}`;
      fetch(weather_url)
      .then(response=>response.json())
      .then(data=>{
        this.setState({
          weather: data
        })
      })
      .catch(err=>console.error(err))

    })
    .catch(err=>console.error(err));
  }

  render() {
    const {methods, filtered, weather} = this.state;
    return (
      <Fragment>
        <section id="main_section" className="main_container">
          <Sidebar cities={filtered} methods={methods} />
          <Detail weather={weather}/>
        </section>
      </Fragment>
    );
  }
}

export default App;
