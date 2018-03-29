import React from "react";
import Articles from "./Articles";
import "./ArticlesList.css";

const ArticlesList = props => {
	if(!(Array.isArray(props.articles)) && !(props.onSaved))
		return <h2 className = "error">Unable to retrieve articles from the New York Times</h2>;
	else if(props.articles.length === 0 && !(props.onSaved))
		return <h2 className = "error">Please enter search parameters to retrieve New York Times articles</h2>;
	else if(!(Array.isArray(props.articles)) && props.onSaved)
		return <h2 className = "error">Unable to retrieve saved articles</h2>;
	else if(props.articles.length === 0 && props.onSaved)
		return <h2 className = "error">There are no saved articles</h2>;
	else
		return <Articles {...props} />;
};

export default ArticlesList;

