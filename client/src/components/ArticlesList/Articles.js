import React from "react";
import Moment from "react-moment";
import "./ArticlesList.css";
import SaveButton from "./SaveButton";
import CommentButton from "./CommentButton";

const Articles = props => {
	if(!(props.onSaved)) {
		return props.articles.slice(0, 5).map((element, index) => 
			<div className = "article" key = {index}>
				<h1><a target = "_blank" href = {`${element.web_url}`}>{element.headline.main}</a></h1>
				<h3 className = {element.byline.original === null ? "displayNone" : ""}>{element.byline.original}</h3>
				<p className = {element.snippet === null ? "displayNone" : ""}>{element.snippet}</p>
				<div className = "bottomRow">
					<p className = {element.pub_date === null ? "displayNone" : ""} id="date-published">Published: <Moment format="MM/DD/YYYY">{element.pub_date}</Moment></p>
					<div className = "articleButtonContainer">
						<SaveButton index = {index} saved = {element.saved} saveOrUnsave = {props.saveOrUnsave} />
					</div>
				</div>
			</div>
		);
	}
	else {
		return props.articles.map((element, index) => 
			<div className = "article" key = {index}>
				<h1><a target = "_blank" href = {`${element.link}`}>{element.title}</a></h1>
				<h3 className = {element.author === null ? "displayNone" : ""}>{element.author}</h3>
				<p className = {element.summary === null ? "displayNone" : ""}>{element.summary}</p>
				<div className = "bottomRow">
					<div className = "dateContainer">
						<p className = {element.datePublished === null ? "displayNone" : ""} id="date-published">Published: <Moment format="MM/DD/YYYY">{element.datePublished}</Moment>,</p>
						<p id="date-saved">Saved: <Moment format="MM/DD/YYYY">{element.dateSaved}</Moment></p>
					</div>
					<div className = "articleButtonContainer">
						<SaveButton index = {index} saved = {true} saveOrUnsave = {props.unsave} />
						<CommentButton index = {index} />
					</div>
				</div>
			</div>
		);
	}

};

export default Articles;