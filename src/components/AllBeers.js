import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

const beersList = 'https://ih-beers-api2.herokuapp.com/beers';

class AllBeers extends React.Component {
  state = {
    beers: []
  }
  
  componentDidMount() {
    axios.get(beersList)
    .then(responseFromApi => {
      this.setState({ beers: responseFromApi.data});
    })
    .catch(error => {
      console.log(error);
    })
  }
  
  render() {
    return(
      <div>
        <Navbar />
        <div>
        { this.state.beers.map( beer => {
            return (
              <div key={beer._id} className="card mb-3" style={{maxWidth: '540px'}}>
                <Link to={`/beers/${beer._id}`} style={{ textDecoration: 'none' }}>
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img src={beer.image_url} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h4 className="card-title">{beer.name}</h4>
                        <h5 className="card-text">{beer.tagline}</h5>
                        <p>Created by: {beer.contributed_by}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )})
          }
        </div>
      </div>
    )
  }
}
export default AllBeers;