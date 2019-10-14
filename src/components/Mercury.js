import React, { Component } from 'react';
import '../styles/styles.css';
import map from '../images/mercury.png'

const styleObj = {
	width: 8,
	height: 8,
	top: 100,
	left: 0,
	borderRadius: 4,
	backgroundColor: "red",
	position: "absolute"
};

class Mercury extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			lsObject: {},
			dotObject: styleObj,
			test: true,
		}

		this.callAPI = this.callAPI.bind(this);
		this.setDotProperties = this.setDotProperties.bind(this);
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

	componentDidMount() {
	    this.callAPI();
	}

	setDotProperties(x,y) {
		let dot = {
			width: 20,
			height: 20,
			top: y,
			left: x,
			borderRadius: 4,
			borderStyle:"solid",
			borderColor:"red",
			borderWidth: 2,
			position: "absolute",
			cursor: "pointer"
		}

		if (this.state.test == true) {
			dot["borderColor"] = "#00FE0F";
			//dot["borderWidth"] = 0;
		}	

		return (<div style={dot}></div>)
	}

	render() {
		return (
			<div className="map-wrapper">
				<img height="742" width="1306" src={map} usemap="#imageMap"></img>
				<map name="imageMap">
					<div onClick={() => console.log("Yoooo")}>
						<area shape="circle" coords="787,544,12"/>
						{this.setDotProperties(778,533)}
					</div>
				</map>
			</div>
		)
	}	
}

export default Mercury;