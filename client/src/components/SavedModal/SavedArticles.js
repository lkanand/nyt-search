import React from "react";
import Articles from "./Articles.js";
import "./SavedModal.css";

const SavedArticles = props => 
	<div className = "articlesContainer">
		<ul>
			<Articles articles = {props.articles} />
		</ul>
	</div>;

export default SavedArticles;
