import React, {Component} from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import Content from "../components/Content/Content";
import {Container, Row} from "../components/Grid";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import API from "../utils/API";


class Saved extends Component {
	state = {
		savedArticles: []
	};

	componentDidMount() {
		this.loadArticles();
	};

	loadArticles = () => {
		API.getSavedArticles().then(response => {
			if(response.data === "failure")
				console.log("Could not retrieve saved articles");
			else {
				this.setState({savedArticles: response.data});
			}
		});
	};

	reverseSaved = (index, response) => {
		if(response === "success") {
			let copyResults = this.state.savedArticles;
			copyResults = copyResults.splice(index);
			this.setState({results: copyResults});
		}
		else
			console.log("Could not unsave article");
	};

	unsave = (index, saved) => {
		API.deleteArticle(this.state.savedArticles[index].nytId).then(response => {
			this.reverseSaved(index, response.data);
		});
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<SubHeader>Saved Articles</SubHeader>
					<Content>
						<ArticlesList articles = {this.state.savedArticles} onSaved = {true} unsave = {this.unsave} />
					</Content>
				</Row>
			</Container>
		);
	}
};

export default Saved;