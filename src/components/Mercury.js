import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import '../styles/styles.css';
import map from '../images/mercury.png'
import { lsdata } from './lostsectordata.js'

class Mercury extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			lsObject: {},
			modalShow: false,
			modalTitle: "",
			modalBoss: "",
			modalType: "",
			leftOffset: (window.screen.width - 1306) / 2
		}

		this.callAPI = this.callAPI.bind(this);
		this.setDotProperties = this.setDotProperties.bind(this);
		this.setModal = this.setModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}

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
		console.log(window.screen.width);
		//console.log(lsdata)
	    this.callAPI();
	}

	setDotProperties(x,y, id) {
		let dot = {
			width: 20,
			height: 20,
			top: y,
			left: x,
			borderRadius: 4,
			borderStyle:"transparent",
			borderColor: 0,
			borderWidth: 2,
			position: "absolute",
			cursor: "pointer"
		}

		if (this.state.lsObject[id]) {
			dot["borderColor"] = "#00FE0F";
			dot["borderStyle"] = "solid";
		}
		else if (this.state.lsObject[id] !== undefined) {
			dot["borderColor"] = "red";
			dot["borderStyle"] = "solid";
		}

		return (<div style={dot}></div>)
	}

	setModal(sectorID) {
		this.setState({
			modalShow: true,
			modalTitle: lsdata["mercury"][sectorID].name,
			modalBoss: lsdata["mercury"][sectorID].boss,
			modalType: lsdata["mercury"][sectorID].type
		});
	}

	closeModal() {
		this.setState({modalShow: false});
	}

	render() {
		return (
			<div className="map-wrapper2" style={{left: this.state.leftOffset}}>
				<img className="test" src={map} useMap="#imageMap"></img>
				<map name="imageMap">
					<div onClick={() => {this.setModal(3107552723)}}>
						<area shape="circle" coords="787,544,12"/>
						{this.setDotProperties(778,533,3107552723)}
					</div>
				</map>
				<Modal show={this.state.modalShow} centered onHide={() => {this.closeModal()}}>
					<Modal.Header closeButton>
						<Modal.Title>{this.state.modalTitle}</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<p>Lost Sector Boss: {this.state.modalBoss}</p>
						<p>Lost Sector Enemy Type: {this.state.modalType}</p>
					</Modal.Body>

					<Modal.Footer>
						<Button onClick={() => {this.closeModal()}}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		)
	}	
}

export default Mercury;