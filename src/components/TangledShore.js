import React, { Component } from 'react';

class TangledShore extends React.Component {
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

	render() {
		return (
			<div><h1>TangledShore</h1></div>
		)
	}	
}

export default TangledShore;