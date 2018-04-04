import React from "react";
import "./SavedModal.css";

const Articles = props => {
	return props.articles.map((element, index) => 
		<li key = {index}>{element}</li>
	);
}

export default Articles;