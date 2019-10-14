import React, { Component } from 'react';
import {lsdata} from './lostsectordata.js';
import { Link } from 'react-router-dom'
import '../styles/styles.css';

class Home extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			lsObject: {}
		}

		this.callAPI = this.callAPI.bind(this);
	}

	callAPI() {
		let targetURL = "https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018488108812/Character/2305843009468074119/?components=202";

			fetch(targetURL, { headers: {
				'X-API-KEY': 'c2f6f171ac5a45049af04b87f3587605'
			}})
	            .then((response) => response.json())
	            .then((response) => {
	                this.setState({
	                	lsObject: response.Response.progressions.data.checklists["3142056444"]
	                }, () => console.log(this.state.lsObject))
	            })
	            .catch(( error ) => {
	                console.error(error)
	            })
	}

	/*componentDidMount() {
	    this.callAPI();
	}*/

	render() {
		//console.log(this.state.lsObject);
		return (
			//<div className="map-point"></div>
			<Link className="btn btn-light" to="/Director">Click to see world map</Link>
		)
	}	
}

export default Home;