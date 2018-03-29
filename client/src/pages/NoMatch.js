import React, {Component} from "react";
import {Container, Row} from "../components/Grid";
import Content from "../components/Content/Content";

var h2Style = {
	textAlign: "center",
	fontSize: "43px",
	paddingTop: "80px",
	paddingBottom: "80px"
};

class NoMatch extends Component {
	render() {
		return (
			<Container fluid>
				<Row>
					<Content><h2 style = {h2Style}>URL not found. Select a page from the navigation menu</h2></Content>
				</Row>
			</Container>
		);
	}
};

export default NoMatch;
