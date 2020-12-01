import React from 'react';
import countries from '../countries.json'
import {NavLink} from 'react-router-dom';
import './CountryDetails.css';

class CountryDetails extends React.Component {

    state = {
       name: "",
       capital: "",
       area: "",
       borders: [],
    }

    componentDidMount() {
        this.getCountryDetail();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            // This means that the url changed
            this.getCountryDetail();
        }
    }

    getCountryDetail = () => {
        let countryId = this.props.match.params.cca3;  
        
        console.log("cca3 coming from the url", countryId);
        let foundCountry = countries.find((country) => {
            return country.cca3 === countryId;   
        });

        this.setState({
            name: foundCountry.name.common,
            capital: foundCountry.capital[0],
            area: foundCountry.area,
            borders: foundCountry.borders
        })
    }

    render() {
        return (
            <div className="col-7 container">
                <div id="country-details">
                <h3> {this.state.name} </h3>
                    <table className="details">
                    <thead> </thead>
                    <tbody>
                    <hr/>
                    <tr> 
                        <td className="label">Capital </td>
                        <td className="content"><p> {this.state.capital}</p> </td>
                    </tr>
                    <hr/>
                    <tr>
                        <td className="label"> Area </td>
                        <td  className="content"><p> {this.state.area} km<sup>2</sup></p> </td>
                    </tr>
                    <hr/>
                    <tr className="label">
                        <td>Borders </td>
                        <td  className="content">
                        <ul className='ul-borders'>
                                    {this.state.borders.map((item, index) => {
                                        return (
                                            <li className="each-border" key={item}>
                                                <NavLink to={`/countrydetails/${item.index}`}> {item} </NavLink> 
                                            </li>
                                        )
                                    })}
                        </ul>
                        </td>
                    </tr>
                    </tbody>
                    </table>
                    </div>
            </div>
        )
    }
}


export default CountryDetails;