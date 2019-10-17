import React, { Component } from 'react';
import {lsdata} from './lostsectordata.js';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import '../styles/styles.css';

class Home extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			proceedMap: false,
			inputString:"",
			displayName:"",
			mID:"",
			charData:{},
		}

		this.searchPlayer = this.searchPlayer.bind(this);
		this.getCharacters = this.getCharacters.bind(this);
		this.inputHandler = this.inputHandler.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	searchPlayer() {
		let targetURL = "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayer/3/" + this.state.inputString + "/";

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
	                alert("Player does not exist");
	            })
	}

	getCharacters() {
		let targetURL = "https://www.bungie.net/Platform/Destiny2/3/Profile/" + this.state.mID + "/?components=200";

			fetch(targetURL, { headers: {
				'X-API-KEY': 'c2f6f171ac5a45049af04b87f3587605'
			}})
	            .then((response) => response.json())
	            .then((response) => {
	                this.setState({
	                	charData: response.Response.characters.data,
	                	proceedMap: true
	                })
	            })
	            .catch(( error ) => {
	                console.error(error)
	            })			
	}

	inputHandler(event) {
		this.setState({ inputString: event.target.value });
	}

	handleClick() {
		if (this.state.inputString != "") {
			this.searchPlayer();
		}
	}

	render() {
		if (this.state.proceedMap) {
			return (<Redirect to={{
						pathname:'/Director',
						state: { ign: this.state.inputString,
								 displayName: this.state.displayName,
								 mID: this.state.mID,
								 charData: this.state.charData }			
					}}/>
			);
		}

		return (
			<div className="container">
				<div className="row" style={{paddingTop:30}}>
					<div className="pr-2">
						<input
							className="inputStyle"
							placeholder="Enter your in-game name"
							value= {this.state.inputString}
							onChange = {this.inputHandler}
						/>
					</div>
					<div className="btn-group pl-5">
	                    <button 
	                        type="button" 
	                        className="btn btn-light"
	                        onClick = {this.handleClick} 
	                    >
	                        Go!
	                    </button>
	            	</div>
	            </div>

	            <div className="row" style={{paddingTop:100, paddingLeft: 50}}>
					<Link className="btn btn-light" to="/Director">Click to see world map without login</Link>
	            </div>
	        </div>
		)
	}	
}

export default Home;