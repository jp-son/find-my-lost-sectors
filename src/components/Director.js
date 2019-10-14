import React, { Component } from 'react';
import {lsdata} from './lostsectordata.js';
import worldMap from '../images/main.png'
import { Link } from 'react-router-dom'
import '../styles/styles.css';
import ct from '../images/circletest.png'

const styleObj = {
	width: 8,
	height: 8,
	top: 100,
	left: 0,
	borderRadius: 4,
	backgroundColor: "red",
	position: "absolute"
};

class Director extends React.Component {
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
		return (
			<div className="map-wrapper">
				<img height="742" width="1306" src={worldMap} usemap="#imageMap"></img>
				<map name="imageMap">
					<Link to='/EDZ'>
						<area shape="circle" coords="643,423,119"/>
					</Link>
					<Link to="/Moon"> 
						<area shape="circle" coords="927,266,40"/>
					</Link>
					<Link to="/Io"> 
						<area shape="circle" coords="84,155,56"/>
					</Link>
					<Link to="/Mercury"> 
						<area shape="circle" coords="330,70,36"/>
					</Link>
					<Link to="/Mars"> 
						<area shape="circle" coords="298,316,64"/>
					</Link>
					<Link to="/Titan"> 
						<area shape="circle" coords="204,577,52"/>
					</Link>
					<Link to="/TangledShore"> 
						<area shape="circle" coords="1096,543,74"/>
					</Link>
					<Link to="/Nessus"> 
						<area shape="circle" coords="1110,71,48"/>
					</Link>
					<Link to="/DreamingCity"> 
						<area shape="circle" coords="1200,352,63"/>
					</Link>
				</map>
			</div>
		)
	}	
}

export default Director;