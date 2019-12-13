import React, { Component } from 'react';
import {lsdata} from './lostsectordata.js';
import worldMap from '../images/main.png'
import { Link } from 'react-router-dom'
import '../styles/styles.css';
import ct from '../images/circletest.png'
import Header from './Header'

const styleObj = {
	width: 8,
	height: 8,
	top: 100,
	left: 0,
	borderRadius: 4,
	backgroundColor: "red",
	position: "absolute"
};

const classMap = {
	671679327: "Hunter",
	3655393761: "Titan",
	2271682572: "Warlock",
};

class Director extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			displayName: "",
			mID: "",
			charData: "",
			imgLink: "",
			checklistURL: "",
			imageHeight: 0,
			imageWidth: 0,
		}

		this.getCharacters = this.getCharacters.bind(this);
		this.setCharacters = this.setCharacters.bind(this);
		this.setMap = this.setMap.bind(this);
		this.imageLoaded = this.imageLoaded.bind(this);
	}

	getCharacters() {
        let characters = [];

        Object.keys(this.state.charData).forEach((key) => {
            characters.push(<li onClick={() => this.setCharacters(key)}>
            	<a href="#" style={{color:'black'}}>{classMap[this.state.charData[key].classHash]}</a>
            </li>);
        });

        return characters;
    }

	setCharacters(key) {
		//let temp = "https://www.bungie.net/" + key;
		let temp = "https://www.bungie.net/" + this.state.charData[key].emblemPath;
		//console.log(temp);
		this.setState({
			imgLink: temp,
			checklistURL: "https://www.bungie.net/Platform/Destiny2/3/Profile/" + this.state.mID + "/Character/" + key + "/?components=202"
		}, () => console.log())
	}

	componentDidMount() {
		//console.log(this.refs.inner.clientWidth);
	    /*if (this.props.location.state) {
	    	sessionStorage.setItem("tempdata", this.props.location.state);
	    }
	    else {
	    	this.props.locations.state = sessionStorage.getItem("tempdata");
	    }*/
	    if (this.props.location.state === undefined) {
	    	this.setState({
		    	displayName: "No Profile",
				mID: -1,
				charData: -1,
				imgLink: -1
			})	
	    }
	    else {
		    this.setState({
		    	displayName: this.props.location.state.displayName,
				mID: this.props.location.state.mID,
				charData: this.props.location.state.charData,
				imgLink: "https://www.bungie.net/" + this.props.location.state.charData[Object.keys(this.props.location.state.charData)[0]].emblemPath,
				checklistURL: "https://www.bungie.net/Platform/Destiny2/3/Profile/" + this.props.location.state.mID + "/Character/" + Object.keys(this.props.location.state.charData)[0] + "/?components=202"
			})	
	    }
	}

	imageLoaded({target:img}) {
		this.setState({
			imageHeight: img.offsetHeight,
			imageWidth: img.offsetWidth,
		});
	}

	setMap() {
		let arr = [];

		//console.log(this.state.imageWidth);
		//console.log(this.state.imageHeight);

        Object.keys(lsdata).forEach((key) => {
        	let name = "/" + key;
        	let xCoord = Math.ceil(this.state.imageWidth * (lsdata[key].positionInfo.xCoord / 1306));
        	let yCoord = Math.ceil(this.state.imageHeight * (lsdata[key].positionInfo.yCoord / 742));
        	let radius = Math.ceil(this.state.imageWidth * (lsdata[key].positionInfo.radius / 1306));
        	let inputCoords = xCoord + "," + yCoord + "," + radius;

        	/*console.log(key + " xCoord: " + xCoord);
        	console.log(key + " yCoord: " + yCoord);
        	console.log(key + " radius: " + radius);*/

        	//console.log(inputCoords);
        	arr.push(
				<Link to={{
					pathname: name,
					state: {
						checklistURL: this.state.checklistURL
					}
				}}>
					<area shape="circle" coords={inputCoords}/>
				</Link>
        	)
        });

		return arr;
	}

	render() {
		return (
			<div>
				<div className="navbarDefault">
					<Header />
				</div>

				<div className="container-fluid">
					<div className="row">

						<div className="col-sm-8" style={{padding:0}}>
							<img className="map-wrapper" src={worldMap} useMap="#imageMap" onLoad={this.imageLoaded}></img>
							<map name="imageMap">
								{this.setMap()};
							</map>
						</div>

						<div className="col-sm-4 profileBox" style={{textAlign:"center"}}>
							<img src={this.state.imgLink}></img>
							<h1><strong>{this.state.displayName}</strong></h1>
							<div className="dropdown">
							  	<button className="btn btn-primary dropdown-toggle " type="button" data-toggle="dropdown">Dropdown
							  	<span className="caret"></span></button>
							  	<ul className="dropdown-menu">
							  		{this.getCharacters()}
							  	</ul>
							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}	
}

export default Director;