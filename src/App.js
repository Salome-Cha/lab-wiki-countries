import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Route } from 'react-router-dom';
// import countries from './countries.json'
import axios from 'axios';


class App extends React.Component {
    
  state = {
    countries: []
  }

  componentDidMount () { 
    axios.get('https://countries.tech-savvy.tech/countries')
    .then((response) => {
        this.setState({
            countries: response.data
        })
    }).catch(err => console.log(err))
}


  render () {
      return (
        <div className="App">
          <NavBar />
          <div className="row-div-wrap container">
          <CountriesList />
          <Route path='/countrydetails/:cca3' component={CountryDetails} />
          
          </div>
        </div>
      );
    }
}

export default App;
