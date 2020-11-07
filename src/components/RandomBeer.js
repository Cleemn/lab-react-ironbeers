import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const randomBeer = 'https://ih-beers-api2.herokuapp.com/beers/random';

class RandomBeer extends React.Component {
  state = {}

  componentDidMount(){
      this.getRandomBeer();
  }

  getRandomBeer = () => {
      axios.get(randomBeer)
      .then( responseFromApi =>{
          const theBeer = responseFromApi.data;
          this.setState(theBeer);
      })
      .catch((err)=>{
          console.log(err);
      });
  }

  render() {
    return(
      <div>
        <Navbar />
        <div className="card" style={{width: '18rem'}}>
          <img src={this.state.image_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <h6>{this.state.tagline}</h6>
            <p className="card-text">{this.state.description}</p>
            <small>{this.state.contributed_by}</small>
            <small>{this.state.first_brewed}</small>
            <strong>{this.state.attenuation_level}</strong>
          </div>
        </div>
      </div>
    )
  }
}
export default RandomBeer;