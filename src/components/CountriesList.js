import React from 'react';
import {NavLink} from 'react-router-dom';
import countries from '../countries.json'
import './CountriesList.css';


class CountriesList extends React.Component {
    state = {
       allCountries: countries
    }

    render () {
        return (
        <div className="container countries-bloc">
            <div className="row">
                <div className="col-5 countries-column">
                <div className="list-group">
                    <ul className='ul-countries'>
                        {this.state.allCountries.map((country) => {
                            return (
                                <li className="each-country" key={country.cca3}>
                                <NavLink className="country-navlink" to={`/countrydetails/${country.cca3}`}> {country.name.common} </NavLink> 
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
        </div>
        )
    }
}

export default CountriesList;