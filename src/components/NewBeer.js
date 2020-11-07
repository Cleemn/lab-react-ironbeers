import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';

class NewBeer extends React.Component {
  state = {
    name: "",
    description: "",
    tagline: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by: ""
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;
    const tagline = this.state.tagline;
    const first_brewed = this.state.first_brewed;
    const brewers_tips = this.state.brewers_tips;
    const attenuation_level = this.state.attenuation_level;
    const contributed_by = this.state.contributed_by;
    axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { name, description, tagline, first_brewed, brewers_tips, attenuation_level, contributed_by })
    .then( () => {
        this.props.getData();
        this.setState({ name: "", description: "", tagline: "", first_brewed: "", brewers_tips: "", attenuation_level: "", contributed_by: "" });
    })
    .catch( error => console.log(error) )
  }
 
  handleChange = (event) => {  
      const {name, value} = event.target;
      this.setState({[name]: value});
  }

  render() {
    return(
      <div>
        <Navbar />
        <h3>Add a beer</h3>
        <form onSubmit={this.handleFormSubmit} className="container">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" name="name" onChange={ e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="tagline">Tagline</label>
            <input type="text" className="form-control" id="tagline" name="tagline" onChange={ e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea className="form-control" id="description" name="description" onChange={ e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="first_brewed">First Brewed</label>
            <input type="text" className="form-control" id="first_brewed" name="first_brewed" onChange={ e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="brewers_tips">Brewers Tips</label>
            <input type="text" className="form-control" id="brewers_tips" name="brewers_tips" onChange={ e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="attenuation_level">Attenuation Level</label>
            <input type="number" className="form-control" id="attenuation_level" name="attenuation_level" onChange={ e => this.handleChange(e)}/>
          </div>
          <div className="form-group">
            <label htmlFor="contributed_by">Contributed By</label>
            <input type="text" className="form-control" id="contributed_by" name="contributed_by" onChange={ e => this.handleChange(e)}/>
          </div>
          <input className="btn btn-primary" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default NewBeer;