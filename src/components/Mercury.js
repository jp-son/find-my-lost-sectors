import React, { Component } from 'react';
<<<<<<< HEAD
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import '../styles/styles.css';
import map from '../images/mercury.png'

/*const styleObj = {
=======
import '../styles/styles.css';
import map from '../images/mercury.png'

const styleObj = {
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c
	width: 8,
	height: 8,
	top: 100,
	left: 0,
	borderRadius: 4,
	backgroundColor: "red",
	position: "absolute"
<<<<<<< HEAD
};*/
=======
};
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c

class Mercury extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			lsObject: {},
<<<<<<< HEAD
			modalShow: false,
=======
			dotObject: styleObj,
			test: true,
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c
		}

		this.callAPI = this.callAPI.bind(this);
		this.setDotProperties = this.setDotProperties.bind(this);
<<<<<<< HEAD
		this.setModalShow = this.setModalShow.bind(this);
		//this.dotWrapper = this.dotWrapper.bind(this);
	}

	/*dotWrapper() {
		//this.setDotProperties(778, 533, 3107552723);
	}*/

	callAPI() {
		let targetURL = this.props.location.state.checklistURL;
		console.log(targetURL)
=======
	}

	callAPI() {
		//let targetURL = "https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018488108812/Character/2305843009468074119/?components=202";
		let targetURL = this.props.location.state.checklist;
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c

			fetch(targetURL, { headers: {
				'X-API-KEY': 'c2f6f171ac5a45049af04b87f3587605'
			}})
	            .then((response) => response.json())
	            .then((response) => {
	                this.setState({
	                	lsObject: response.Response.progressions.data.checklists["3142056444"]
<<<<<<< HEAD
	                })
=======
	                }, () => console.log(this.state.lsObject))
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c
	            })
	            .catch(( error ) => {
	                console.error(error)
	            })
	}

	componentDidMount() {
<<<<<<< HEAD
	    this.callAPI();
	}

	setDotProperties(x,y, id) {
=======
		console.log(this.props.location.state.checklistURL);
		console.log("https://www.bungie.net/Platform/Destiny2/3/Profile/4611686018488108812/Character/2305843009468074119/?components=202");
	    //this.callAPI();
	}

	setDotProperties(x,y) {
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c
		let dot = {
			width: 20,
			height: 20,
			top: y,
			left: x,
			borderRadius: 4,
			borderStyle:"solid",
<<<<<<< HEAD
			borderColor: 0,
=======
			borderColor:"red",
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c
			borderWidth: 2,
			position: "absolute",
			cursor: "pointer"
		}

<<<<<<< HEAD
		if (this.state.lsObject[id]) dot["borderColor"] = "#00FE0F";
		else if (this.state.lsObject[id] !== undefined) dot["borderColor"] = "red";
=======
		if (this.state.test == true) {
			dot["borderColor"] = "#00FE0F";
			//dot["borderWidth"] = 0;
		}	
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c

		return (<div style={dot}></div>)
	}

<<<<<<< HEAD
	setModalShow(showBoolean) {
		this.setState({modalShow: showBoolean});
	}

=======
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c
	render() {
		return (
			<div className="map-wrapper">
				<img height="742" width="1306" src={map} useMap="#imageMap"></img>
				<map name="imageMap">
<<<<<<< HEAD
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
=======
					<div onClick={() => console.log("Yoooo")}>
						<area shape="circle" coords="787,544,12"/>
						{this.setDotProperties(778,533)}
					</div>
				</map>
>>>>>>> 0ebd00576ab67637e2bfc3f05cb86f4d4a2bb11c
			</div>
		)
	}	
}

export default Mercury;