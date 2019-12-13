import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import '../styles/styles.css';
import map from '../images/mercury.png'
import { lsdata } from './lostsectordata.js'
import Header from './Header'
import { Link } from 'react-router-dom'

class Mercury extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			lsObject: {},
			modalShow: false,
			modalTitle: "",
			modalBoss: "",
			modalType: "",
			imageHeight: 0,
			imageWidth: 0,
		}

		this.callAPI = this.callAPI.bind(this);
		this.setDotProperties = this.setDotProperties.bind(this);
		this.setModal = this.setModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.setMap = this.setMap.bind(this);
		this.imageLoaded = this.imageLoaded.bind(this);
	}

	callAPI() {
		let targetURL = this.props.location.state.checklistURL;
		//console.log(targetURL);

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
		//console.log(lsdata)
	    this.callAPI();
	}

	setDotProperties(x, y, id) {
		let scaledWidth = Math.ceil(this.state.imageWidth * (20 / 1306));
		let scaledHeight = Math.ceil(this.state.imageHeight * (20 / 742));

		let dot = {
			width: scaledWidth,
			height: scaledHeight,
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

	imageLoaded({target:img}) {
		this.setState({
			imageHeight: img.offsetHeight,
			imageWidth: img.offsetWidth,
		});
	}

	setMap() {
		let arr = [];

        Object.keys(lsdata["Mercury"]).forEach((key) => {
        	//console.log(key);
        	if (key != 'positionInfo') {
        		console.log(key);
	        	let xCoord = Math.ceil(this.state.imageWidth * (lsdata["Mercury"][key].xCoord / 1306));
	        	let yCoord = Math.ceil(this.state.imageHeight * (lsdata["Mercury"][key].yCoord / 742));
	        	let radius = Math.ceil(this.state.imageWidth * (lsdata["Mercury"][key].radius / 1306));
	        	let inputCoords = xCoord + "," + yCoord + "," + radius;

	        	let xCircle = Math.ceil(this.state.imageWidth * (lsdata["Mercury"][key].xCircle / 1306));
	        	let yCircle = Math.ceil(this.state.imageHeight * (lsdata["Mercury"][key].yCircle / 742));

	        	arr.push(
					<div onClick={() => {this.setModal(key)}}>
						<area shape="circle" coords={inputCoords}/>
						{this.setDotProperties(xCircle, yCircle, key)};
					</div>
	        	);
	        }
        });


		/*<Link to='/Moon'>
			<area shape="circle" coords={inputCoords}/>
		</Link>*/

		return arr;		
	}

	setModal(sectorID) {
		this.setState({
			modalShow: true,
			modalTitle: lsdata["Mercury"][sectorID].name,
			modalBoss: lsdata["Mercury"][sectorID].boss,
			modalType: lsdata["Mercury"][sectorID].type
		});
	}

	closeModal() {
		this.setState({modalShow: false});
	}

	render() {
		return (
			<div>
				<div className="navbarDefault">
					<Header />
				</div>

				<div className="container-fluid">

					<div className="row">
						<div className="col-sm-8" style={{padding: 0, height: this.state.imageHeight}}>
							<img className="map-wrapper" src={map} useMap="#imageMap" onLoad={this.imageLoaded}></img>
							<map name="imageMap">
								{this.setMap()};
							</map>
						</div>

						<div className="col-sm-4 profileBox" style={{textAlign: "center"}}>
							<h1>TODO: Filter Options</h1>
						</div>
					</div>

				</div>

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