import React, {Component} from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import Content from "../components/Content/Content";
import {Container, Row} from "../components/Grid";
import {Input, Placeholder, FormSubmit} from "../components/Form";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import API from "../utils/API";

var formStyle = {
	padding: "25px"
};

var today = new Date().toISOString().split("T")[0];

class Search extends Component {
	state = {
		topic: "",
		start: "",
		end: "",
		results: []
	};

	handleInputChange = event => {
		this.setState({[event.target.name]: event.target.value});
	};

	getArticles = event => {
		let promises = [];
		var that = this;
		event.preventDefault();
		API.getArticles(this.state.topic, this.state.start, this.state.end).then(res => {
			for(let i = 0; i < res.data.response.docs.length; i++) {
				let article = res.data.response.docs[i];
				let promise = API.findArticle(article._id).then(response => {
					if(response.data !== "error") {
						if(response.data === null)
							res.data.response.docs[i].saved = false;
						else
							res.data.response.docs[i].saved = true;
					}
					else
						console.log("Error in accessing database");
				});

				promises.push(promise);
			}

			Promise.all(promises).then(function() {
				that.setState({topic: "", start: "", end: "", results: res.data.response.docs});
			});
		}).catch(err => that.setState({results: err}));
	};

	reverseSaved = (index, response) => {
		if(response === "success") {
			let copyResults = this.state.results;
			copyResults[index].saved = !copyResults[index].saved;
			this.setState({results: copyResults});
		}
		else
			console.log("Could not save / unsave article");
	};

	saveOrUnsave = (index, saved) => {
		if(saved === false) {
			API.saveArticle(this.state.results[index]).then(response => {
				this.reverseSaved(index, response.data);
			});
		}
		else {
			API.deleteArticle(this.state.results[index]._id).then(response => {
				this.reverseSaved(index, response.data);
			});
		}
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<SubHeader>Article Search</SubHeader>
					<Content>
						<form style = {formStyle}>
							<Placeholder>Topic</Placeholder>
							<Input type = "text" name = "topic" value = {this.state.topic} onChange = {this.handleInputChange}/>
							<Placeholder>Start Date</Placeholder>
							<Input type = "date" name = "start" value = {this.state.start} onChange = {this.handleInputChange} max = {today} />
							<Placeholder>End Date</Placeholder>
							<Input type = "date" name = "end" value = {this.state.end} onChange = {this.handleInputChange} min = {this.state.start} max = {today}/>
							<FormSubmit onClick = {this.getArticles} disabled = {!(this.state.topic && this.state.start && this.state.end)}>Submit</FormSubmit>
						</form>
					</Content>
				</Row>
				<Row>
					<SubHeader>Search Results</SubHeader>
					<Content>
						<ArticlesList articles = {this.state.results} saveOrUnsave = {this.saveOrUnsave} onSaved = {false}/>
					</Content>
				</Row>
			</Container>
		);
	}
};

export default Search;