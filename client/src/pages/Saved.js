import React, {Component} from "react";
import SubHeader from "../components/SubHeader/SubHeader";
import Content from "../components/Content/Content";
import {Container, Row} from "../components/Grid";
import ArticlesList from "../components/ArticlesList/ArticlesList";
import CommentModal from "../components/CommentModal/CommentModal";
import API from "../utils/API";

class Saved extends Component {
	state = {
		savedArticles: [],
		commentModalTriggered: false,
		articleSelected: {},
		comments: [],
		newComment: ""
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
			copyResults.splice(index, 1);
			this.setState({savedArticles: copyResults});
		}
		else
			console.log("Could not unsave article");
	};

	unsave = (index, saved) => {
		API.deleteArticle(this.state.savedArticles[index].nytId).then(response => {
			this.reverseSaved(index, response.data);
		});
	};

	showModal = (index) => {
		this.postComments(index);
	};

	closeModal = () => {
		this.setState({commentModalTriggered: false});
	};

	inputChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
	};

	postComments = (index) => {
		API.getArticleComments(this.state.savedArticles[index]._id).then(response => {
			if(response.data === "failure") {
				console.log("Could not get comments for article");
				return;
			}

			this.setState({commentModalTriggered: true, comments: response.data, articleSelected: this.state.savedArticles[index]});
		});
	};

	submitComment = () => {
		if(this.state.newComment === "")
			return;

		var data = {
			comment: this.state.newComment,
			id: this.state.articleSelected._id
		};

		let that = this;

		API.submitComment(data).then(response => {
			if(response.data === "failure") {
				console.log("Could not add comment to database");
				return;
			}
			
			let commentsCopy = that.state.comments;
			commentsCopy.push(response.data);
			that.setState({comments: commentsCopy, newComment: ""});
		});
	};

	deleteComment = (index) => {
		var data = {
			articleId: this.state.articleSelected._id,
			commentId: this.state.comments[index]._id
		};

		let that = this;

		API.deleteComment(data).then(response => {
			if(response.data !== "success") {
				console.log("Could not delete comment");
				return;
			}

			let commentsCopy = that.state.comments; 
			commentsCopy.splice(index, 1);
			that.setState({comments: commentsCopy});
		});
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<CommentModal  closeModal = {this.closeModal} modalTriggered = {this.state.commentModalTriggered} articleSelected = {this.state.articleSelected} 
					commentChange = {this.inputChange} comment = {this.state.newComment} submitComment = {this.submitComment} allComments = {this.state.comments}
					deleteComment = {this.deleteComment}/>
				</Row>
				<Row>
					<SubHeader>Saved Articles</SubHeader>
					<Content>
						<ArticlesList articles = {this.state.savedArticles} onSaved = {true} unsave = {this.unsave} showModal = {this.showModal} />
					</Content>
				</Row>
			</Container>
		);
	}
};

export default Saved;