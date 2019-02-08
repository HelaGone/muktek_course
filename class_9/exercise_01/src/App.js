import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import RegionList from './components/RegionList';
import WineList from './components/WineList';
import Detail from './components/Detail';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      regions: [],
      wines: [],
      methods: {
        handleClick: this.handleClick,
        handleClickDetail: this.handleClickDetail
      },
      currentImgSrc: '',
      currentWine: [],
      selected: false,
      showImg: false
    }
  }

  componentDidMount(){
    const wine_region_url = 'https://wines-api.herokuapp.com/api/regions';
    fetch(wine_region_url)
    .then(response => response.json())
    .then(data=>{
      this.setState({
        regions: data
      })
    })
    .catch(err=>console.error(err));
  }

  handleClick=(region, id)=>{
    const wines_byRegion_url = `https://wines-api.herokuapp.com/api/wines?region=${region}`
    fetch(wines_byRegion_url)
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        wines: data,

      });
    })
    .catch(err=>console.error(err))
  }

  handleClickDetail=(wineId)=>{
    const {wines} = this.state;
    const the_wine = wines.filter(wine=>wine.id === wineId);
    this.setState({
      currentWine: the_wine[0]
    });
    const image_by_id_url = `https://wines-api.herokuapp.com/api/wines/${wineId}/image`;
    fetch(image_by_id_url)
    .then(response=>{
      this.setState({
        currentImgSrc: response.url,
        showImg:true
      })
    })
    .catch(err=>console.error(err));
  }

  render() {
    const {regions, methods, clicked, wines, currentWine, currentImgSrc} = this.state;
    return (
      <Fragment>
        <div className="App">
          <Header />
        </div>
        <div className="wine_container">
          <RegionList regions={regions} methods={methods} isClicked={clicked} />
          <WineList wines={wines} methods={methods} />
          <Detail currentWine={currentWine} currentImgSrc={currentImgSrc} showImg={this.state.showImg}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
