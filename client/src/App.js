import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Container, Row} from "./components/Grid";
import SavedModal from "./components/SavedModal/SavedModal";
import io from "socket.io-client";

const socket = io();

class App extends Component {
	state = {
		savedModalTriggered: false,
		articlesSaved: [],
		articlesUnsaved: []
	};

	componentDidMount() {
		socket.on("saved article", article => {
			let articlesSavedCopy = this.state.articlesSaved;
			articlesSavedCopy.push(article.title);
			this.setState({savedModalTriggered: true, articlesSaved: articlesSavedCopy});
		});

		socket.on("unsaved article", article => {
			let articlesUnsavedCopy = this.state.articlesUnsaved;
			articlesUnsavedCopy.push(article.title);
			this.setState({savedModalTriggered: true, articlesUnsaved: articlesUnsavedCopy});
		});
	};

	closeSavedModal = event => {
		this.setState({savedModalTriggered: false, articlesSaved: [], articlesUnsaved: []});
	};
	
	render() {
		return (
			<Router>
				<div>
					<Container fluid>
						<Row>
							<SavedModal closeSavedModal = {this.closeSavedModal} modalTriggered = {this.state.savedModalTriggered} savedArticles = {this.state.articlesSaved} 
							unsavedArticles = {this.state.articlesUnsaved} />
						</Row>
						<Row>
							<Header />
						</Row>
						<Row>
							<Navigation />
						</Row>
						<Switch>
							<Route exact path = "/" render = {() => (<Search socket = {socket} />)} />
							<Route exact path = "/search" render = {() => (<Search socket = {socket} />)} />
							<Route exact path = "/saved" render = {() => (<Saved socket = {socket} />)} />
							<Route component = {NoMatch} />
						</Switch>
					</Container>
				</div>
			</Router>
		);
	}
};

export default App;
