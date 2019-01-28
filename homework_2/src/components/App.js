import React, { Component } from 'react';
import People from './People';
import '../css/App.css';

const data = [{
  id: 1,
  name: "Maria Montti",
  type: "model"
}, {
  id: 2,
  name: "Andreas Öhlund & Maria Therese",
  type: "photographer"
}, {
  id: 3,
  name: "Liu Liang",
  type: "model"
}, {
  id: 4,
  name: "Mostar Models",
  type: "model"
}, {
  id: 5,
  name: "Axel Lindahl",
  type: "photographer"
}, {
  id: 6,
  name: "Daniel Lindh",
  type: "photographer"
}, {
  id: 7,
  name: "Jadi",
  type: "model"
}, {
  id: 8,
  name: "Eric Broms",
  type: "photographer"
}, {
  id: 9,
  name: "Melodie Jeng",
  type: "model"
}, {
  id: 10,
  name: "Gustav Almestal",
  type: "photographer"
}, {
  id: 11,
  name: "Sara Ghofmann",
  type: "model"
}, {
  id: 12,
  name: "John Leah",
  type: "model"
}, {
  id: 13,
  name: "Anna Mailer",
  type: "model"
}, {
  id: 14,
  name: "Johan Sandberg",
  type: "photographer"
}, {
  id: 15,
  name: "Tomas Falmer",
  type: "photographer"
}, {
  id: 16,
  name: "Pal Allan",
  type: "photographer"
}];

class App extends Component {
  render() {

  	const model_arr = [];
  	const photographer_arr = [];
  	let proffesion_arr = [];
  	const type_arr = data.map(element=>{
  		if(element.type === 'model'){
  			model_arr.push(element);
  		}else{
  			photographer_arr.push(element);
  		}
  		return proffesion_arr = [model_arr, photographer_arr]
  	});
  	
    return (
      <section className="front_page">
        <h1>Book a Talent</h1>
        <div className="list_container">
        	{
        		type_arr[0].map((types, i)=>{
        			return <People key={i} data={types} type={types[0].type} />
        		})
        	}
        </div>	
      </section>
    );
  }
}

export default App;
