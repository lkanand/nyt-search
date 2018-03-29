import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Container, Row} from "./components/Grid";

const App = () =>
	<Router>
		<div>
			<Container fluid>
				<Row>
					<Header />
				</Row>
				<Row>
					<Navigation />
				</Row>
				<Switch>
					<Route exact path = "/" component = {Search} />
					<Route exact path = "/search" component = {Search} />
					<Route exact path = "/saved" component = {Saved} />
					<Route component = {NoMatch} />
				</Switch>
			</Container>
		</div>
	</Router>;

export default App;
