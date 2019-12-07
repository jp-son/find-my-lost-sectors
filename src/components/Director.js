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
			checklistURL: ""
		}

		//this.searchPlayer = this.searchPlayer.bind(this);
		this.getCharacters = this.getCharacters.bind(this);
		this.setCharacters = this.setCharacters.bind(this);
	}

	/*searchPlayer() {
		let targetURL = "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/-1/" + this.props.location.state.ign + "/";

			fetch(targetURL, { headers: {
				'X-API-KEY': 'c2f6f171ac5a45049af04b87f3587605'
			}})
	            .then((response) => response.json())
	            .then((response) => {
	                this.setState({
	                	displayName: response.Response[0].displayName,
	                	mID: response.Response[0].membershipId,
	                }, () => this.getCharacters())
	            })
	            .catch(( error ) => {
	                console.error(error)
	            })
	}*/

	/*getCharacters() {
		let targetURL = "https://www.bungie.net/Platform/Destiny2/3/Profile/" + this.state.mID + "/?components=200";

			fetch(targetURL, { headers: {
				'X-API-KEY': 'c2f6f171ac5a45049af04b87f3587605'
			}})
	            .then((response) => response.json())
	            .then((response) => {
	                this.setState({
	                	charData: response.Response.characters.data,
	                }, () => this.setImage())
	            })
	            .catch(( error ) => {
	                console.error(error)
	            })			
	}*/

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

	render() {
		//console.log(this.props.location.state.charData[Object.keys(this.props.location.state.charData)[0]].emblemPath);
		return (
				<div className="row" style={{margin:0}}>
					<div className="col" style={{padding:0}}>
						<div className="map-wrapper">
							<img height="742" width="1306" src={worldMap} useMap="#imageMap"></img>
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
								<Link to={{
									pathname: "/Mercury",
									state: {
										checklistURL: this.state.checklistURL
									}
								}}>
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
					</div>
					<div className="col" style={{textAlign:"center"}}>
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
		)
	}	
}

export default Director;