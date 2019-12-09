import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../styles/styles.css';
import map from '../images/mercury.png'

/*const styleObj = {
	width: 8,
	height: 8,
	top: 100,
	left: 0,
	borderRadius: 4,
	backgroundColor: "red",
	position: "absolute"
};*/

class Mercury extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			lsObject: {},
			modalShow: false,
		}

		this.callAPI = this.callAPI.bind(this);
		this.setDotProperties = this.setDotProperties.bind(this);
		this.setModalShow = this.setModalShow.bind(this);
		//this.dotWrapper = this.dotWrapper.bind(this);
	}

	/*dotWrapper() {
		//this.setDotProperties(778, 533, 3107552723);
	}*/

	callAPI() {
		let targetURL = this.props.location.state.checklistURL;
		console.log(targetURL)

			fetch(targetURL, { headers: {
				'X-API-KEY': 'c2f6f171ac5a45049af04b87f3587605'
			}})
	            .then((response) => response.json())
	            .then((response) => {
	                this.setState({
	                	lsObject: response.Response.progressions.data.checklists["3142056444"]
	                })
	            })
	            .catch(( error ) => {
	                console.error(error)
	            })
	}

	componentDidMount() {
	    this.callAPI();
	}

	setDotProperties(x,y, id) {
		let dot = {
			width: 20,
			height: 20,
			top: y,
			left: x,
			borderRadius: 4,
			borderStyle:"solid",
			borderColor: 0,
			borderWidth: 2,
			position: "absolute",
			cursor: "pointer"
		}

		if (this.state.lsObject[id]) dot["borderColor"] = "#00FE0F";
		else if (this.state.lsObject[id] !== undefined) dot["borderColor"] = "red";

		return (<div style={dot}></div>)
	}

	setModalShow(showBoolean) {
		this.setState({modalShow: showBoolean});
	}

	render() {
		return (
			<div className="map-wrapper">
				<img height="742" width="1306" src={map} useMap="#imageMap"></img>
				<map name="imageMap">
					<div onClick={() => {this.setModalShow(true)}}>
						<area shape="circle" coords="787,544,12"/>
						{this.setDotProperties(778,533, 3107552723)}
					</div>
				</map>
				<Modal show={this.state.modalShow} centered onHide={() => {this.setModalShow(false)}}>
					<Modal.Header closeButton>
						<Modal.Title>Modal title</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p>Modal body text goes here.</p>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={() => {this.setModalShow(false)}}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}	
}

export default Mercury;