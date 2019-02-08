import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      results: [],
      my_movie_endpoint: []
    }

  //   this.state = {
  //     countries: [],
  //     currentFlag: '',
  //     alreadyClicked: false
  //   }
  }

  componentDidMount(){

    fetch('http://localhost:5000/books')
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        my_movie_endpoint: data
      })
    })  
    .catch(err=>console.error(err))

    // const url = 'https://restcountries.eu/rest/v2/all';
    // fetch(url)
    // .then(response=>response.json())
    // .then((data)=>{
    //   const countryData = data.map(country=>{
    //     return country;
    //   });
    //   this.setState({
    //     countries: countryData
    //   });
    // }).catch(err=>console.error(err));
  }

  // handleClick = (code)=>{
  //   const countriesData = this.state.countries;
  //   const filtered = countriesData.filter(country => code === country.alpha2Code.toLowerCase())
  //   this.setState({
  //     currentFlag: filtered[0].flag,
  //     alreadyClicked: true
  //   })
  // }

  

  handleSubmitForm = (event)=>{
    event.preventDefault();
    // const API_URL = 'https://api.themoviedb.org/3';
    // const API_SEARCH_MOVIE = 'search/movie';
    // const API_KEY = 'b21e4e4688626d2b454b9bf55959a588';
    // const target = event.target.query;
    // const value = target.value;
    // target.value = '';


    // fetch(`${API_URL}/${API_SEARCH_MOVIE}?api_key=${API_KEY}&query=${value}`)
    // .then(response=>response.json())
    // .then(data=>{

    //   this.setState({
    //     results: data.results
    //   })
    //   console.log(data);
    // }).catch(err=>console.error(err));

    const target =event.target.save_movie;
    const value = target.value;

    target.value = '';

    fetch('http://localhost:5000/books/',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: value})
    }).then(response=>{
      return response.json();
    })
    .then(data=>{
      this.get_books();
    })
    .catch(err=>console.error(err));

    

  }

  get_books = ()=>{
    fetch('http://localhost:5000/books')
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        my_movie_endpoint: data
      })
    })  
    .catch(err=>console.error(err))
  }

  render() {
    const {results, my_movie_endpoint} = this.state
    return (
      <div className="App">
        <h1>APP</h1>
        <form onSubmit={this.handleSubmitForm}>
          {/*<input name="query" type="text" placeholder="buscar película"/>*/}
          <input name="save_movie" type="text" placeholder="guardar libro"/>
          <button type="submit">Search</button>
        </form>

        <div>
          <ul>
            {
              my_movie_endpoint.map(book=>{
                return <li key={book.id}>{book.name}</li>
              })
            }
          </ul>
        </div>

        <ul>
        {/*
          results.map(movie=>{
            return (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
              </li>
            );
          })*/
        }
        </ul>

        {/*
        {
          this.state.alreadyClicked && <img src={this.state.currentFlag} alt="Country flag" className="country_flag"/>
        }
        <ul>
        {
          this.state.countries.map(country => {
            return (
              <li key={ country.alpha2Code.toLowerCase() }>
                <button onClick={()=>this.handleClick(country.alpha2Code.toLowerCase())}>{ country.name } </button>
              </li>
            );
          })
        }
        </ul>
      */}

      </div>
    );
  }
}

export default App;
